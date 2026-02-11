import { Link } from '@tanstack/react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomeFaqPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Quick answers to common questions about the competition
          </p>
        </div>

        <Card className="border-border/50 shadow-elegant">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Competition Essentials</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-sans text-left">
                  What is The Luminary International Music Competition?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The Luminary International Music Competition is a prestigious annual music competition where the winner earns the opportunity to perform at the Jane Elissa Extravaganza in Times Square, New York City, alongside celebrated Broadway stars. It's a once-in-a-lifetime opportunity to showcase your talent on one of the world's most iconic stages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-sans text-left">
                  What is the application deadline?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The application deadline is August 1st, 2026 at 12:00 AM PST. Make sure to submit your application before this date to be considered for the competition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-sans text-left">
                  When will winners be announced?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Winners will be announced through email on September 1st, 2026. All applicants will receive updates about the competition results. Make sure to provide accurate contact information in your application.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-sans text-left">
                  Will travel and accommodation be covered?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The competition will not pay for any travel or accommodation expenses. Winners are responsible for arranging and covering their own transportation and lodging for the performance in New York City.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-sans text-left">
                  What is the application fee?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The application fee is 75 CAD. All proceeds from application fees go directly to leukemia and cancer research, supporting life-saving work while you pursue your musical dreams.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-8 text-center">
              <Link to="/faqs">
                <Button variant="outline" className="font-sans px-6 py-3 border-border/50 hover:bg-muted group">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
