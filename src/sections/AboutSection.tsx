import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    text: 'Peer-led learning environment',
    color: 'bg-bit-green dark:bg-green-600',
    iconColor: 'text-bit-dark dark:text-white',
  },
  {
    text: 'Industry-relevant curriculum (Python, ML, C++)',
    color: 'bg-bit-turquoise dark:bg-teal-600',
    iconColor: 'text-bit-dark dark:text-white',
  },
  {
    text: 'Expert approved teaching pedagogy',
    color: 'bg-bit-lavender',
    iconColor: 'text-white',
  },
];

const carouselImages = [
  'bootcamp_photo.jpeg',
  'kevin_teaching.jpeg',
  'suki_teaching_whiteboard.jpeg',
  'tutor_debate_session.jpeg',
  'zoomed_in_kevin_teaching.jpeg',
];

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets';

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/60 dark:border-gray-700 flex flex-col lg:flex-row gap-12 items-center shadow-xl shadow-bit-lavender/5">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-bit-lavender to-bit-turquoise rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full aspect-video rounded-xl bg-white dark:bg-gray-800 overflow-hidden border border-white/50 dark:border-gray-700 shadow-inner">
              {carouselImages.map((image, index) => (
                <img
                  key={image}
                  src={`${assetBase}/${image}`}
                  alt="Bit by Bit Coding session"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden={index !== activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-bit-dark dark:text-white leading-tight">
              More than a workshop.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bit-lavender to-bit-red">
                A structured journey.
              </span>
            </h2>
            <p className="text-bit-dark/70 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              Unlike one-off coding camps, Bit by Bit Coding offers a continuous, 
              multi-year curriculum designed to take students from absolute beginners 
              to capable developers.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full ${feature.color} flex items-center justify-center`}>
                    <Check className={`w-4 h-4 ${feature.iconColor}`} />
                  </div>
                  <span className="text-bit-dark dark:text-gray-200 font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
