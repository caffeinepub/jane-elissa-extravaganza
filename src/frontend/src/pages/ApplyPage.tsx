import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Upload, Youtube, Heart, AlertCircle } from 'lucide-react';
import { useCreateCheckoutSession } from '../hooks/useCreateCheckoutSession';
import { useCheckStripeConfiguration } from '../hooks/useQueries';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { ExternalBlob } from '../backend';
import type { Application, VideoMethod } from '../backend';

export default function ApplyPage() {
  const navigate = useNavigate();
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const { data: isStripeConfigured, isLoading: checkingStripe } = useCheckStripeConfiguration();
  const createCheckoutSession = useCreateCheckoutSession();

  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [videoMethod, setVideoMethod] = useState<'upload' | 'youtube'>('youtube');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');

  const isAuthenticated = !!identity;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 100MB for video)
      if (file.size > 100 * 1024 * 1024) {
        setError('Video file must be less than 100MB');
        return;
      }
      setUploadedFile(file);
      setError('');
    }
  };

  const validateForm = (): boolean => {
    if (!fullName.trim() || !email.trim() || !phone.trim() || !city.trim() || !dob.trim()) {
      setError('Please fill in all required fields');
      return false;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }

    if (videoMethod === 'youtube' && !youtubeLink.trim()) {
      setError('Please provide a YouTube link');
      return false;
    }

    if (videoMethod === 'upload' && !uploadedFile) {
      setError('Please upload a video file');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isAuthenticated) {
      setError('Please log in to submit your application');
      return;
    }

    if (!validateForm()) {
      return;
    }

    if (!isStripeConfigured) {
      setError('Payment system is not configured. Please try again later.');
      return;
    }

    try {
      // Create application draft and store in sessionStorage
      const applicationDraft: Partial<Application> = {
        fullName: fullName.trim(),
        dob: dob.trim(),
        email: email.trim(),
        phone: phone.trim(),
        city: city.trim(),
      };

      // Handle video method
      if (videoMethod === 'youtube') {
        applicationDraft.videoMethod = {
          __kind__: 'youtubeLink',
          youtubeLink: youtubeLink.trim()
        };
      } else if (uploadedFile) {
        const fileBytes = new Uint8Array(await uploadedFile.arrayBuffer());
        const blob = ExternalBlob.fromBytes(fileBytes).withUploadProgress((percentage) => {
          setUploadProgress(percentage);
        });
        applicationDraft.videoMethod = {
          __kind__: 'uploaded',
          uploaded: blob
        };
      }

      // Store draft in sessionStorage
      sessionStorage.setItem('applicationDraft', JSON.stringify(applicationDraft));

      // Create Stripe checkout session
      const session = await createCheckoutSession.mutateAsync([
        {
          productName: 'Jane Elissa Extravaganza Application Fee',
          productDescription: 'Application fee for the music competition. Proceeds support leukemia and cancer research.',
          priceInCents: BigInt(7500), // 75 CAD in cents
          currency: 'CAD',
          quantity: BigInt(1)
        }
      ]);

      if (!session?.url) {
        throw new Error('Payment session URL not available');
      }

      // Redirect to Stripe
      window.location.href = session.url;
    } catch (err: any) {
      console.error('Application submission error:', err);
      setError(err.message || 'Failed to process application. Please try again.');
    }
  };

  if (checkingStripe) {
    return (
      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
        </div>
      </div>
    );
  }

  if (!isStripeConfigured) {
    return (
      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              The payment system is currently not configured. Please contact the competition organizers or try again later.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <Card className="border-border/50 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl">Login Required</CardTitle>
              <CardDescription className="font-sans">
                Please log in to submit your application
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="font-sans text-muted-foreground">
                You need to be logged in to apply to the Jane Elissa Extravaganza. Click the button below to log in securely.
              </p>
              <Button
                onClick={login}
                disabled={isLoggingIn}
                size="lg"
                className="font-sans bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  'Login to Apply'
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Apply Now
          </h1>
          <p className="font-sans text-lg text-muted-foreground mb-6">
            Submit your application to perform at Times Square with Broadway stars
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span className="font-sans text-sm text-foreground">
              Application fee: <span className="font-semibold text-accent">75 CAD</span> · Supports cancer research
            </span>
          </div>
        </div>

        <Card className="border-border/50 shadow-elegant-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Application Form</CardTitle>
            <CardDescription className="font-sans">
              Complete all fields and submit your performance video
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-semibold">Personal Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-sans">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob" className="font-sans">Date of Birth *</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    className="font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-sans">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="font-sans">City *</Label>
                  <Input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Your city"
                    required
                    className="font-sans"
                  />
                </div>
              </div>

              {/* Video Submission */}
              <div className="space-y-4 pt-4 border-t border-border/50">
                <h3 className="font-serif text-lg font-semibold">Performance Video *</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Choose one method to submit your performance
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant={videoMethod === 'youtube' ? 'default' : 'outline'}
                    onClick={() => setVideoMethod('youtube')}
                    className="font-sans h-auto py-4 flex flex-col items-center gap-2"
                  >
                    <Youtube className="h-6 w-6" />
                    <span>YouTube Link</span>
                  </Button>
                  <Button
                    type="button"
                    variant={videoMethod === 'upload' ? 'default' : 'outline'}
                    onClick={() => setVideoMethod('upload')}
                    className="font-sans h-auto py-4 flex flex-col items-center gap-2"
                  >
                    <Upload className="h-6 w-6" />
                    <span>Upload Video</span>
                  </Button>
                </div>

                {videoMethod === 'youtube' && (
                  <div className="space-y-2">
                    <Label htmlFor="youtubeLink" className="font-sans">YouTube Video URL</Label>
                    <Input
                      id="youtubeLink"
                      value={youtubeLink}
                      onChange={(e) => setYoutubeLink(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="font-sans"
                    />
                  </div>
                )}

                {videoMethod === 'upload' && (
                  <div className="space-y-2">
                    <Label htmlFor="videoFile" className="font-sans">Video File (Max 100MB)</Label>
                    <Input
                      id="videoFile"
                      type="file"
                      accept="video/*"
                      onChange={handleFileChange}
                      className="font-sans"
                    />
                    {uploadedFile && (
                      <p className="font-sans text-sm text-muted-foreground">
                        Selected: {uploadedFile.name}
                      </p>
                    )}
                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="space-y-1">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-accent h-2 rounded-full transition-all"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                        <p className="font-sans text-xs text-muted-foreground text-center">
                          Uploading: {uploadProgress}%
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="font-sans">{error}</AlertDescription>
                </Alert>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={createCheckoutSession.isPending}
                  className="w-full font-sans bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {createCheckoutSession.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Proceed to Payment (75 CAD)'
                  )}
                </Button>
                <p className="font-sans text-xs text-center text-muted-foreground mt-3">
                  You will be redirected to a secure payment page to complete your application
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

