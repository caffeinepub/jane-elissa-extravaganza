import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSitePublished() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<boolean>({
    queryKey: ['sitePublished'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.isPublished();
    },
    enabled: !!actor && !actorFetching,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}
