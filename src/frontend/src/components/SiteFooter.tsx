import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">The Luminary International Music Competition</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              A prestigious music competition where the winner performs at the annual Jane Elissa Extravaganza in Times Square, New York City, with Broadway stars.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/apply" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">
                Apply Now
              </Link>
              <Link to="/faqs" className="font-sans text-sm text-muted-foreground hover:text-accent transition-colors">
                FAQs
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">Our Mission</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Application fees support leukemia and cancer research, making every submission a contribution to life-saving work.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="font-sans text-sm text-center text-muted-foreground">
            © 2026. Built with <Heart className="inline h-4 w-4 text-accent fill-accent" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

