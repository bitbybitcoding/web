import { ImpactSection } from '@/sections/ImpactSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';

export function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ImpactSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
