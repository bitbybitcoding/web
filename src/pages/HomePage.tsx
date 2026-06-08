import { HeroSection } from '../sections/HeroSection';
import { StatsSection } from '../sections/StatsSection';
import { ImpactSection } from '../sections/ImpactSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { AboutSection } from '../sections/AboutSection';
import { PathwaysPreview } from '../sections/PathwaysPreview';
import { PartnersWallSection } from '../sections/PartnersWallSection';
import { NewsletterSection } from '../sections/NewsletterSection';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <PartnersWallSection />
      <ImpactSection />
      <TestimonialsSection />
      <div className="aboutsection">
        <AboutSection />
      </div>
      <PathwaysPreview />
      <NewsletterSection />
    </div>
  );
}
