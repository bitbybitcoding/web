import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Consistent color mapping for expertise tags
const expertiseColors: Record<string, string> = {
  'Python': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  'AI': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
  'ML': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  'C++': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  'Cybersecurity': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  'SQL': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Data': 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  'C#': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  'UX': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Security': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'Algorithms': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
};

const getExpertiseColor = (skill: string): string => {
  return expertiseColors[skill] || 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
};

const mentors = [
  {
    name: 'Hongpeng Wei',
    role: 'President & Co-Founder; Ex-Computing @ VJC',
    image: 'https://raw.githubusercontent.com/hongpenggg/hongpenggg.github.io/master/.github/assets/hongpeng.jpeg',
    quote: "I love seeing students' eyes light up when their code finally runs. I want to help every youth find their superpower in coding.",
    expertise: ['Python', 'AI'],
    borderColor: 'border-t-bit-lavender',
    roleColor: 'text-purple-600 dark:text-purple-400',
    overlayColor: 'from-bit-lavender/40',
  },
  {
    name: 'Brian Lim',
    role: 'VP, COO & Co-Founder; Ex-Computing @ VJC',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/brian_profile.jpeg',
    quote: "I've always believed that the best way to master a craft is ton share it. BbB is my creative space where technical expertise meets my love for inspiring others.",
    expertise: ['Python', 'ML'],
    borderColor: 'border-t-bit-turquoise',
    roleColor: 'text-teal-600 dark:text-teal-400',
    overlayColor: 'from-bit-turquoise/40',
  },
  {
    name: 'Pratik Ghosh',
    role: 'Head of Curriculum; Ex-CS @ SP',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/pratik_profile.jpeg',
    quote: "Knowledge is like power — it grows the more you share it.",
    expertise: ['Python', 'AI'],
    borderColor: 'border-t-bit-red',
    roleColor: 'text-red-600 dark:text-red-400',
    overlayColor: 'from-bit-red/40',
  },
  {
    name: 'Yixiang Fan',
    role: 'Head of Python; Ex-Computing @ HCI',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/yixiang_profile.jpeg',
    quote: "I enjoy the moment when I get the desired output, when the countless hours spent working and remedying the code proved to be worth it.",
    expertise: ['Python', 'SQL'],
    borderColor: 'border-t-bit-green',
    roleColor: 'text-green-600 dark:text-green-400',
    overlayColor: 'from-bit-green/40',
  },
  {
    name: 'Papangkorn Wangchochedkun',
    role: 'Head of Curriculum and AI/ML; CS @ NUS',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/pann_profile.jpeg',
    quote: "Just a guy who emjoys algorithmic problem solving.",
    expertise: ['Python', 'AI'],
    borderColor: 'border-t-bit-lavender',
    roleColor: 'text-purple-600 dark:text-purple-400',
    overlayColor: 'from-bit-lavender/40',
  },
  {
    name: 'Raghav Sriram',
    role: 'Python, Robotics and Quantum Computing; Ex-Computing @ VJC',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/raghav_profile.jpeg',
    quote: "Quantum Computing Researcher & Hardware Security Engineer who loves Monster Energy, motorbikes and lockpicking.",
    expertise: ['C++', 'Cybersecurity'],
    borderColor: 'border-t-bit-turquoise',
    roleColor: 'text-teal-600 dark:text-teal-400',
    overlayColor: 'from-bit-turquoise/40',
  },
  {
    name: 'Apicha Maneerat',
    role: 'Python; Maths & CS @ NUS',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/suki_profile.jpeg',
    quote: "The most elegant solutions in computer science and life are often the simplest. I want to help every student grasp how technology truly works, so they can find the simple path to solving any challenge.",
    expertise: ['Python', 'Algorithms'],
    borderColor: 'border-t-bit-red',
    roleColor: 'text-red-600 dark:text-red-400',
    overlayColor: 'from-bit-red/40',
  },
  {
    name: 'Neil Bhandari',
    role: 'Python; Ex-Computing @ VJC',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/neil_profile.jpeg',
    quote: "Building great tech isn't just about code; it's about solving real user problems. I help students see the big picture.",
    expertise: ['Python', 'ML'],
    borderColor: 'border-t-bit-green',
    roleColor: 'text-green-600 dark:text-green-400',
    overlayColor: 'from-bit-green/40',
  },
  {
    name: 'Ashton Too',
    role: 'Python; Ex-Computing @ VJC',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/ashton_profile.jpeg',
    quote: "Building games is my cup of tea. I look forward to sharing my knowledge in it.",
    expertise: ['Python', 'C#'],
    borderColor: 'border-t-bit-lavender',
    roleColor: 'text-purple-600 dark:text-purple-400',
    overlayColor: 'from-bit-lavender/40',
  },
  {
    name: 'Nicholas Yeo',
    role: 'Python; Ex-Computing @ VJC',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/nicholas_profile.jpeg',
    quote: "never played tag because I knew I was it",
    expertise: ['Python', 'AI'],
    borderColor: 'border-t-bit-turquoise',
    roleColor: 'text-teal-600 dark:text-teal-400',
    overlayColor: 'from-bit-turquoise/40',
  },
  {
    name: 'Kevin Chua',
    role: 'Python; Ex-Computing @ VJC',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/kevin_profile.jpeg',
    quote: "Computing doesn't have to always be a boring 6-7 hour long lecture to sit through, with me it'll be fun!",
    expertise: ['Python', 'SQL'],
    borderColor: 'border-t-bit-red',
    roleColor: 'text-red-600 dark:text-red-400',
    overlayColor: 'from-bit-red/40',
  },
  {
    name: 'Chee Heng Seow',
    role: 'Python; Ex-Computing @ HCI',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/cheeheng_profile.jpeg',
    quote: "I want to share my love for coding, and inspire the next batch to make their communities a better place.",
    expertise: ['Python', 'AI'],
    borderColor: 'border-t-bit-green',
    roleColor: 'text-green-600 dark:text-green-400',
    overlayColor: 'from-bit-green/40',
  },
  {
    name: 'Joel Lim',
    role: 'Python; Ex-Cybersecurity @ NYP',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/joel_profile.jpeg',
    quote: "Programming is the closest thing we have to real-world magic; I tutor because I want to help more people learn how to cast the spells.",
    expertise: ['Python', 'Security'],
    borderColor: 'border-t-bit-lavender',
    roleColor: 'text-purple-600 dark:text-purple-400',
    overlayColor: 'from-bit-lavender/40',
  },
  {
    name: 'Renae Gan',
    role: 'C and C#; Engineering @ NP',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/renae_profile.jpeg',
    quote: "Through teaching others how to code, I hope that I can provide the opportunity for students to derive satisfaction from seeing their code work wonders for them!",
    expertise: ['C#', 'SQL'],
    borderColor: 'border-t-bit-turquoise',
    roleColor: 'text-teal-600 dark:text-teal-400',
    overlayColor: 'from-bit-turquoise/40',
  },
  {
    name: 'Boon How Low',
    role: 'Python; AI For Science @ NTU',
    image: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/boonhow_profile.jpeg',
    quote: "Just tinkering through life, and enjoying the process of creating the most random things possible.",
    expertise: ['AI', 'ML'],
    borderColor: 'border-t-bit-red',
    roleColor: 'text-red-600 dark:text-red-400',
    overlayColor: 'from-bit-red/40',
  },
];

export function MentorsSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="mentors">
      {/* Background Orbs */}
      <div className="absolute left-[-20%] top-[20%] w-[600px] h-[600px] bg-bit-lavender/10 dark:bg-bit-lavender/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-[-10%] bottom-[10%] w-[500px] h-[500px] bg-bit-turquoise/10 dark:bg-bit-turquoise/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bit-lavender/10 dark:bg-bit-lavender/20 border border-bit-lavender/20 dark:border-bit-lavender/30 mb-4">
            <span className="text-xs font-bold text-bit-lavender dark:text-bit-lavender uppercase tracking-wider">Learn from Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-bit-dark dark:text-white">
            Meet our <span className="text-bit-lavender">Tutors</span>
          </h2>
          <p className="text-bit-dark/60 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our tutors have many years of experience with multiple coding languages and frameworks. These are people who speak Python better than their mother tongues -- sometimes.
          </p>
        </div>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full border-t-4 ${mentor.borderColor}`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${mentor.overlayColor} to-transparent mix-blend-overlay z-10`}></div>
                <img 
                  src={mentor.image}
                  alt={`Portrait of ${mentor.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 dark:from-gray-900/90 to-transparent z-20 pt-12">
                  <h3 className="text-xl font-display font-bold text-bit-dark dark:text-white">{mentor.name}</h3>
                  <p className={`text-sm font-semibold ${mentor.roleColor}`}>
                    {mentor.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow bg-white/40 dark:bg-gray-800/40">
                <p className="text-bit-dark/70 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                  "{mentor.quote}"
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-bit-dark/5 dark:border-gray-700">
                  <span className="text-xs font-bold text-bit-dark/40 dark:text-gray-500 uppercase tracking-wide">Expertise:</span>
                  <div className="flex gap-1 flex-wrap">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${getExpertiseColor(skill)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join as Mentor CTA */}
        <div className="mt-12 text-center">
          <div className="glass inline-flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border border-bit-lavender/30 shadow-lg bg-white/40 dark:bg-gray-800/40 backdrop-blur-md">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1494790108377-be9c29b29330' : i === 2 ? '1500648767791-00dcc994a43e' : '1438761681033-6461ffad8d80'}?w=100&q=80`}
                  alt="Mentor Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 bg-bit-lavender flex items-center justify-center text-white text-xs font-bold">
                +12
              </div>
            </div>
            
            <div className="text-left">
              <h4 className="font-display font-bold text-bit-dark dark:text-white text-lg">Are you an industry professional?</h4>
              <p className="text-sm text-bit-dark/70 dark:text-gray-400">Join our community and mentor the next generation.</p>
            </div>
            
            <Link to="/tutor">
              <Button className="bg-bit-red hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-1">
                Join as a Mentor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
