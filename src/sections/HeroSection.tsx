import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-bit-red animate-pulse"></span>
          <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
            Python Language & Application Cohort Open
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1.05] tracking-tight mb-8 text-bit-dark dark:text-white drop-shadow-sm">
          Opening the Doors of Coding Education for{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-bit-lavender via-bit-red to-bit-lavender bg-[length:200%_auto] animate-gradient">
            Every Youth
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mb-10 font-body leading-relaxed">
          Free, structured, multi-year coding pathways for youths aged 10-18. 
          Advanced, structured and highly innovative curriculum.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <Link to="/apply">
            <Button 
              size="lg" 
              className="bg-bit-lavender hover:bg-violet-600 text-white text-lg font-bold shadow-lavender-lg hover:shadow-[0_20px_30px_-10px_rgba(140,82,255,0.6)] transition-all group h-14 px-8"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/tutor">
            <Button 
              size="lg" 
              className="bg-bit-red hover:bg-red-600 text-white text-lg font-bold shadow-[0_10px_30px_-5px_rgba(255,77,109,0.4)] hover:shadow-[0_20px_30px_-10px_rgba(255,77,109,0.6)] transition-all group h-14 px-8"
            >
              <GraduationCap className="mr-2 w-5 h-5" />
              Become a Tutor
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/pathways">
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-bit-dark/10 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-700 text-bit-dark dark:text-white text-lg font-bold backdrop-blur-sm transition-all hover:border-bit-dark/30 dark:hover:border-bit-lavender/50 h-14 px-8"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
