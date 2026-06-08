import { useEffect } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We typically respond within 24 hours',
    detail: 'info@bbbcoding.org',
    color: 'from-bit-lavender to-bit-red',
  },
  {
    icon: MessageSquare,
    title: 'Chat with Us',
    description: "Fill out the form and we'll get back to you",
    detail: 'Quick response time',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    icon: Phone,
    title: 'General Inquiries',
    description: 'Questions about programmes, volunteering, or partnerships',
    detail: "We're here to help",
    color: 'from-bit-red to-bit-lavender',
  },
];

export function ContactPage() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (typeof window.Tally !== 'undefined') {
          // @ts-ignore
          window.Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (typeof window.Tally !== 'undefined') {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bit-red animate-pulse" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our programs? Want to volunteer? Looking to partner with us? We'd love to hear from you.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 border border-white/60 dark:border-gray-700 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-bit-dark dark:text-white">
                  {info.title}
                </h3>
                <p className="text-sm text-bit-dark/60 dark:text-gray-400 mb-2">
                  {info.description}
                </p>
                <p className="text-sm font-semibold text-bit-lavender dark:text-bit-lavender">
                  {info.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl overflow-hidden border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/10">
            <div className="grid lg:grid-cols-12">

              {/* Form Side */}
              <div className="lg:col-span-7 p-8 md:p-12 bg-white/40 dark:bg-gray-800/40">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 text-bit-dark dark:text-white">
                    Drop Us a Message
                  </h2>
                  <p className="text-bit-dark/70 dark:text-gray-300">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Tally Form Embed */}
                <div className="flex-grow">
                  <iframe
                    data-tally-src="https://tally.so/embed/Y5Z2r5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                    loading="lazy"
                    width="100%"
                    height="842"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Bit by Bit Coding — Contact"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Info Side — gradient panel, always vivid, no dark override needed */}
              <div className="lg:col-span-5 bg-gradient-to-br from-bit-lavender to-bit-red p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                    alt=""
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bit-lavender/90 via-transparent to-transparent opacity-60" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
                    Why Reach Out?
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        heading: 'For Parents & Students',
                        body: 'Learn more about our programs, application process, and upcoming cohorts.',
                      },
                      {
                        heading: 'For Volunteers',
                        body: "Interested in mentoring or contributing? We'd love to have you on board.",
                      },
                      {
                        heading: 'For Partners',
                        body: 'Explore collaboration opportunities and how we can work together.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                        <div>
                          <h4 className="font-bold text-white text-lg mb-1">{item.heading}</h4>
                          <p className="text-sm text-white/80 leading-relaxed">{item.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative z-10 mt-8">
                  <div className="bg-white/10 border border-white/30 rounded-2xl p-6 backdrop-blur-md">
                    <p className="text-sm text-white/90 leading-relaxed italic">
                      "Bit by Bit isn't just about coding — it's about building a community of young innovators who will shape Singapore's future."
                    </p>
                    <p className="text-xs text-white/70 mt-3 font-semibold">— The Bit by Bit Team</p>
                  </div>
                </div>
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
