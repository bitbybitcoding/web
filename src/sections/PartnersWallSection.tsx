import { partnerLogoWall } from '@/data/partners';

const movingPartners = [...partnerLogoWall, ...partnerLogoWall];

export function PartnersWallSection() {
  return (
    <section className="py-14 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-7">
          <p className="text-xs font-bold text-bit-lavender uppercase tracking-wider mb-2">Our Partners</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bit-dark dark:text-white">
            Built together with trusted organisations
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="partners-marquee">
          {movingPartners.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center w-44 h-24 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-white/70 dark:border-gray-700/80 px-6 transition-all hover:scale-105"
              aria-label={`Visit ${partner.name}`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="w-full h-12 object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
