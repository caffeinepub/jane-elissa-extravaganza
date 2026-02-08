import { useEffect, useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useActor } from '../hooks/useActor';
import { useFinalizeApplication } from '../hooks/useQueries';
import type { Application } from '../backend';

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  const { actor } = useActor();
  const finalizeApplication = useFinalizeApplication();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const processPayment = async () => {
      try {
        // Get session ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id');

        if (!sessionId) {
          setErrorMessage('Payment session not found');
          setStatus('error');
          return;
        }

        if (!actor) {
          setErrorMessage('System not ready. Please try again.');
          setStatus('error');
          return;
        }

        // Verify payment with Stripe
        const stripeStatus = await actor.getStripeSessionStatus(sessionId);

        if (stripeStatus.__kind__ !== 'completed') {
          setErrorMessage('Payment verification failed');
          setStatus('error');
          return;
        }

        // Get application draft from sessionStorage
        const draftJson = sessionStorage.getItem('applicationDraft');
        if (!draftJson) {
          setErrorMessage('Application data not found');
          setStatus('error');
          return;
        }

        const draft = JSON.parse(draftJson);

        // Finalize and submit application
        await finalizeApplication.mutateAsync({
          draft,
          sessionId
        });

        // Clear draft
        sessionStorage.removeItem('applicationDraft');
        setStatus('success');
      } catch (err: any) {
        console.error('Payment processing error:', err);
        setErrorMessage(err.message || 'Failed to process payment');
        setStatus('error');
      }
    };

    processPayment();
  }, [actor, finalizeApplication]);

  if (status === 'processing') {
    return (
      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="border-border/50 shadow-elegant text-center">
            <CardContent className="pt-12 pb-12">
              <Loader2 className="h-16 w-16 animate-spin text-accent mx-auto mb-6" />
              <h2 className="font-serif text-2xl font-semibold mb-2">Processing Your Application</h2>
              <p className="font-sans text-muted-foreground">
                Please wait while we confirm your payment and finalize your submission...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="border-border/50 shadow-elegant">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="font-serif text-2xl">Payment Processing Issue</CardTitle>
              <CardDescription className="font-sans">
                We encountered an issue processing your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="font-sans">{errorMessage}</AlertDescription>
              </Alert>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link to="/apply">
                  <Button variant="default" className="font-sans">
                    Try Again
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="font-sans">
                    Return Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <Card className="border-border/50 shadow-elegant">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="font-serif text-3xl">Application Submitted!</CardTitle>
            <CardDescription className="font-sans text-base">
              Thank you for applying to the Jane Elissa Extravaganza
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-accent/5 rounded-lg p-6 space-y-3">
              <p className="font-sans text-sm text-foreground leading-relaxed">
                Your application has been successfully submitted and your payment has been processed. You will receive a confirmation email shortly with your application details.
              </p>
              <p className="font-sans text-sm text-foreground leading-relaxed">
                Our panel of judges will carefully review all submissions. Winners will be notified via email after the judging period concludes.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Thank you for supporting leukemia and cancer research through your application fee. Your contribution helps fund life-saving medical research.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Link to="/">
                <Button size="lg" className="font-sans bg-accent text-accent-foreground hover:bg-accent/90">
                  Return Home
                </Button>
              </Link>
              <Link to="/faqs">
                <Button size="lg" variant="outline" className="font-sans">
                  View FAQs
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

