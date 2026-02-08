import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { XCircle, AlertCircle } from 'lucide-react';

export default function PaymentFailurePage() {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <Card className="border-border/50 shadow-elegant">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <XCircle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="font-serif text-2xl">Payment Cancelled</CardTitle>
            <CardDescription className="font-sans">
              Your application was not submitted
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="font-sans">
                Your payment was cancelled or did not complete. No charges have been made to your account.
              </AlertDescription>
            </Alert>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <p className="font-sans text-sm text-foreground leading-relaxed">
                Your application draft has been saved. You can return to the application page to complete your submission.
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                If you experienced any issues during the payment process, please try again or contact us for assistance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Link to="/apply">
                <Button size="lg" className="font-sans bg-accent text-accent-foreground hover:bg-accent/90">
                  Try Again
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="font-sans">
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

