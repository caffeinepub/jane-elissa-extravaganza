import React from 'react';
import { useSitePublished } from '../hooks/useSitePublished';
import SiteOfflinePage from '../pages/SiteOfflinePage';
import { Button } from './ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface SitePublishGateProps {
  children: React.ReactNode;
}

export default function SitePublishGate({ children }: SitePublishGateProps) {
  const { data: isPublished, isLoading, isFetched, isError, error, refetch } = useSitePublished();

  // Show loading state while fetching publish status
  if (isLoading || !isFetched) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show error state if publish status cannot be fetched
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="flex justify-center">
            <AlertCircle className="h-16 w-16 text-destructive" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-serif font-bold text-foreground">
              Connection Error
            </h1>
            <p className="text-muted-foreground">
              We're having trouble connecting to the server. Please check your internet connection and try again.
            </p>
            {error && (
              <p className="text-sm text-muted-foreground/80 mt-2">
                {error instanceof Error ? error.message : 'Unknown error occurred'}
              </p>
            )}
          </div>
          <Button
            onClick={() => refetch()}
            className="gap-2"
            size="lg"
          >
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  // Show offline page if site is unpublished
  if (isPublished === false) {
    return <SiteOfflinePage />;
  }

  // Show normal app if published
  return <>{children}</>;
}
