export type SiteSearchItem = {
  title: string;
  path: string;
  content: string;
  keywords?: string[];
};

export const siteSearchIndex: SiteSearchItem[] = [
  {
    title: 'Home',
    path: '/',
    content:
      'Bit by Bit Coding offers free, structured, multi-year coding pathways for Singaporean youth. Learn about our mission, stats, and latest updates.',
    keywords: ['bit by bit', 'coding education', 'non-profit'],
  },
  {
    title: 'Pathways',
    path: '/pathways',
    content:
      'Explore the Python core pathway, placement process, and future tracks like AI, machine learning, and C++.',
    keywords: ['python', 'curriculum', 'modules'],
  },
  {
    title: 'Apply',
    path: '/apply',
    content:
      'Register for the next cohort with our Term 2 application form and start your coding journey.',
    keywords: ['registration', 'application', 'term 2'],
  },
  {
    title: 'Tutor',
    path: '/tutor',
    content:
      'Volunteer as a tutor and mentor the next generation of Singaporean coders.',
    keywords: ['volunteer', 'mentor', 'teach'],
  },
  {
    title: 'Partners',
    path: '/partners',
    content:
      'Meet the organisations supporting Bit by Bit Coding, including BAGUS Together, SGPO, *SCAPE, NVPC, Temasek Foundation, and Tote Board.',
    keywords: ['bagus', 'sgpo', 'scape', 'nvpc', 'temasek', 'tote board'],
  },
  {
    title: 'Contact',
    path: '/contact',
    content:
      'Get in touch with Bit by Bit Coding for programmes, volunteering, or partnership enquiries.',
    keywords: ['email', 'message', 'contact form'],
  },
  {
    title: 'Team',
    path: '/team',
    content:
      'Meet our tutors and mentors who power the Bit by Bit Coding community.',
    keywords: ['mentors', 'tutors', 'team'],
  },
  {
    title: 'Press & Media Kit',
    path: '/press',
    content:
      'Access our brand assets, logos, colours, and typography for media use.',
    keywords: ['press', 'media kit', 'brand'],
  },
  {
    title: 'Gallery',
    path: '/gallery',
    content:
      'Browse photos from bootcamps, workshops, and mentoring sessions.',
    keywords: ['photos', 'events', 'bootcamp'],
  },
  {
    title: 'Impact',
    path: '/impact',
    content:
      'See our annual impact snapshot, milestones, and testimonials from students.',
    keywords: ['impact', 'milestones', 'testimonials'],
  },
  {
    title: 'Blog',
    path: '/blog',
    content:
      'Read stories and insights about coding education, equity, and community building.',
    keywords: ['stories', 'insights', 'blog'],
  },
  {
    title: 'Blog: Why We Founded Bit by Bit Coding',
    path: '/blog/why-we-founded-bit-by-bit',
    content:
      'A founding story on equity in coding education and the mission behind Bit by Bit Coding.',
    keywords: ['founding', 'equity', 'story'],
  },
  {
    title: 'FAQ',
    path: '/faq',
    content:
      'Answers to common questions about eligibility, safety, bootcamps, and registration.',
    keywords: ['questions', 'eligibility', 'safety'],
  },
  {
    title: 'Privacy Policy',
    path: '/privacy',
    content:
      'Learn how we collect, use, and protect personal data under Singapore PDPA.',
    keywords: ['pdpa', 'data', 'privacy'],
  },
  {
    title: 'Terms & Conditions',
    path: '/terms',
    content:
      'Participation terms covering attendance, conduct, safety, and programme expectations.',
    keywords: ['terms', 'conditions', 'attendance'],
  },
  {
    title: 'Code of Conduct',
    path: '/conduct',
    content:
      'Behavioural standards for tutors, administrators, and students across all settings.',
    keywords: ['conduct', 'standards', 'behaviour'],
  },
  {
    title: 'Consent Form',
    path: '/consent',
    content:
      'Parent or guardian consent requirements for participating students.',
    keywords: ['consent', 'guardian', 'parent'],
  },
  {
    title: 'Child Protection Policy',
    path: '/child-policy',
    content:
      'Safeguarding policy covering child protection, reporting, and compliance.',
    keywords: ['child protection', 'safeguarding', 'policy'],
  },
];
