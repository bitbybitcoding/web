const brandColours = [
  { name: 'Bit Lavender', hex: '#8C52FF' },
  { name: 'Bit Red', hex: '#FF526E' },
  { name: 'Bit Green', hex: '#C5FF52' },
  { name: 'Bit Turquoise', hex: '#52FFE2' },
  { name: 'Bit Marble', hex: '#F6F4F0' },
];

const fonts = [
  'Playfair Display',
  'Georgia',
  'Tahoma',
  'Times New Roman',
  'Helvetica Now',
  'Atkinson Hyperlegible',
];

const logoUrl =
  'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/logo.png';

export function PressPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-bit-dark dark:text-white mb-4">Press & Media Kit</h1>
          <p className="text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto">
            Bit by Bit Coding is a youth-led non-profit initiative building free, structured coding pathways for Singaporean youth.
          </p>
        </div>

        <section className="glass rounded-3xl p-8 border border-white/60 dark:border-gray-700">
          <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-4">Logos</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <img src={logoUrl} alt="Bit by Bit logo" className="w-24 h-24 rounded-2xl object-cover" />
            <div className="flex gap-3">
              <a href={logoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-bit-lavender text-white font-bold text-sm">
                Download PNG
              </a>
              <a href={logoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border border-bit-lavender text-bit-lavender font-bold text-sm">
                Download (Light/Dark use)
              </a>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl p-8 border border-white/60 dark:border-gray-700">
          <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-4">Brand colours</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {brandColours.map((colour) => (
              <div key={colour.hex} className="rounded-2xl border border-white/60 dark:border-gray-700 overflow-hidden">
                <div style={{ backgroundColor: colour.hex }} className="h-20" />
                <div className="p-3 bg-white/60 dark:bg-gray-800/60">
                  <p className="text-sm font-bold text-bit-dark dark:text-white">{colour.name}</p>
                  <p className="text-xs text-bit-dark/60 dark:text-gray-400">{colour.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass rounded-3xl p-8 border border-white/60 dark:border-gray-700">
          <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-4">Typography</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-bit-dark/80 dark:text-gray-200">
            {fonts.map((font) => (
              <li key={font}>• {font}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
