import { useEffect } from 'react';
import { BookOpen, Users, Shield, AlertTriangle, Heart, Scale, MessageSquare, Star, RefreshCw } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────

const tutorStandards = [
  'Treat every student, parent, co-tutor, and member of the BbB community with dignity and respect.',
  'Maintain clear professional boundaries with all participants at all times.',
  'Prepare and deliver lessons to a standard that serves students’ learning.',
  'Communicate with students and their families only through BbB-approved channels.',
  'Dress appropriately and conduct themselves with decorum in and around sessions.',
  'Use language appropriate for the presence of children and teenagers at all times.',
  'Report any safeguarding concern immediately in accordance with the Child Protection Policy.',
  'Uphold the confidentiality of all student, family, and organisational information.',
  'Honour their commitment to BbB as agreed upon joining, as set out in the Constitution.',
];

const digitalStandards = [
  'All communication with students must take place through BbB-approved channels only (BbB official email and any class management platform designated by the ExCo).',
  'Personal messaging apps (WhatsApp, Telegram, Signal, etc.), personal social media direct messages, and personal email addresses should be avoided when contacting students, unless explicitly approved by Bit by Bit ExCo.',
  'Tutors and administrators must not share their personal social media handles or contact details with students, unless explicitly approved by Bit by Bit ExCo.',
  'Where a parent or guardian group chat is used, tutors may participate but must maintain professional conduct at all times.',
  'Tutors must not post about individual students or internal BbB matters on personal social media without prior consent and ExCo approval.',
];

const prohibitedConduct = [
  'Using offensive, vulgar, discriminatory, sexually inappropriate, or otherwise uncouth language in any BbB setting.',
  'Making inappropriate references, jokes, or euphemisms relating to sex, drugs, alcohol, or violence.',
  'Discussing matters of a sexual, violent, or otherwise inappropriate nature with students.',
  'Acting with bias based on race, religion, gender, sexual orientation, disability, or any other personal characteristic.',
  'Bullying, discriminating against, ostracising, or humiliating any student, tutor, or member of the BbB community.',
  'Contacting students for personal reasons or outside the scope of BbB activities.',
  'Engaging in any behaviour prohibited by the Child Protection Policy.',
  'Retaliating against any person who has raised a safeguarding or conduct concern in good faith.',
];

const tutorPenalties = [
  {
    level: 'Light',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    badge: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300',
    examples: [
      'Failing to fulfil tutoring commitments as outlined in the Constitution',
      'Not taking lesson quality seriously',
      'Using mildly inappropriate language in the presence of students',
      'Dressing inappropriately for sessions',
    ],
    penalty: 'First and second instance — verbal warning. Third instance — written warning, plus a two to five week suspension from tutor duties and possible additional administrative duties as determined by the ExCo.',
  },
  {
    level: 'Moderate',
    color: 'from-orange-400 to-red-400',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
    examples: [
      'Contacting students through personal or unofficial channels',
      'Discussing inappropriate topics (sex, drugs, alcohol) with or in front of students',
      'Making inappropriate references or remarks in any BbB setting',
      'Failing to declare a conflict of interest',
      'Conduct that falls below the standard expected of a BbB tutor',
    ],
    penalty: 'Term-long (10-week) suspension from tutor duties. Written statement required from the offender outlining the offence and corrective action. The ExCo may impose additional conditions.',
  },
  {
    level: 'Severe',
    color: 'from-red-500 to-rose-600',
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    badge: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
    examples: [
      'Engaging in any behaviour prohibited by the Child Protection Policy',
      'Bullying, discriminating against, or harassing any student, tutor, or community member',
      'Acting with bias based on race, religion, gender, or any protected characteristic',
      'Retaliating against a person who has raised a safeguarding concern',
      'Repeated moderate offences',
    ],
    penalty: 'Immediate dismissal from all BbB duties. Where the matter involves a child protection concern, it will be escalated in accordance with the Child Protection Policy and may be reported to the relevant authorities.',
  },
];

const studentExpected = [
  'Attend sessions punctually and consistently.',
  'Engage with lessons and complete assigned practice.',
  'Treat all tutors, administrators, and fellow students with respect.',
  'Use computing devices and online platforms responsibly and for learning purposes.',
  'Communicate concerns or difficulties to a tutor or administrator rather than disengaging.',
  'Comply with venue rules and BbB’s policies at all times.',
];

const studentDigital = [
  'Use only BbB-approved platforms and tools during sessions.',
  'Not attempt to contact tutors through personal or unofficial channels, for non-BbB approved purposes.',
  'Not share, post, or distribute photographs, videos, or personal information of other students or BbB personnel without consent.',
  'Not access, view, or share inappropriate content during sessions.',
  'Report any online communication from a tutor through unofficial channels to a parent or guardian and to BbB immediately.',
];

const studentPenalties = [
  {
    level: 'Light',
    color: 'from-yellow-400 to-orange-400',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    badge: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300',
    examples: [
      'Excessive tardiness (more than 15 minutes without notice, or a pattern of lateness)',
      'Missing sessions without prior notice',
      'Minor disruptions during class',
      'Failure to complete assignments without valid reason',
      'Minor misuse of equipment',
    ],
    penalty: '1st: Verbal reminder from tutor. 2nd: Private conversation to understand root causes and agree a path forward. 3rd: Meeting with student, tutor, and Branch Head. Written behaviour agreement. Parent/guardian notified. If pattern continues: temporary one-session suspension.',
  },
  {
    level: 'Moderate',
    color: 'from-orange-400 to-red-400',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300',
    examples: [
      'Repeated light offences after prior interventions',
      'Sustained disruption preventing others from learning',
      'Disrespectful behaviour toward tutors or peers',
      'Accessing inappropriate content during sessions',
      'Cheating or plagiarism',
      'Excluding or gossiping about other students in a hurtful way',
      'Contacting a tutor through personal or unofficial channels',
    ],
    penalty: '1st: Immediate removal from session. Meeting with student, tutor, Branch Head, and parent/guardian. Written behaviour contract. Mandatory one-week suspension. 2nd: Two to three week suspension. Re-entry meeting required. Probationary period of four weeks upon return.',
  },
  {
    level: 'Severe',
    color: 'from-red-500 to-rose-600',
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    badge: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
    examples: [
      'Bullying, harassment, or sustained targeting of any student or tutor (including online)',
      'Physical violence or threats of violence',
      'Discriminatory behaviour or hate speech',
      'Deliberate destruction of equipment or property',
      'Theft',
      'Accessing, creating, or sharing inappropriate sexual, violent, or illegal content',
      'Any behaviour that violates the Child Protection Policy or creates an unsafe environment',
    ],
    penalty: 'Immediate removal from programme pending ExCo review. Meeting within one week. If confirmed: minimum one-term (10-week) suspension. Possible permanent removal. Re-entry (if applicable) requires written reflection, restorative action, and an ExCo interview.',
  },
  {
    level: 'Extraordinary',
    color: 'from-rose-700 to-red-900',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-300 dark:border-rose-900',
    badge: 'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300',
    examples: [
      'Physical violence causing injury',
      'Repeated severe offences after intervention',
      'Behaviour posing an ongoing safety risk',
      'Criminal activity',
    ],
    penalty: 'Immediate permanent removal from all BbB activities. No appeal. BbB may report to relevant authorities.',
  },
];

const positiveRecognition = [
  'Public acknowledgement during sessions and on BbB channels',
  'Showcase opportunities for student projects',
  'Certificates of achievement',
  'Recommendation letters',
  'Potential leadership roles as the programme develops',
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Conduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <BookOpen className="w-4 h-4 text-bit-lavender" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">Legal Documents</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Code of Conduct
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Standards of behaviour for tutors, administrators, and students across all BbB settings.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-5 text-xs text-bit-dark/50 dark:text-gray-500">
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Version 1.1</span>
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Effective: March 2026</span>
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Next review: January 2027</span>
            </div>
          </div>

          {/* Applies-to Banner */}
          <div className="glass rounded-2xl p-6 border border-bit-lavender/30 dark:border-bit-lavender/50 bg-bit-lavender/5 dark:bg-bit-lavender/10 mb-10 flex items-start gap-4">
            <div className="p-2 bg-bit-lavender/10 dark:bg-bit-lavender/20 rounded-xl shrink-0">
              <Shield className="w-5 h-5 text-bit-lavender" />
            </div>
            <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">
              This Code of Conduct applies to <strong>all BbB tutors, administrators, co-founders, volunteers, and students</strong> in all BbB settings — in-person sessions, online classes, and any associated communications. All BbB personnel are required to read, sign, and comply with this document before their first session. It should be read together with the{' '}
              <a href="/#/child-policy" className="text-bit-lavender hover:text-bit-red transition-colors">Child Protection Policy</a>, which takes precedence in any matter involving the safety or welfare of a child.
            </p>
          </div>

          {/* PART 1 */}
          <PartDivider number="1" title="Tutors and Administrators" icon={Users} gradient="from-bit-lavender to-violet-400" />

          <Card>
            <SH icon={BookOpen} gradient="from-bit-lavender to-violet-400" title="1.1 Guiding Philosophy" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-3">
              BbB volunteers give their time freely to serve our students. In doing so, they take on a responsibility — to those students, to their families, and to the organisation — to conduct themselves with integrity, professionalism, and genuine care. Many of our students are minors. <strong>This demands a higher standard, not a lower one.</strong>
            </p>
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
              This Code of Conduct sets out the standards BbB expects. It should be read together with the{' '}
              <a href="/#/child-policy" className="text-bit-lavender hover:text-bit-red transition-colors">Child Protection Policy</a>, which takes precedence in any matter involving the safety or welfare of a child.
            </p>
          </Card>

          <Card>
            <SH icon={Shield} gradient="from-bit-green to-emerald-400" title="1.2 Core Standards" />
            <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">All BbB tutors and administrators are expected to:</p>
            <BulletList items={tutorStandards} color="bg-bit-lavender" />
          </Card>

          <Card>
            <SH icon={MessageSquare} gradient="from-bit-turquoise to-cyan-400" title="1.3 Digital Communications and Social Media" />
            <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">The following standards govern all digital communication between BbB personnel and students:</p>
            <BulletList items={digitalStandards} color="bg-bit-turquoise" />
            <div className="mt-5 p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
              <p className="text-xs text-orange-700 dark:text-orange-300 leading-relaxed">
                <strong>⚠️ Note:</strong> Contacting a student through any personal or unofficial channel, without explicit, prior approval from Bit by Bit's ExCo, is a <strong>moderate offence</strong> on first occurrence and a <strong>severe offence</strong> on recurrence.
              </p>
            </div>
          </Card>

          <Card>
            <SH icon={Scale} gradient="from-orange-400 to-yellow-400" title="1.4 Conflict of Interest" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
              A conflict of interest arises where a tutor or administrator’s personal, familial, or financial relationships could compromise — or appear to compromise — their professional judgement or conduct within BbB.
            </p>
            <BulletList
              color="bg-orange-400"
              items={[
                'All tutors and administrators must declare any pre-existing personal or familial relationship with any participant or their family to the CPO before the relevant sessions begin.',
                'Tutors and administrators must not accept gifts of material value from students or their families.',
                'Tutors and administrators must not use their BbB role to refer students to other services in which they have a personal financial interest without disclosing that interest to the ExCo.',
                'Failure to declare a known conflict of interest is a disciplinary matter.',
              ]}
            />
          </Card>

          <Card>
            <SH icon={Star} gradient="from-bit-lavender to-bit-red" title="1.5 Tutor Commitment" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
              All tutors join BbB with an agreed commitment, as outlined in BbB’s Constitution. This commitment includes lesson planning, attendance at assigned sessions, and participation in curriculum development where required. Failure to fulfil this commitment without valid reason is a <strong>light offence</strong>.
            </p>
          </Card>

          <Card>
            <SH icon={AlertTriangle} gradient="from-bit-red to-rose-500" title="1.6 Prohibited Conduct" />
            <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">The following conduct is prohibited in all BbB settings and circumstances:</p>
            <div className="flex flex-col gap-2">
              {prohibitedConduct.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-bit-red mt-2 shrink-0" />
                  <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <SH icon={Scale} gradient="from-bit-red to-bit-lavender" title="1.7 Penalties for Tutor and Administrator Misconduct" />
            <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-6">Offences are classified as light, moderate, or severe. Penalties are determined by the ExCo.</p>
            <div className="flex flex-col gap-5">
              {tutorPenalties.map((p, i) => (
                <PenaltyCard key={i} {...p} />
              ))}
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-bit-green/5 dark:bg-green-900/20 border border-bit-green/20 dark:border-green-900/40">
                <p className="font-bold text-bit-green dark:text-green-400 text-sm mb-2">🛡️ Whistleblower Protection</p>
                <p className="text-xs text-bit-dark/70 dark:text-gray-400 leading-relaxed">Any tutor or administrator who reports a genuine concern about another person’s conduct in good faith is protected from retaliation. Retaliation is itself a <strong>severe offence</strong>.</p>
              </div>
              <div className="p-5 rounded-2xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/20 dark:border-bit-lavender/30">
                <p className="font-bold text-bit-lavender text-sm mb-2">⚖️ Process</p>
                <p className="text-xs text-bit-dark/70 dark:text-gray-400 leading-relaxed">Only the ExCo may vote on penalties. Non-compliance with corrective actions, without approved extenuating circumstances, results in immediate dismissal. The ExCo may grant exceptions for genuine extenuating circumstances.</p>
              </div>
            </div>
          </Card>

          {/* PART 2 */}
          <PartDivider number="2" title="Students" icon={Heart} gradient="from-bit-turquoise to-cyan-400" />

          <Card>
            <SH icon={Heart} gradient="from-bit-turquoise to-cyan-400" title="2.1 Guiding Philosophy" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-3">
              BbB believes in <strong>restorative discipline</strong>. When students make mistakes, our first response is to understand what happened, help them make better choices, and support them to grow. We recognise that students may be dealing with pressures and challenges outside of BbB that affect their behaviour.
            </p>
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
              We hold this alongside our responsibility to maintain a safe, respectful, and productive learning environment for everyone.
            </p>
          </Card>

          <Card>
            <SH icon={Shield} gradient="from-bit-green to-emerald-400" title="2.2 Expected Conduct" />
            <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">Students are expected to:</p>
            <BulletList items={studentExpected} color="bg-bit-green" />
          </Card>

          <Card>
            <SH icon={MessageSquare} gradient="from-bit-turquoise to-cyan-400" title="2.3 Digital Conduct" />
            <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">Students must:</p>
            <BulletList items={studentDigital} color="bg-bit-turquoise" />
          </Card>

          <Card>
            <SH icon={Scale} gradient="from-bit-red to-bit-lavender" title="2.4–2.7 Disciplinary Framework" />
            <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-6">
              Offences are classified as light, moderate, severe, or extraordinary. BbB takes a <strong>trauma-informed approach</strong>: we ask what happened, not what is wrong with the student.
            </p>
            <div className="flex flex-col gap-5">
              {studentPenalties.map((p, i) => (
                <PenaltyCard key={i} {...p} />
              ))}
            </div>
          </Card>

          <Card>
            <SH icon={Heart} gradient="from-bit-lavender to-violet-400" title="2.8 Special Considerations" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
              When evaluating any offence, tutors and administrators will consider:
            </p>
            <BulletList
              color="bg-bit-lavender"
              items={[
                "The student's age and developmental stage",
                'Whether the behaviour is out of character',
                'Any known external pressures or circumstances',
                'Any relevant learning differences or language barriers',
                'Whether this is an isolated incident or a pattern',
              ]}
            />
            <p className="mt-4 text-bit-dark/70 dark:text-gray-400 text-sm leading-relaxed">
              BbB takes a trauma-informed approach: we ask <em>what happened</em>, not <em>what is wrong with the student</em>. Support resources will be offered where appropriate, though BbB personnel are educators, not counsellors.
            </p>
          </Card>

          <Card>
            <SH icon={Scale} gradient="from-bit-turquoise to-bit-lavender" title="2.9 Appeals" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
              Students and families may appeal any moderate or severe penalty to the ExCo. Appeals must be submitted <strong>in writing within one week</strong> of the penalty being imposed. The ExCo will review and respond within two weeks.
            </p>
            <BulletList
              color="bg-bit-turquoise"
              items={[
                'Valid grounds for appeal: new information, extenuating circumstances, or procedural error.',
                'Extraordinary penalties are not subject to appeal.',
              ]}
            />
          </Card>

          <Card>
            <SH icon={Shield} gradient="from-bit-green to-bit-turquoise" title="2.10 Privacy in Disciplinary Matters" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
              Disciplinary matters will be handled privately. Other students will not be told specific details of another student’s consequences. Documentation will be kept confidential and shared only with those who need it.
            </p>
          </Card>

          <Card>
            <SH icon={AlertTriangle} gradient="from-bit-red to-rose-500" title="2.11 Mandatory Reporting" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
              If student behaviour or disclosures suggest abuse, neglect, or a safety concern involving any person, tutors and administrators are required to follow the{' '}
              <a href="/#/child-policy" className="text-bit-lavender hover:text-bit-red transition-colors">Child Protection Policy</a>, which may include reporting to the relevant Singapore authorities.
            </p>
          </Card>

          <Card>
            <SH icon={Star} gradient="from-bit-lavender to-bit-red" title="2.12 Positive Reinforcement" />
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
              While this document addresses misconduct, BbB exists above all to <strong>celebrate growth</strong>. Students who demonstrate consistent effort, support for peers, curiosity, persistence, and positive contributions to the learning community will be recognised through:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {positiveRecognition.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/15 dark:border-bit-lavender/20">
                  <Star className="w-4 h-4 text-bit-lavender shrink-0" />
                  <p className="text-xs text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-bit-dark/60 dark:text-gray-400 text-sm italic">
              “We will work harder to catch students doing things right than to catch them doing things wrong.”
            </p>
          </Card>

          {/* Version History */}
          <div className="glass rounded-3xl p-8 border border-white/60 dark:border-gray-700 shadow-xl bg-white/40 dark:bg-gray-800/40 mt-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-bit-lavender to-violet-400 flex items-center justify-center shrink-0">
                <RefreshCw className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white">Version History</h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                <span className="px-2 py-0.5 rounded-md bg-bit-dark/10 dark:bg-gray-600 text-bit-dark dark:text-gray-300 text-xs font-bold shrink-0">v1.0</span>
                <div>
                  <p className="font-bold text-bit-dark dark:text-white text-sm">January 2026</p>
                  <p className="text-xs text-bit-dark/60 dark:text-gray-400">Initial Code of Conduct adopted.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/20 dark:border-bit-lavender/30">
                <span className="px-2 py-0.5 rounded-md bg-bit-lavender/20 dark:bg-bit-lavender/30 text-bit-lavender text-xs font-bold shrink-0">v1.1</span>
                <div>
                  <p className="font-bold text-bit-dark dark:text-white text-sm">March 2026 <span className="text-bit-lavender text-xs font-normal ml-2">Current</span></p>
                  <p className="text-xs text-bit-dark/60 dark:text-gray-400 leading-relaxed">Revised to add digital communications policy, social media standards, conflict of interest provisions, whistleblower protection clause, and clarification of appeals process. Student digital conduct section added.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-bit-dark/10 dark:border-gray-700">
              <p className="text-xs text-bit-dark/50 dark:text-gray-500 leading-relaxed">
                Bit by Bit Coding &nbsp;&bull;&nbsp; <a href="mailto:info@bbbcoding.org" className="hover:text-bit-lavender transition-colors">info@bbbcoding.org</a> &nbsp;&bull;&nbsp; @bbbcoding &nbsp;&bull;&nbsp; bitbybitcoding.github.io<br />
                This document does not constitute legal advice.
              </p>
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

// ─── Helper Components ────────────────────────────────────────────────────────

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-8 md:p-10 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40 mb-6">
      {children}
    </div>
  );
}

function PartDivider({
  number, title, icon: Icon, gradient,
}: {
  number: string; title: string; icon: React.ElementType; gradient: string;
}) {
  return (
    <div className="relative flex items-center gap-5 my-10">
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div>
        <p className="text-xs font-bold text-bit-dark/40 dark:text-gray-500 uppercase tracking-widest">Part {number}</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-bit-dark dark:text-white">{title}</h2>
      </div>
      <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-bit-lavender/30 to-transparent dark:from-bit-lavender/20" />
    </div>
  );
}

function SH({
  icon: Icon, gradient, title,
}: {
  icon: React.ElementType; gradient: string; title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-display font-bold text-bit-dark dark:text-white">{title}</h3>
    </div>
  );
}

function BulletList({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
          <span className={`w-1.5 h-1.5 rounded-full ${color} mt-2 shrink-0`} />
          <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}

function PenaltyCard({
  level, bg, border, badge, examples, penalty,
}: {
  level: string;
  color: string;
  bg: string;
  border: string;
  badge: string;
  examples: string[];
  penalty: string;
}) {
  return (
    <div className={`rounded-2xl p-6 ${bg} border ${border}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${badge}`}>{level} Offence</span>
      </div>
      <p className="text-xs font-bold text-bit-dark/50 dark:text-gray-500 uppercase tracking-wider mb-2">Examples include:</p>
      <ul className="space-y-1 mb-4">
        {examples.map((ex, i) => (
          <li key={i} className="text-sm text-bit-dark/70 dark:text-gray-400 flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-bit-dark/30 dark:bg-gray-500 shrink-0" />
            {ex}
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-black/5 dark:border-white/10">
        <p className="text-xs font-bold text-bit-dark/50 dark:text-gray-500 uppercase tracking-wider mb-1">Penalty</p>
        <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{penalty}</p>
      </div>
    </div>
  );
}
