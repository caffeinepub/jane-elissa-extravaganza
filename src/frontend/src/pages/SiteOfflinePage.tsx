import React from 'react';

export default function SiteOfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-bold text-foreground">
            Site Temporarily Offline
          </h1>
          <p className="text-lg text-muted-foreground">
            We're currently performing maintenance. Please check back soon.
          </p>
        </div>
      </div>
    </div>
  );
}
