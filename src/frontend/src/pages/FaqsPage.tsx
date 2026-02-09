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
            Everything you need to know about The Luminary International Music Competition
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
                  What is The Luminary International Music Competition?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The Luminary International Music Competition is a prestigious annual music competition where the winner earns the opportunity to perform at the Jane Elissa Extravaganza in Times Square, New York City, alongside celebrated Broadway stars. It's a once-in-a-lifetime opportunity to showcase your talent on one of the world's most iconic stages.
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
                  To submit your performance, go to the Apply page and tap on the application link. This will take you to our external application form where you can fill out all required information and submit your performance video. You can either upload a video file directly or provide a link to your YouTube video.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-sans text-left">
                  What should my video include?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Your video should feature a complete performance that best represents your musical abilities. We recommend choosing a piece that highlights your strengths and showcases your unique artistry. The video should be clear, well-lit, and have good audio quality. The time limit is around 2-4 minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="font-sans text-left">
                  What is the application deadline?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The application deadline is August 1st, 2026. Make sure to submit your application before this date to be considered for the competition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="font-sans text-left">
                  When will winners be announced?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Winners will be announced through email on September 1st, 2026. All applicants will receive updates about the competition results. Make sure to provide accurate contact information in your application.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="font-sans text-left">
                  When is the performance?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The performance will be mid November in Times Square, New York City. The winner will perform at the Jane Elissa Extravaganza, sharing the stage with Broadway stars in one of the most iconic locations in the world.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="font-sans text-left">
                  What does the winner receive?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  The winner will perform at the Jane Elissa Extravaganza, an annual event held in Times Square, New York City, sharing the stage with Broadway stars. This is an incredible opportunity to gain exposure, network with industry professionals, and perform in one of the most iconic locations in the world.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="font-sans text-left">
                  How are applications judged?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Applications are reviewed by a panel of experienced music professionals and industry experts. Judging criteria include technical skill, artistic expression, stage presence, originality, and overall performance quality. All submissions are evaluated fairly and thoroughly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className="font-sans text-left">
                  Can I submit multiple applications?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  Each applicant may submit one application per competition cycle. We encourage you to submit your strongest, most polished performance to maximize your chances of success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className="font-sans text-left">
                  How does my application support cancer research?
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                  100% of application fees are donated to leukemia and cancer research initiatives. By applying to The Luminary International Music Competition, you're directly contributing to life-saving medical research while pursuing your passion for music. Every application makes a difference.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

