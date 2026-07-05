import {
  Hero,
  Features,
  Pricing,
  Testimonials,
  FAQ,
  Contact,
  LandingFooter,
} from '@/components/landing';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <LandingFooter />
    </div>
  );
}
