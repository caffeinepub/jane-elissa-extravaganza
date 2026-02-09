import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Award, Heart, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              The Luminary International Music Competition
            </h1>
            <p className="font-serif text-xl md:text-2xl text-foreground/90 italic">
              Illuminate Your Talent on the World Stage
            </p>
            <p className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Showcase your talent on one of the world's most iconic stages. The winner performs at the annual Jane Elissa Extravaganza in Times Square, New York City, alongside celebrated Broadway stars.
            </p>
            <div className="pt-4">
              <Link to="/apply">
                <Button size="lg" className="font-sans text-base px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-elegant">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Times Square, NYC</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Perform at one of the most prestigious venues in the world, in the heart of New York City.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-elegant">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Broadway Stars</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Share the stage with celebrated Broadway performers at the Jane Elissa Extravaganza.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-elegant">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Music className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold">Showcase Your Talent</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Submit your best performance and compete for this once-in-a-lifetime opportunity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cause Section */}
      <section className="py-16 md:py-24 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="mx-auto w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Heart className="h-10 w-10 text-accent fill-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Supporting Life-Saving Research</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Every application fee contributes directly to leukemia and cancer research. By applying to The Luminary International Music Competition, you're not only pursuing your musical dreams—you're helping fund critical research that saves lives.
            </p>
            <p className="font-sans text-base text-muted-foreground">
              Application fee: <span className="font-semibold text-accent">75 CAD</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to Apply?</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Submit your video performance and take the first step toward performing at the Jane Elissa Extravaganza in Times Square with Broadway stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/apply">
                <Button size="lg" className="font-sans px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant">
                  Apply Now
                </Button>
              </Link>
              <Link to="/faqs">
                <Button size="lg" variant="outline" className="font-sans px-8 py-6 border-border/50 hover:bg-muted">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
