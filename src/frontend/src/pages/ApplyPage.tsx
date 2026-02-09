import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function ApplyPage() {
  const jotformUrl = 'https://pci.jotform.com/form/260387196671063';

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <Card className="border-border/50 shadow-elegant">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="font-serif text-3xl md:text-4xl font-bold">
              Apply to The Luminary
            </CardTitle>
            <CardDescription className="font-sans text-lg">
              Submit your application to perform at the Jane Elissa Extravaganza in Times Square with Broadway stars
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6 py-8">
            <p className="font-sans text-muted-foreground leading-relaxed">
              Click the button below to open our application form. You'll be able to submit your performance video and complete your application securely.
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="font-sans text-base px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant"
              >
                <a
                  href={jotformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Open Application Form
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="font-sans text-sm text-muted-foreground pt-4">
              The application will open in a new window
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
