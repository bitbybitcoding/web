import { useEffect } from 'react';
import { GraduationCap, Heart, Users, Info } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Make a Real Impact',
    description: 'Transform lives by sharing your coding knowledge with passionate young learners.',
  },
  {
    icon: GraduationCap,
    title: 'Develop Teaching Skills',
    description: 'Enhance your communication and leadership abilities while giving back to the community.',
  },
  {
    icon: Users,
    title: 'Join Our Community',
    description: 'Connect with like-minded educators and programmers in Singapore.',
  },
];

export function TutorPage() {
  // Load Tally embed script
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        // @ts-ignore - Tally is loaded from external script
        if (typeof window.Tally !== 'undefined') {
          // @ts-ignore
          window.Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script exists, try to load embeds
      // @ts-ignore
      if (typeof window.Tally !== 'undefined') {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-6xl min-h-[650px] glass-panel bg-white/45 dark:bg-gray-900/45 border border-bit-lavender/30 dark:border-bit-lavender/50 rounded-[2rem] grid lg:grid-cols-12 overflow-hidden relative shadow-xl shadow-bit-lavender/5">
          
          {/* Left Column - Tally Form */}
          <div className="lg:col-span-7 p-6 md:p-10 lg:p-12 flex flex-col relative bg-white/40 dark:bg-gray-800/40">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 text-bit-dark dark:text-white tracking-tight">
                Become a Tutor
              </h1>
              <p className="text-bit-dark/70 dark:text-gray-300 text-lg">
                Share your passion for coding and inspire the next generation.
              </p>
            </div>

            {/* Tally Form Embed - Add dark mode styling wrapper */}
            <div className="flex-grow bg-white/80 dark:bg-gray-800/80 rounded-xl p-4">
              <iframe 
                data-tally-src="https://tally.so/embed/rjl8lv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
                loading="lazy" 
                width="100%" 
                height="1339" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Bit by Bit Coding — Tutor"
                className="w-full"
              ></iframe>
            </div>

            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-bit-lavender/10 dark:from-bit-lavender/5 to-transparent rounded-bl-full pointer-events-none"></div>
          </div>

          {/* Right Column - Benefits */}
          <div className="lg:col-span-5 bg-gradient-to-br from-bit-red to-bit-lavender p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
                alt="teaching background" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-bit-red/90 via-transparent to-transparent opacity-60"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-white">
                Why Become a Tutor?
              </h2>
              
              <div className="space-y-5">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex gap-5 p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 shadow-inner">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg font-display">{benefit.title}</h3>
                      <p className="text-sm text-white/80 mt-1 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="relative z-10 mt-8">
              <div className="bg-white/10 border border-white/30 rounded-2xl p-6 backdrop-blur-md">
                <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Who Can Apply
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  We welcome{' '}
                  <span className="text-white font-bold border-b border-white/50">industry professionals</span>,{' '}
                  <span className="text-white font-bold border-b border-white/50"> students with coding experience</span>, and{' '}
                  <span className="text-white font-bold border-b border-white/50">passionate senior learners</span>{' '}
                  who want to make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-bit-dark/50 dark:text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding. Opening the doors of coding education for all youth, bit by bit.</p>
      </footer>
    </div>
  );
}
