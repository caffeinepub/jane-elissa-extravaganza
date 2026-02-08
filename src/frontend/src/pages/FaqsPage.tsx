import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FaqsPage() {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-lg text-muted-foreground">
            Everything you need to know about the Jane Elissa Extravaganza Music Competition
          </p>
        </div>

        <Card className="border-border/50 shadow-elegant">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Competition Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-sans text-left">
                  What is the Jane Elissa Extravaganza?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The Jane Elissa Extravaganza is an annual music competition where the winner earns the opportunity to perform at a prestigious event in Times Square, New York City, alongside celebrated Broadway stars. It's a once-in-a-lifetime opportunity to showcase your talent on one of the world's most iconic stages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-sans text-left">
                  Who can apply?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The competition is open to musicians of all ages and backgrounds. Whether you're a vocalist, instrumentalist, or ensemble, we welcome applications from talented performers who are passionate about their craft and ready to share their artistry with the world.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-sans text-left">
                  What is the application fee?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The application fee is 75 CAD. All proceeds from application fees go directly to leukemia and cancer research, supporting life-saving work while you pursue your musical dreams.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-sans text-left">
                  How do I submit my performance?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  You can submit your performance in two ways: upload a video file directly through our application form, or provide a link to your YouTube video. Choose the method that works best for you. Make sure your video clearly showcases your talent and is of good audio and visual quality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-sans text-left">
                  What should my video include?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Your video should feature a complete performance that best represents your musical abilities. We recommend choosing a piece that highlights your strengths and showcases your unique artistry. The video should be clear, well-lit, and have good audio quality. There's no strict time limit, but we suggest keeping it between 3-10 minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="font-sans text-left">
                  When will winners be announced?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Winners will be notified via email after the judging period concludes. All applicants will receive updates about the competition timeline and results. Make sure to provide accurate contact information in your application.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="font-sans text-left">
                  What does the winner receive?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The winner will perform at the Jane Elissa Extravaganza, an annual event held in Times Square, New York City, sharing the stage with Broadway stars. This is an incredible opportunity to gain exposure, network with industry professionals, and perform in one of the most iconic locations in the world.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="font-sans text-left">
                  How are applications judged?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Applications are reviewed by a panel of experienced music professionals and industry experts. They evaluate performances based on technical skill, artistic expression, stage presence, and overall impact. We're looking for performers who demonstrate exceptional talent and the potential to captivate an audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="font-sans text-left">
                  Is the application fee refundable?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Application fees are non-refundable as they directly support leukemia and cancer research. By applying, you're making a meaningful contribution to life-saving medical research while pursuing your musical aspirations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="font-sans text-left">
                  Can I submit multiple applications?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Yes, you may submit multiple applications if you wish to showcase different performances or musical styles. Each application requires a separate submission and application fee.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="font-sans text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            For additional inquiries, please reach out through our contact channels.
          </p>
        </div>
      </div>
    </div>
  );
}

