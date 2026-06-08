import { useEffect } from 'react';

export function NewsletterSection() {
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
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-10 md:p-16 border border-white/60 dark:border-gray-700 relative overflow-hidden shadow-2xl shadow-bit-lavender/10">
          {/* Background Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-bit-lavender rounded-full blur-[80px] opacity-20 dark:opacity-10 pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-bit-red rounded-full blur-[80px] opacity-20 dark:opacity-10 pointer-events-none"></div>
          
          {/* Content */}
          <div className="mb-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-bit-dark dark:text-white">
              Stay Updated
            </h2>
            <p className="text-bit-dark/70 dark:text-gray-300 max-w-lg mx-auto text-lg">
              Join our mailing list to get notified when new cohorts open and receive updates about our mission.
            </p>
          </div>
          
          {/* Tally Form Embed - Add background wrapper for better visibility */}
          <div className="relative z-10 bg-white/60 dark:bg-gray-800/60 rounded-xl p-6">
            <iframe 
              data-tally-src="https://tally.so/embed/EkPpQr?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1" 
              loading="lazy" 
              width="100%" 
              height="638" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Bit by Bit — Newsletter"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
