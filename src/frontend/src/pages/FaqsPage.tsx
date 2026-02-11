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

        <div className="space-y-8">
          {/* Competition Details */}
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
                    When is the performance?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    The performance will be mid November in Times Square, New York City. The winner will perform at the Jane Elissa Extravaganza, sharing the stage with Broadway stars in one of the most iconic locations in the world.
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

                <AccordionItem value="item-6">
                  <AccordionTrigger className="font-sans text-left">
                    Will travel and accommodation be covered?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    The competition will not pay for any travel or accommodation expenses. Winners are responsible for arranging and covering their own transportation and lodging for the performance in New York City.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card className="border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="eligibility-1">
                  <AccordionTrigger className="font-sans text-left">
                    Who can apply?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    The competition is open to musicians of all ages and backgrounds from around the world. Whether you're a vocalist, instrumentalist, or ensemble, we welcome applications from talented performers who are passionate about their craft and ready to share their artistry with the world.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="eligibility-2">
                  <AccordionTrigger className="font-sans text-left">
                    Are there any age restrictions?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    There are no age restrictions for this competition. Musicians of all ages are encouraged to apply and showcase their talent.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="eligibility-3">
                  <AccordionTrigger className="font-sans text-left">
                    Can ensembles or groups apply?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Yes, both solo performers and ensembles are welcome to apply. If applying as a group, please ensure all members are aware of and agree to the competition terms and conditions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Submission Guidelines */}
          <Card className="border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="submission-1">
                  <AccordionTrigger className="font-sans text-left">
                    How do I submit my performance?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    To submit your performance, go to the Apply page and tap on the application link. This will take you to our external application form where you can fill out all required information and submit your performance video. You can either upload a video file directly or provide a link to your YouTube video.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="submission-2">
                  <AccordionTrigger className="font-sans text-left">
                    What should my video include?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Your video should feature a complete performance that best represents your musical abilities. We recommend choosing a piece that highlights your strengths and showcases your unique artistry. The video should be clear, well-lit, and have good audio quality. The time limit is around 2-4 minutes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="submission-3">
                  <AccordionTrigger className="font-sans text-left">
                    What are the video technical requirements?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    <p className="mb-2">Your video submission should meet the following requirements:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Duration: 2-4 minutes</li>
                      <li>Format: MP4, MOV, or YouTube link</li>
                      <li>Video quality: Minimum 720p (HD preferred)</li>
                      <li>Audio quality: Clear and audible without distortion</li>
                      <li>Lighting: Well-lit so that performers are clearly visible</li>
                      <li>Framing: Full view of performer(s) throughout the performance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="submission-4">
                  <AccordionTrigger className="font-sans text-left">
                    Can I submit multiple applications?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Each applicant may submit one application per competition cycle. We encourage you to submit your strongest, most polished performance to maximize your chances of success.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="submission-5">
                  <AccordionTrigger className="font-sans text-left">
                    Can I edit or update my application after submission?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Once submitted, applications cannot be edited or updated. Please review all information and your video carefully before submitting to ensure everything is accurate and represents your best work.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Judging Criteria */}
          <Card className="border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Judging Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="judging-1">
                  <AccordionTrigger className="font-sans text-left">
                    How are applications judged?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Applications are evaluated by a panel of experienced music professionals and industry experts. Judging criteria include technical proficiency, artistic interpretation, stage presence, originality, and overall performance quality. We look for performers who demonstrate exceptional talent and the potential to captivate an audience on a world-class stage.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="judging-2">
                  <AccordionTrigger className="font-sans text-left">
                    Who are the judges?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Our judging panel consists of accomplished musicians, music educators, industry professionals, and representatives from the Jane Elissa Extravaganza. The panel brings diverse perspectives and extensive experience in evaluating musical talent across various genres and performance styles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="judging-3">
                  <AccordionTrigger className="font-sans text-left">
                    Is there a specific genre preference?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    No, we welcome all musical genres and styles. Whether you perform classical, jazz, pop, rock, folk, or any other genre, your application will be judged on the quality of your performance and artistry, not on genre preference.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Prizes & Benefits */}
          <Card className="border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Prizes & Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="prizes-1">
                  <AccordionTrigger className="font-sans text-left">
                    What does the winner receive?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    The winner receives the incredible opportunity to perform at the Jane Elissa Extravaganza in Times Square, New York City, alongside celebrated Broadway stars. This is a once-in-a-lifetime chance to showcase your talent on one of the world's most iconic stages and gain exposure to a prestigious audience. Please note that travel and accommodation expenses are not covered.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prizes-2">
                  <AccordionTrigger className="font-sans text-left">
                    Will I receive feedback on my application?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Due to the high volume of applications, we are unable to provide individual feedback to all applicants. However, all applicants will be notified of the competition results via email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Terms & Conditions */}
          <Card className="border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="terms-2">
                  <AccordionTrigger className="font-sans text-left">
                    Are application fees refundable?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    No, application fees are non-refundable. All fees go directly to supporting leukemia and cancer research, contributing to life-saving work regardless of competition outcomes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="terms-3">
                  <AccordionTrigger className="font-sans text-left">
                    How is my personal information used?
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    Your personal information is used solely for the purposes of administering the competition, contacting you about your application status, and coordinating the performance if you are selected as the winner. We respect your privacy and will not share your information with third parties without your consent.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
