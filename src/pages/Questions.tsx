import { useEffect, useState } from 'react';
import { HelpCircle, ChevronDown, Users, BookOpen, Shield, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── Data ─────────────────────────────────────────────────────────────────────

const sections = [
  {
    id: 'about',
    icon: Heart,
    gradient: 'from-bit-lavender to-violet-400',
    label: 'About Bit by Bit',
    questions: [
      {
        q: 'What is Bit by Bit Coding?',
        a: "Bit by Bit Coding is a free, multi-year coding education programme for Singaporean youth aged 13–18. We provide rigorous, structured coding pathways that go beyond what's typically offered — from Python fundamentals into real industry tools like Flask and SQL, and eventually into C, Java, and robotics. We're a recognised ground-up under the BAGUS Together initiative, supported by NVPC, Temasek Foundation, and Tote Board. We partner with SGPO and *SCAPE to deliver our lessons at scale and at the lowest cost.",
      },
      {
        q: 'Why is it free?',
        a: 'Because we believe learning to code is a right, not a privilege. Advanced coding education in Singapore is largely locked behind enrichment fees. We exist to change that — for every young person who wants to learn, regardless of household income or background. You will not be asked to pay a fee. Ever.',
      },
      {
        q: 'Who runs Bit by Bit Coding?',
        a: "We're a student-led team of volunteers — ex- and current computing students, teachers and industry professionals who remember what it felt like to want to learn but not have access. We're guided by experienced computing educators and a coding education professor at Cornell University.",
      },
    ],
  },
  {
    id: 'bootcamp',
    icon: BookOpen,
    gradient: 'from-bit-red to-pink-400',
    label: "March Bootcamp '26",
    questions: [
      {
        q: 'What is the Bootcamp?',
        a: "The Bootcamp is Bit by Bit's in-person, hands-on lesson lasting from three to six hours. It lets prospective students learn more about Bit by Bit and our mission, experience our teaching style and pedagogy, and learn introductory Python — tackling micro-challenges that will ready them for our formal modules in the Python core.",
      },
      {
        q: "When is Bootcamp '26?",
        a: "This year's Bootcamp was held on 28 March 2026, from 10 am to 1 pm, at CSM Academy International — just a 5-minute walk from Aljunied MRT. Future bootcamps will be announced nearing the date.",
      },
      {
        q: "I'm interested in hosting a bootcamp. How?",
        a: "Partners who would like to bring a BbB Bootcamp to their organisations should reach out to us directly via email, Instagram, or the contact page. Please let us know the estimated size of attendance and the general background of the attendees when reaching out.",
      },
    ],
  },
  {
    id: 'eligibility',
    icon: Users,
    gradient: 'from-bit-turquoise to-cyan-400',
    label: 'Eligibility & Registration',
    questions: [
      {
        q: 'Who can join?',
        a: 'Any youth aged 13–18 residing in Singapore who is passionate about coding, self-directed, and wants to go further than what school covers. No prior experience is required for our introductory Python term — just curiosity and commitment. As we are a non-profit organisation at heart, we also look for students who are passionate about making a tangible impact on their communities with their coding skills.',
      },
      {
        q: 'Is it really completely free?',
        a: 'Yes. There are no registration fees, no materials fees, and no hidden costs. Ever.',
      },
      {
        q: 'My child is in primary school. Can they join?',
        a: "Not yet — our current programmes are designed for secondary and JC students (ages 13–18) who bring their own devices. We're working on expanding to younger students in a future term. If you would like to see our programme in your primary school, please reach out to us.",
      },
      {
        q: 'How do I sign up?',
        a: "Through our registration form, linked on this website. A parent or guardian must complete the form on behalf of, or supervise their child's completion for, students under 18.",
      },
    ],
  },
  {
    id: 'programme',
    icon: BookOpen,
    gradient: 'from-bit-green to-emerald-400',
    label: 'The Programme',
    questions: [
      {
        q: 'What will students learn?',
        a: 'We are currently only running our Python core, though we look to expand our course selection some time in 2027. Our core covers Python — from fundamentals to building real programmes. Students who complete the taster module progress to subsequent modules covering Python fundamentals, Flask (web development), SQL (databases), and beyond into AI/ML, C, Java, and robotics.',
      },
      {
        q: 'How long is each term?',
        a: 'Each term is around 10-12 weeks, with sessions held on Saturdays. For specific information on the dates of the lessons, please reach out to us. We will release the details to students who have signed up.',
      },
      {
        q: 'What device does my child need to bring?',
        a: 'Any personal computing device with a keyboard — a laptop, Chromebook, or iPad with an external keyboard. The venue provides free WiFi.',
      },
      {
        q: 'What if my child misses a session?',
        a: "Please notify us in advance where possible. We understand life happens — but consistent attendance matters because each session builds on the last. Students who miss sessions should complete the lesson materials on their own at home before the next session. Students who miss sessions repeatedly may have their place offered to another student on the waitlist.",
      },
      {
        q: 'Will there be homework?',
        a: 'There will be short practice exercises between sessions, designed to take 20–30 minutes. These are an important part of how coding is learned — by doing, not just watching. Homework is optional, but we strongly encourage students to complete them to get the most out of the programme.',
      },
    ],
  },
  {
    id: 'safety',
    icon: Shield,
    gradient: 'from-orange-400 to-yellow-400',
    label: 'Safety & Conduct',
    questions: [
      {
        q: 'Is my child safe?',
        a: "Yes. All BbB tutors and volunteers are required to read and comply with our Child Protection Policy and Code of Conduct before their first session. We take the safety and dignity of every student seriously.",
      },
      {
        q: 'What is your photography policy?',
        a: "We may take photographs during sessions for BbB's social media and marketing materials. Photo consent is collected as part of registration. We do not publish clearly identifiable close-up photographs of individual students without explicit parental consent. The venue partner that we work with may also photograph the sessions for their own marketing purposes. In such cases, please reach out to the venue partners directly to request modification or deletion of photographs.",
      },
    ],
  },
  {
    id: 'involved',
    icon: Heart,
    gradient: 'from-bit-lavender to-bit-red',
    label: 'Get Involved',
    questions: [
      {
        q: 'I want to volunteer as a tutor. How?',
        a: "We'd love to hear from you. Reach out to us at info@bbbcoding.org, use the Tutor volunteer page on this website, or DM us on Instagram @bbbcoding.",
      },
      {
        q: 'I know someone who would like to work with you. How?',
        a: "We'd love to hear from you too. Do get them to reach out to us at info@bbbcoding.org, use the Tutor volunteer page on this website, or DM us on Instagram @bbbcoding.",
      },
      {
        q: 'My organisation is interested in partnering with Bit by Bit. Who do I contact?',
        a: "Email us at info@bbbcoding.org or use the Contact page on this website. We're always open to conversations with schools, community organisations, and anyone who shares our mission.",
      },
      {
        q: "I have a question that isn't answered here.",
        a: "Drop us a message on Instagram @bbbcoding, contact us through this website, or email info@bbbcoding.org. We'll get back to you.",
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-bit-dark/8 dark:border-gray-700/60 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className="text-sm md:text-base font-semibold text-bit-dark dark:text-white group-hover:text-bit-lavender transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-bit-lavender shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm md:text-base text-bit-dark/70 dark:text-gray-400 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function Questions() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <HelpCircle className="w-4 h-4 text-bit-lavender" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">Got Questions?</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Bit by Bit Coding, our programmes, and how to get involved.
            </p>
          </div>

          {/* Quick-jump pills — use onClick+scrollIntoView, not href, to avoid HashRouter conflicts */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/70 dark:bg-gray-800/70 border border-bit-dark/10 dark:border-gray-700 text-bit-dark/70 dark:text-gray-400 hover:border-bit-lavender/40 hover:text-bit-lavender transition-all duration-150 cursor-pointer"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="glass rounded-3xl p-8 md:p-10 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40 scroll-mt-28"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-bit-dark dark:text-white">
                      {section.label}
                    </h2>
                  </div>
                  <div>
                    {section.questions.map((item, i) => (
                      <AccordionItem key={i} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-10 glass rounded-3xl p-8 md:p-10 border border-bit-lavender/20 dark:border-bit-lavender/30 bg-gradient-to-br from-bit-lavender/5 to-bit-red/5 dark:from-bit-lavender/10 dark:to-bit-red/10 text-center">
            <h3 className="text-xl font-display font-bold text-bit-dark dark:text-white mb-2">Still have questions?</h3>
            <p className="text-bit-dark/60 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Drop us a message and we&apos;ll get back to you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-bit-lavender to-bit-red text-white text-sm font-bold shadow-lg shadow-bit-lavender/25 hover:shadow-xl hover:scale-[1.03] transition-all duration-150"
              >
                Contact Us
              </Link>
              <a
                href="https://instagram.com/bbbcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-bit-lavender/30 dark:border-bit-lavender/40 text-bit-lavender text-sm font-bold hover:bg-bit-lavender/5 transition-all duration-150"
              >
                @bbbcoding
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </main>

      <footer className="w-full py-6 text-center text-bit-dark/50 dark:text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding. Opening the doors of coding education for all youth, bit by bit.</p>
      </footer>
    </div>
  );
}
