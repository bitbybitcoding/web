import { Link } from 'react-router-dom';
import { Terminal, Brain, Cpu, Users, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pathways = [
  {
    icon: Terminal,
    title: 'Python',
    description: 'The perfect starting point. Learn programming logic, syntax, and build your first applications.',
    status: 'active',
    ageRange: 'Ages 10-18',
    duration: '12 Weeks',
    color: 'from-blue-500 to-blue-600',
    shadowColor: 'shadow-blue-500/30',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Dive into the future. Understand neural networks, learn to find patterns in data, and train your own models.',
    status: 'soon',
    ageRange: 'Ages 10-18',
    duration: 'Intermediate',
    color: 'from-purple-500 to-purple-600',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: Cpu,
    title: 'C++ & Algorithms',
    description: 'Master memory management and high-performance computing concepts. Write code for competition.',
    status: 'soon',
    ageRange: 'Ages 13+',
    duration: 'Advanced',
    color: 'from-orange-500 to-orange-600',
    shadowColor: 'shadow-orange-500/20',
  },
  {
    icon: Users,
    title: '#GirlsWhoCode',
    description: 'A supportive community track specifically for young women in technology.',
    status: 'soon',
    ageRange: 'All Ages',
    duration: 'All Levels',
    color: 'from-pink-500 to-pink-600',
    shadowColor: 'shadow-pink-500/20',
  },
];

export function PathwaysPreview() {
  return (
    <section className="py-20 px-6 relative" id="pathways">
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-b from-bit-turquoise/10 dark:from-bit-turquoise/5 to-transparent blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-bit-dark/5 dark:border-gray-700 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-bit-dark dark:text-white">
              Our <span className="text-bit-lavender">Pathways</span>
            </h2>
            <p className="text-bit-dark/60 dark:text-gray-400 max-w-xl text-lg">
              Curated learning tracks designed for different age groups and skill levels. 
              Start your journey today.
            </p>
          </div>
          <Link 
            to="/pathways" 
            className="text-bit-lavender font-bold hover:text-bit-red dark:hover:text-bit-red flex items-center gap-2 transition-colors px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50"
          >
            View Full Curriculum <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((pathway, index) => (
            <div 
              key={index}
              className={`glass-card rounded-2xl p-1 relative group overflow-hidden ${
                pathway.status === 'active' 
                  ? 'border-bit-lavender shadow-[0_10px_40px_-15px_rgba(140,82,255,0.2)] hover:shadow-[0_20px_50px_-12px_rgba(140,82,255,0.3)]' 
                  : ''
              }`}
            >
              {/* Status Badge */}
              <div className="absolute top-0 right-0 p-3 z-20">
                {pathway.status === 'active' ? (
                  <div className="bg-bit-green dark:bg-green-600 backdrop-blur-md text-bit-dark dark:text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse"></span>
                    ACCEPTING
                  </div>
                ) : (
                  <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-white/60 dark:border-gray-600 text-bit-dark/50 dark:text-gray-400 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    SOON
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className={`h-full rounded-xl p-6 flex flex-col relative z-10 backdrop-blur-sm ${
                pathway.status === 'active' ? 'bg-white/40 dark:bg-gray-800/40' : 'bg-white/20 dark:bg-gray-800/20'
              }`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pathway.color} flex items-center justify-center mb-6 text-white shadow-lg ${pathway.shadowColor} ${
                  pathway.status === 'soon' ? 'grayscale group-hover:grayscale-0 transition-all duration-300' : ''
                }`}>
                  <pathway.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-display font-bold mb-2 ${
                  pathway.status === 'soon' ? 'text-bit-dark dark:text-white group-hover:text-bit-lavender transition-colors' : 'text-bit-dark dark:text-white'
                }`}>
                  {pathway.title}
                </h3>

                {/* Description */}
                <p className="text-bit-dark/60 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {pathway.description}
                </p>

                {/* Footer */}
                <div className="border-t border-bit-dark/10 dark:border-gray-700 pt-4 mt-auto">
                  <div className="flex justify-between items-center text-xs font-semibold text-bit-dark/50 dark:text-gray-500 mb-4 uppercase tracking-wider">
                    <span>{pathway.ageRange}</span>
                    <span>{pathway.duration}</span>
                  </div>
                  
                  {pathway.status === 'active' ? (
                    <Link to="/apply">
                      <Button className="w-full bg-bit-lavender hover:bg-bit-lavender/90 text-white text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Apply Now
                      </Button>
                    </Link>
                  ) : (
                    <Button 
                      variant="outline" 
                      disabled 
                      className="w-full border-2 border-bit-dark/5 dark:border-gray-700 bg-transparent text-bit-dark/40 dark:text-gray-600 text-sm font-bold cursor-not-allowed"
                    >
                      {pathway.title === '#GirlsWhoCode' ? 'In the Works' : 'Coming Soon'}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
