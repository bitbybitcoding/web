import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, Search, BookOpen, Users, Mail } from 'lucide-react';

const quickLinks = [
  {
    icon: Home,
    label: 'Home',
    desc: 'Back to the beginning',
    path: '/',
    gradient: 'from-bit-lavender to-violet-400',
  },
  {
    icon: BookOpen,
    label: 'Pathways',
    desc: 'Explore our programmes',
    path: '/pathways',
    gradient: 'from-bit-turquoise to-cyan-400',
  },
  {
    icon: Users,
    label: 'Apply',
    desc: 'Join a cohort',
    path: '/apply',
    gradient: 'from-bit-green to-emerald-400',
  },
  {
    icon: Mail,
    label: 'Contact',
    desc: 'Get in touch',
    path: '/contact',
    gradient: 'from-bit-red to-pink-400',
  },
];

// Animated counter that counts up to the target
function CountUp({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return <>{count}</>;
}

export function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6 flex items-center">
        <div className="max-w-4xl mx-auto w-full">

          {/* ── Hero ── */}
          <div className="text-center mb-16">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-red/30 dark:border-bit-red/50 mb-8 shadow-sm">
              <Search className="w-4 h-4 text-bit-red" />
              <span className="text-xs font-bold text-bit-red uppercase tracking-wider">Page Not Found</span>
            </div>

            {/* Giant 404 */}
            <div className="relative mb-6 select-none">
              <p
                className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-display font-black leading-none tracking-tighter"
                style={{
                  background: 'linear-gradient(135deg, var(--color-bit-lavender, #a78bfa) 0%, var(--color-bit-red, #f87171) 50%, var(--color-bit-turquoise, #22d3ee) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 24px rgba(167,139,250,0.25))',
                }}
              >
                <CountUp target={404} duration={900} />
              </p>
              {/* Subtle glow behind */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-br from-bit-lavender via-bit-red to-bit-turquoise rounded-full scale-75 mx-auto" />
            </div>

            {/* Heading + sub */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-bit-dark dark:text-white tracking-tight">
              Oops — looks like this page got lost
            </h1>
            <p className="text-lg text-bit-dark/60 dark:text-gray-400 max-w-xl mx-auto leading-relaxed mb-2">
              The page you&apos;re looking for doesn&apos;t exist, may have moved, or the link might be broken.
            </p>
            {location.pathname && location.pathname !== '/' && (
              <p className="text-xs text-bit-dark/40 dark:text-gray-600 font-mono mt-3">
                {location.pathname}
              </p>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-bit-dark/20 dark:border-gray-600 text-bit-dark dark:text-gray-300 text-sm font-semibold hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-bit-lavender to-bit-red text-white text-sm font-bold shadow-lg shadow-bit-lavender/30 hover:shadow-xl hover:scale-[1.03] transition-all duration-200"
              >
                <Home className="w-4 h-4" />
                Take Me Home
              </button>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="glass rounded-3xl p-8 md:p-10 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
            <p className="text-center text-sm font-bold text-bit-dark/50 dark:text-gray-500 uppercase tracking-widest mb-8">
              Or jump to a page
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/60 dark:border-gray-700 hover:border-bit-lavender/40 dark:hover:border-bit-lavender/40 bg-white/30 dark:bg-gray-700/30 hover:bg-white/60 dark:hover:bg-gray-700/60 hover:shadow-lg transition-all duration-200 text-center"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-bit-dark dark:text-white">{link.label}</p>
                      <p className="text-xs text-bit-dark/50 dark:text-gray-500 mt-0.5">{link.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Fun tagline ── */}
          <p className="text-center text-xs text-bit-dark/30 dark:text-gray-700 mt-10 font-mono">
            Error 404 &nbsp;&bull;&nbsp; Bit by Bit Coding &nbsp;&bull;&nbsp; Even the best coders hit bugs sometimes
          </p>

        </div>
      </main>

      <footer className="w-full py-6 text-center text-bit-dark/50 dark:text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding. Opening the doors of coding education for all youth, bit by bit.</p>
      </footer>
    </div>
  );
}
