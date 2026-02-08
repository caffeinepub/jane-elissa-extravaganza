import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import type { Application, VideoMethod } from '../backend';
import { ExternalBlob } from '../backend';
import { Principal } from '@dfinity/principal';

export function useCheckStripeConfiguration() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['stripeConfigured'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isStripeConfigured();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFinalizeApplication() {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ draft, sessionId }: { draft: any; sessionId: string }) => {
      if (!actor) throw new Error('Actor not available');
      if (!identity) throw new Error('Identity not available');

      // Get caller principal from identity
      const callerPrincipal = identity.getPrincipal();
      
      // Generate application ID
      const applicationId = `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Build complete application
      const application: Application = {
        id: applicationId,
        applicant: callerPrincipal,
        fullName: draft.fullName,
        dob: draft.dob,
        email: draft.email,
        phone: draft.phone,
        city: draft.city,
        videoMethod: draft.videoMethod,
        paymentIntentId: sessionId,
        submissionTimestamp: BigInt(Date.now() * 1000000), // Convert to nanoseconds
        paymentStatus: { __kind__: 'completed', completed: null }
      };

      // Submit application
      await actor.submitApplication(application);
      return application;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    }
  });
}

