import { DollarSign, Heart, MapPin } from 'lucide-react';

const highlights = [
  {
    icon: DollarSign,
    label: 'Free Forever',
    description: 'No hidden fees, ever',
    color: 'from-bit-green to-emerald-400',
    bgColor: 'bg-bit-green/10 dark:bg-green-900/20',
    iconColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Heart,
    label: '100% Volunteer Run',
    description: 'Driven by passion',
    color: 'from-bit-red to-pink-400',
    bgColor: 'bg-bit-red/10 dark:bg-red-900/20',
    iconColor: 'text-red-500 dark:text-red-400',
  },
  {
    icon: MapPin,
    label: 'Based in SG',
    description: 'For Singaporean youth',
    color: 'from-bit-lavender to-purple-400',
    bgColor: 'bg-bit-lavender/10 dark:bg-purple-900/20',
    iconColor: 'text-bit-lavender dark:text-purple-400',
  },
];

export function StatsSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="glass-panel rounded-2xl p-8 text-center hover:scale-105 transition-transform border border-white/60 dark:border-gray-700 shadow-lg"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${highlight.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${highlight.iconColor}`} strokeWidth={2.5} />
                </div>
                <div className={`text-2xl font-display font-bold mb-2 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                  {highlight.label}
                </div>
                <div className="text-bit-dark/60 dark:text-gray-400 font-medium text-sm">
                  {highlight.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
