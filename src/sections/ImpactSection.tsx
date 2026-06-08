const impactStats = [
  { value: '75%', label: 'First-time coders in cohort' },
  { value: '100%', label: 'Increased coding confidence' },
  { value: '85%', label: 'Want to continue with BbB' },
  { value: '100%', label: 'More likely to pursue coding pathways' },
  { value: '90%', label: 'Rated lessons clear or very clear' },
  { value: '95%', label: 'Found micro-challenge pedagogy valuable' },
  { value: '90%', label: 'Found session location convenient' },
];

const milestones = [
  'Founded Bit by Bit Coding and assembled first volunteer team',
  'Developed a structured Python curriculum for a multi-term pathway',
  'Ran inaugural March 2026 bootcamp',
  'Collected impact data from first cohort (n=20)',
  'Built institutional support through BAGUS partner ecosystem',
  'Partnered with SGPO and *SCAPE to scale impact',
  'Ran inaugural Python term',
];

export function ImpactSection() {
  return (
    <section className="py-16 px-6" id="impact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-bit-lavender uppercase tracking-wider mb-2">Annual Impact Snapshot</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bit-dark dark:text-white mb-4">
            Impact so far
          </h2>
          <p className="text-bit-dark/70 dark:text-gray-300 max-w-2xl mx-auto">
            Bootcamp outcomes from March 2026 cohort, sample size n=20.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {impactStats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-6 border border-white/60 dark:border-gray-700">
              <p className="text-4xl font-display font-bold text-bit-lavender mb-2">{stat.value}</p>
              <p className="text-sm text-bit-dark/70 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-3xl p-8 border border-white/60 dark:border-gray-700">
          <h3 className="text-2xl font-display font-bold text-bit-dark dark:text-white mb-6">Milestones timeline</h3>
          <ol className="space-y-4">
            {milestones.map((milestone, index) => (
              <li key={milestone} className="flex gap-4 items-start">
                <span className="mt-1 w-7 h-7 rounded-full bg-gradient-to-br from-bit-lavender to-bit-red text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <p className="text-bit-dark/80 dark:text-gray-300">{milestone}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
