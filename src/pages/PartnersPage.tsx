import { ExternalLink } from 'lucide-react';
import { governmentPartners, keyPartners, mainPartner, supportingPartners } from '@/data/partners';

export function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bit-lavender animate-pulse"></span>
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                Building Together
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-bit-lavender to-bit-red">Partners</span>
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We\'re grateful to work with organizations that share our vision of making coding education accessible to every Singaporean youth.
            </p>
          </div>

          {/* Main Partner */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8 text-bit-dark dark:text-white text-center">
              Main Partner
            </h2>
            <div className="glass rounded-3xl overflow-hidden border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Logo Side */}
                <div className={`relative p-12 bg-gradient-to-br ${mainPartner.color} flex items-center justify-center min-h-[300px]`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-xs w-full">
                    <img 
                      src={mainPartner.logo} 
                      alt={`${mainPartner.name} logo`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 bg-white/40 dark:bg-gray-800/40">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-bit-dark dark:text-white">
                    {mainPartner.name}
                  </h3>
                  <p className="text-bit-dark/70 dark:text-gray-300 leading-relaxed mb-6">
                    {mainPartner.description}
                  </p>
                  <a
                    href={mainPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bit-lavender text-white font-bold rounded-xl hover:bg-violet-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Important Partners */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-bit-dark dark:text-white text-center">
              Key Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {keyPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl overflow-hidden border border-white/60 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Logo Section */}
                  <div className={`relative p-8 bg-gradient-to-br ${partner.color} flex items-center justify-center min-h-[180px]`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg w-full">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 bg-white/40 dark:bg-gray-800/40 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 text-bit-dark dark:text-white">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-bit-dark/70 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                      {partner.description}
                    </p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-bit-lavender hover:text-violet-600 font-bold text-sm transition-colors"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <br />
          </div>

          {/* Supporting Partners */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-bit-dark dark:text-white text-center">
              Supporting through BAGUS
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportingPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl overflow-hidden border border-white/60 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Logo Section */}
                  <div className={`relative p-8 bg-gradient-to-br ${partner.color} flex items-center justify-center min-h-[180px]`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg w-full">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 bg-white/40 dark:bg-gray-800/40 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 text-bit-dark dark:text-white">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-bit-dark/70 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                      {partner.description}
                    </p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-bit-lavender hover:text-violet-600 font-bold text-sm transition-colors"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <br />
          </div>

          {/* Government Partners */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-bit-dark dark:text-white text-center">
              Government Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {governmentPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl overflow-hidden border border-white/60 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Logo Section */}
                  <div className={`relative p-8 bg-gradient-to-br ${partner.color} flex items-center justify-center min-h-[180px]`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg w-full">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 bg-white/40 dark:bg-gray-800/40 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 text-bit-dark dark:text-white">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-bit-dark/70 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                      {partner.description}
                    </p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-bit-lavender hover:text-violet-600 font-bold text-sm transition-colors"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <br />
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glass inline-block rounded-2xl p-8 border border-bit-lavender/30 dark:border-bit-lavender/50 shadow-lg bg-white/40 dark:bg-gray-800/40 backdrop-blur-md">
              <h3 className="text-2xl font-display font-bold mb-3 text-bit-dark dark:text-white">
                Interested in Partnering?
              </h3>
              <p className="text-bit-dark/70 dark:text-gray-300 mb-6 max-w-lg">
                We're always looking for organizations that share our mission to empower young coders.
              </p>
              <a
                href="/#/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-bit-red text-white font-bold rounded-xl hover:bg-red-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
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
