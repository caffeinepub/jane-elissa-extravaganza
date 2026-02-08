import { Link, useRouterState } from '@tanstack/react-router';
import { Music } from 'lucide-react';

export default function SiteHeader() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/assets/generated/competition-crest-logo.dim_512x512.png" 
              alt="Jane Elissa Extravaganza" 
              className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Jane Elissa Extravaganza
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                Music Competition
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 font-sans text-sm font-medium transition-colors rounded-sm ${
                isActive('/')
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              Home
            </Link>
            <Link
              to="/apply"
              className={`px-4 py-2 font-sans text-sm font-medium transition-colors rounded-sm ${
                isActive('/apply')
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              Apply
            </Link>
            <Link
              to="/faqs"
              className={`px-4 py-2 font-sans text-sm font-medium transition-colors rounded-sm ${
                isActive('/faqs')
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              FAQs
            </Link>
          </nav>

          <nav className="flex md:hidden items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 font-sans text-xs font-medium transition-colors rounded-sm ${
                isActive('/')
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              Home
            </Link>
            <Link
              to="/apply"
              className={`px-3 py-2 font-sans text-xs font-medium transition-colors rounded-sm ${
                isActive('/apply')
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              Apply
            </Link>
            <Link
              to="/faqs"
              className={`px-3 py-2 font-sans text-xs font-medium transition-colors rounded-sm ${
                isActive('/faqs')
                  ? 'text-accent bg-accent/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-muted'
              }`}
            >
              FAQs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

