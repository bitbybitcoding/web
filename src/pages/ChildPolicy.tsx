import { useEffect } from 'react';
import {
  ShieldCheck, Heart, BookOpen, Users, AlertTriangle, Lock,
  MessageSquare, UserCheck, Search, RefreshCw, Scale, Eye,
} from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────

const summaryCards = [
  {
    icon: Heart,
    title: 'Unconditional Commitment',
    body: 'Child protection takes precedence over all other operational considerations. Every BbB activity is designed with child safety as the primary concern.',
    gradient: 'from-bit-green to-emerald-400',
  },
  {
    icon: BookOpen,
    title: 'UN Convention',
    body: 'Guided by the UNCRC (1989) — Article 19 (protection from abuse), Article 3 (best interests of the child), and Article 12 (the child’s right to be heard).',
    gradient: 'from-bit-lavender to-violet-400',
  },
  {
    icon: AlertTriangle,
    title: 'Mandatory Reporting',
    body: 'All BbB personnel must report any concern to the CPO within 24 hours. Reporting is never discretionary. Failure to report is a serious breach.',
    gradient: 'from-bit-red to-pink-400',
  },
];

const scopeActivities = [
  'In-person sessions at all venues',
  'Online classes, workshops, and digital learning environments',
  'BbB-operated digital platforms including the main website, BbB Code Along, and BbB Community Portal',
  'Any communication between BbB personnel and participants or their families',
  'Off-site activities associated with BbB programmes',
];

const scopePersons = [
  'Co-founders and ExCo members',
  'Tutors and teaching volunteers',
  'Administrative volunteers',
  'Guest speakers, mentors, and consultants',
  'Partner organisations and their staff when involved in BbB activities',
];

const requiredConduct = [
  'Treat every child with dignity, respect, and fairness, regardless of background, ability, or any personal characteristic.',
  'Maintain clear and appropriate professional boundaries with all participants at all times.',
  'Ensure sessions are conducted in visible, non-isolated settings where possible.',
  'Communicate with students only through BbB-approved channels (see Section 6).',
  'Respond promptly and appropriately to any disclosure or sign of distress from a child.',
  'Support children in understanding their rights and feeling safe to speak up.',
  'Maintain confidentiality in disciplinary and child protection matters, sharing information only on a need-to-know basis.',
];

const prohibitedConduct = [
  'Physically assault, restrain, or inflict corporal punishment of any kind on a child.',
  'Use offensive, discriminatory, humiliating, or sexually inappropriate language in the presence of children.',
  'Engage in, develop, or encourage any relationship with a child that is of a romantic, sexual, or otherwise inappropriate nature.',
  'Arrange to meet a child outside of scheduled BbB activities without explicit parental consent and BbB knowledge.',
  'Photograph, film, or record any child without appropriate consent.',
  'Share or publish photographs or videos of children without appropriate consent.',
  'Contact any student through personal social media, personal messaging apps, personal email, or any channel not approved by BbB.',
  'Be alone in a closed, unobservable space with a child.',
  'Have a child stay overnight in the same room or dwelling.',
  'Condone or enable illegal, unsafe, or abusive behaviour by any child.',
  'Discriminate against or show favouritism towards particular children.',
  'Discuss personal matters of a sexual nature, substance use, or other inappropriate topics with children.',
];

const approvedChannels = [
  'BbB’s official email address (info@bbbcoding.org)',
  'BbB’s official messaging or class management platform, as designated by the ExCo',
  'Parent or guardian group chats where a parent or guardian is present',
];

const prohibitedChannels = [
  'Personal WhatsApp, Telegram, Signal, or similar messaging apps',
  'Personal social media direct messages (Instagram, TikTok, Twitter/X, etc.)',
  'Personal email addresses',
  'Any direct one-to-one digital channel between a tutor and a student that excludes parents and BbB oversight',
];

const signsOfConcern = [
  'Unexplained or poorly explained physical injuries',
  'Significant changes in behaviour, mood, or engagement',
  'Expressions of fear, anxiety, or distress relating to specific people or places',
  'Inappropriate sexual knowledge or behaviour',
  'Withdrawal, social isolation, or regression',
  'Disclosures — direct or indirect — of abuse or harm',
  'Signs of neglect including persistent hunger, poor hygiene, or inadequate clothing',
];

const disclosureSteps = [
  'Stay calm. Do not show shock or disbelief.',
  'Listen carefully. Do not interrogate, ask leading questions, or press for details.',
  'Reassure the child that they have done the right thing by telling you.',
  'Do not promise confidentiality. Explain that you may need to share what they have told you to keep them safe.',
  'Do not investigate the matter yourself or confront any alleged perpetrator.',
  'As soon as possible, record what was said in the child’s own words, noting the time, date, and circumstances.',
  'Report to the CPO immediately.',
];

// ─── Component ────────────────────────────────────────────────────────────────

export function ChildPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-green/30 dark:border-bit-green/50 mb-6 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-bit-green" />
              <span className="text-xs font-bold text-bit-green uppercase tracking-wider">Legal Documents</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Child Protection Policy
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Protecting every child in every programme, at every time.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-5 text-xs text-bit-dark/50 dark:text-gray-500">
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Version 1.1</span>
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Effective: March 2026</span>
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Next review: January 2027</span>
              <span className="px-3 py-1 rounded-full bg-bit-green/10 dark:bg-bit-green/20 border border-bit-green/20 dark:border-bit-green/40 text-bit-green">Compliance is mandatory</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {summaryCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="glass rounded-2xl p-6 border border-white/60 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 text-bit-dark dark:text-white">{card.title}</h3>
                  <p className="text-sm text-bit-dark/60 dark:text-gray-400">{card.body}</p>
                </div>
              );
            })}
          </div>

          {/* Mandatory compliance banner */}
          <div className="glass rounded-2xl p-6 border border-bit-red/30 dark:border-red-900/50 bg-bit-red/5 dark:bg-red-900/10 mb-10 flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-bit-red shrink-0 mt-0.5" />
            <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">
              This policy applies to <strong>all BbB tutors, administrators, volunteers, contractors, co-founders, and any person acting on behalf of BbB</strong> in any capacity, whether paid or unpaid. <strong>Compliance is mandatory.</strong>
            </p>
          </div>

          <div className="flex flex-col gap-8">

            {/* Section 1 */}
            <Card>
              <SH icon={Heart} gradient="from-bit-green to-emerald-400" title="1. Our Commitment" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
                Bit by Bit Coding (&quot;BbB&quot;) is <strong>unconditionally committed</strong> to the safety, dignity, and wellbeing of every child who participates in our programmes. The protection of children is not a secondary concern — it is a core organisational value that takes precedence over all other operational considerations.
              </p>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
                BbB opposes all forms of abuse, exploitation, discrimination, and harm directed at children. We are guided by the <strong>United Nations Convention on the Rights of the Child (UNCRC, 1989)</strong>, with particular reference to:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {[
                  { art: 'Article 19', desc: 'Protection from violence and abuse' },
                  { art: 'Article 3', desc: 'Best interests of the child' },
                  { art: 'Article 12', desc: 'The child’s right to be heard' },
                ].map((a, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-bit-green/5 dark:bg-green-900/20 border border-bit-green/20 dark:border-green-900/40 text-center">
                    <p className="font-bold text-bit-green text-sm mb-1">{a.art}</p>
                    <p className="text-xs text-bit-dark/60 dark:text-gray-400">{a.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                This policy makes our commitment concrete. It sets out the standards we hold ourselves and everyone associated with BbB to, the procedures we follow when concerns arise, and the obligations that every person in our community takes on by joining us.
              </p>
            </Card>

            {/* Section 2 */}
            <Card>
              <SH icon={BookOpen} gradient="from-bit-lavender to-violet-400" title="2. Scope" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold text-bit-dark/50 dark:text-gray-500 uppercase tracking-wider mb-3">Applies to all BbB activities including:</p>
                  <BulletList items={scopeActivities} color="bg-bit-lavender" />
                </div>
                <div>
                  <p className="text-xs font-bold text-bit-dark/50 dark:text-gray-500 uppercase tracking-wider mb-3">Applies to all persons acting on behalf of BbB:</p>
                  <BulletList items={scopePersons} color="bg-bit-green" />
                </div>
              </div>
              <div className="mt-5 p-4 rounded-xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/20 dark:border-bit-lavender/30">
                <p className="text-sm text-bit-dark/70 dark:text-gray-400">
                  For the purposes of this policy, a <strong className="text-bit-dark dark:text-white">&quot;child&quot;</strong> is any person under 18 years of age.
                </p>
              </div>
            </Card>

            {/* Section 3 */}
            <Card>
              <SH icon={UserCheck} gradient="from-bit-turquoise to-cyan-400" title="3. Designated Child Protection Officer" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
                BbB designates a <strong>Child Protection Officer (CPO)</strong> who holds primary responsibility for implementing this policy, receiving reports of concern, and coordinating BbB’s response to any child protection matter.
              </p>
              <div className="p-5 rounded-2xl bg-bit-turquoise/5 dark:bg-cyan-900/20 border border-bit-turquoise/20 dark:border-cyan-900/40 mb-5">
                <p className="text-sm font-bold text-bit-dark dark:text-white mb-1">Current CPO</p>
                <p className="text-sm text-bit-dark/70 dark:text-gray-400 mb-2">The President of BbB, unless another ExCo member is formally designated in writing.</p>
                <p className="text-sm text-bit-dark/70 dark:text-gray-400">Contact: <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a></p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                  <p className="text-xs text-orange-700 dark:text-orange-300 leading-relaxed">
                    <strong>⚠️ If an allegation is made against the CPO:</strong> The next senior available ExCo member assumes CPO responsibilities. The matter is escalated directly to the relevant Singapore authorities and, where appropriate, to BbB’s supporting bodies (NVPC, Temasek Foundation, Tote Board).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/20 dark:border-bit-lavender/30">
                  <p className="text-xs text-bit-dark/70 dark:text-gray-400 leading-relaxed">
                    All reports of concern must be directed to the CPO in the first instance, except where the allegation involves the CPO — in which case reports should be made directly to another ExCo member or to the relevant authorities.
                  </p>
                </div>
              </div>
            </Card>

            {/* Section 4 */}
            <Card>
              <SH icon={Search} gradient="from-bit-green to-emerald-400" title="4. Safe Recruitment and Vetting" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                BbB is committed to recruiting and retaining tutors and volunteers who are suitable to work with children.
              </p>
              <SubSH title="4.1 Pre-Engagement Checks" />
              <BulletList color="bg-bit-green" items={[
                'All prospective tutors and volunteers must provide at least one character reference from a person who can speak to their suitability to work with children.',
                'BbB will conduct a brief structured interview or onboarding conversation before any tutor or volunteer interacts unsupervised with participants.',
                'Prospective tutors and volunteers must declare any previous convictions, investigations, or disciplinary action relating to children or young people. Failure to disclose may result in immediate removal.',
                'Where feasible, BbB will request a Basic Criminal Record Check or equivalent from the Singapore Police Force. This requirement will be mandatory as BbB’s capacity permits.',
              ]} />
              <SubSH title="4.2 Onboarding Requirements" />
              <BulletList color="bg-bit-lavender" items={[
                'All new tutors and volunteers must read, sign, and return a copy of this Child Protection Policy and BbB’s Code of Conduct before their first session.',
                'All new tutors and volunteers must complete a BbB safeguarding induction covering: recognising signs of abuse, reporting procedures, and appropriate conduct with minors.',
                'Co-founders and ExCo members are subject to the same requirements.',
              ]} />
              <SubSH title="4.3 Ongoing Requirements" />
              <BulletList color="bg-bit-turquoise" items={[
                'All tutors and volunteers must immediately notify the CPO if they are subject to any investigation, charge, or conviction relating to children or young people at any point during their engagement with BbB.',
                'BbB reserves the right to suspend or terminate a tutor’s or volunteer’s engagement pending any investigation or on receipt of a credible safeguarding concern.',
              ]} />
            </Card>

            {/* Section 5 */}
            <Card>
              <SH icon={Users} gradient="from-bit-lavender to-bit-red" title="5. Standards of Conduct Towards Children" />
              <SubSH title="5.1 Required Conduct" />
              <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">All BbB personnel must at all times:</p>
              <div className="flex flex-col gap-2 mb-7">
                {requiredConduct.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-bit-green/5 dark:bg-green-900/20 border border-bit-green/10 dark:border-green-900/40">
                    <span className="w-5 h-5 rounded-full bg-bit-green/20 dark:bg-green-900/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-bit-green text-xs font-bold">✓</span>
                    </span>
                    <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <SubSH title="5.2 Prohibited Conduct" />
              <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">All BbB personnel must never:</p>
              <div className="flex flex-col gap-2">
                {prohibitedConduct.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40">
                    <span className="w-5 h-5 rounded-full bg-bit-red/10 dark:bg-red-900/40 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-bit-red text-xs font-bold">×</span>
                    </span>
                    <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-bit-dark/50 dark:text-gray-500 leading-relaxed">
                This list is not exhaustive. The guiding principle is that all conduct must be clearly in the best interest of the child and above reasonable reproach.
              </p>
            </Card>

            {/* Section 6 */}
            <Card>
              <SH icon={MessageSquare} gradient="from-bit-turquoise to-cyan-400" title="6. Online Safeguarding" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                BbB programmes involve digital tools and online interaction. The following standards apply to all online and digital activity.
              </p>
              <SubSH title="6.1 Approved Communication Channels" />
              <div className="grid md:grid-cols-2 gap-4 mb-7">
                <div>
                  <p className="text-xs font-bold text-bit-green dark:text-green-400 uppercase tracking-wider mb-3">✓ Approved channels</p>
                  <BulletList items={approvedChannels} color="bg-bit-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-bit-red dark:text-red-400 uppercase tracking-wider mb-3">× Expressly prohibited</p>
                  <div className="flex flex-col gap-2">
                    {prohibitedChannels.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-50/60 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-bit-red mt-2 shrink-0" />
                        <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <SubSH title="6.2 Online Session Conduct" />
              <BulletList color="bg-bit-turquoise" items={[
                'Online sessions must not be conducted in private one-to-one video calls without a parent or guardian’s knowledge and consent.',
                'Tutors must not share personal contact information or social media handles with students.',
                'Tutors must report any inappropriate online behaviour by a student or any online contact from a student through unofficial channels to the CPO immediately.',
                'If a student discloses harm or distress through an online channel, the tutor must respond safely and report to the CPO as outlined in Section 7.',
              ]} />
              <SubSH title="6.3 Student Online Behaviour" />
              <BulletList color="bg-bit-lavender" items={[
                'Students must not attempt to contact tutors or administrators through personal or unofficial channels.',
                'Students must not share, post, or distribute photographs, videos, or personal information about other students or BbB personnel without consent.',
                'Any online conduct by a student that violates this policy will be addressed under the Code of Conduct and may constitute a severe offence.',
              ]} />
            </Card>

            {/* Section 7 */}
            <Card>
              <SH icon={Eye} gradient="from-bit-red to-rose-500" title="7. Recognising and Reporting Concerns" />
              <SubSH title="7.1 Recognising Signs of Concern" />
              <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">BbB personnel should be alert to the following possible indicators of abuse or harm:</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-3">
                {signsOfConcern.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-bit-red mt-2 shrink-0" />
                    <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-bit-dark/50 dark:text-gray-500 mb-7 leading-relaxed">
                The presence of one or more of these indicators does not confirm abuse. They are signals that a concern should be logged and, where appropriate, reported.
              </p>
              <SubSH title="7.2 How to Respond to a Disclosure" />
              <p className="text-bit-dark/70 dark:text-gray-400 text-sm mb-4">If a child discloses abuse or harm to you:</p>
              <div className="flex flex-col gap-2 mb-7">
                {disclosureSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-bit-lavender to-bit-red flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <SubSH title="7.3 Mandatory Reporting" />
              <div className="p-5 rounded-2xl bg-bit-red/5 dark:bg-red-900/20 border border-bit-red/20 dark:border-red-900/40 mb-5">
                <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-3">
                  Reporting is <strong>mandatory</strong> for all BbB personnel. This is not discretionary. Any witnessed, suspected, or alleged:
                </p>
                <ul className="space-y-1 text-sm text-bit-dark/70 dark:text-gray-400">
                  {[
                    'Violation of this Child Protection Policy',
                    'Incident of physical, emotional, sexual, or online abuse involving any BbB participant',
                    'Behaviour by any BbB personnel that raises a safeguarding concern',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bit-red mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-bold text-bit-red">
                  Must be reported to the CPO (<a href="mailto:info@bbbcoding.org" className="underline hover:text-bit-dark dark:hover:text-white transition-colors">info@bbbcoding.org</a>) immediately, and no later than 24 hours after becoming aware of the concern.
                </p>
                <p className="mt-2 text-xs text-bit-dark/60 dark:text-gray-400">
                  Failure to report a known or reasonably suspected concern is a serious breach of this policy and may result in immediate dismissal.
                </p>
              </div>
              <SubSH title="7.4 Reporting to Authorities" />
              <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed mb-4">
                BbB will report concerns to the relevant Singapore authorities where there are reasonable grounds to believe a child is at risk of harm. <strong>BbB will not wait for internal processes to conclude where a child’s immediate safety is at risk.</strong>
              </p>
              <div className="flex flex-col gap-3 mb-5">
                {[
                  { label: 'Child Protective Service (CPS), MSF', num: '1800-222-0000', note: '24-hour ComCare hotline' },
                  { label: 'Singapore Police Force', num: '999 (emergency) / 1800-255-0000 (non-emergency)', note: '' },
                  { label: 'National Anti-Violence and Sexual Harassment Helpline', num: '1800-777-0000', note: '' },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-bit-dark dark:text-white text-sm">{a.label}</p>
                      {a.note && <p className="text-xs text-bit-dark/50 dark:text-gray-500">{a.note}</p>}
                    </div>
                    <p className="text-sm font-bold text-bit-lavender shrink-0">{a.num}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 mb-6">
                <p className="text-xs text-orange-700 dark:text-orange-300 leading-relaxed">
                  <strong>⚠️ Where an allegation is made against a founder or ExCo member:</strong> Any BbB tutor or volunteer may — and must — report directly to the authorities listed above, and should notify BbB’s supporting bodies (NVPC / Temasek Foundation / Tote Board) as appropriate.
                </p>
              </div>
              <SubSH title="7.5 Confidentiality and Information Sharing" />
              <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed mb-2">
                All child protection concerns and reports must be treated with strict confidentiality. Information will be shared only with those who need it to protect the child. Breach of confidentiality in child protection matters is a serious disciplinary offence.
              </p>
              <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">
                <strong>Confidentiality does not mean secrecy.</strong> Where sharing information is necessary to protect a child, BbB will do so regardless of whether the child or parent has asked us not to.
              </p>
            </Card>

            {/* Section 8 */}
            <Card>
              <SH icon={AlertTriangle} gradient="from-orange-400 to-yellow-400" title="8. Response Procedure After a Report" />
              <SubSH title="8.1 Immediate Steps" />
              <div className="flex flex-col gap-2 mb-7">
                {[
                  'The CPO acknowledges receipt of the report within 24 hours.',
                  'The CPO assesses whether the child is in immediate danger. If so, emergency services or CPS are contacted immediately.',
                  'If the concern involves a BbB tutor or volunteer, that person is suspended from all BbB activities pending investigation. This suspension is precautionary, not disciplinary.',
                  'The CPO documents the concern in BbB’s safeguarding log (confidential).',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <SubSH title="8.2 Investigation and Escalation" />
              <BulletList color="bg-orange-400" items={[
                'The CPO determines, based on the nature of the concern, whether to: manage the matter internally (e.g. a minor conduct issue), refer to the child’s family, or report to CPS or the Police.',
                'In cases of alleged abuse or criminal conduct, BbB will always report to the relevant authorities and will cooperate fully with any investigation.',
                'BbB will not conduct its own investigation into allegations of abuse in parallel with or instead of an official investigation.',
                'The child’s wellbeing and safety remain the primary focus throughout. The child and their family will be kept informed as appropriate.',
              ]} />
              <SubSH title="8.3 Following an Investigation" />
              <BulletList color="bg-bit-lavender" items={[
                'If a concern is substantiated, BbB will take appropriate action under the Code of Conduct, up to and including permanent dismissal of the person concerned.',
                'BbB will take steps to prevent recurrence, including reviewing and updating policies and procedures as necessary.',
                'Support will be offered to affected children and, where relevant, to other BbB personnel affected by the matter.',
              ]} />
            </Card>

            {/* Section 9 */}
            <Card>
              <SH icon={ShieldCheck} gradient="from-bit-green to-emerald-400" title="9. Whistleblower Protection" />
              <div className="p-5 rounded-2xl bg-bit-green/5 dark:bg-green-900/20 border border-bit-green/20 dark:border-green-900/40 mb-4">
                <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                  Any BbB tutor, volunteer, or administrator who reports a genuine child protection concern in good faith is <strong>protected from retaliation, victimisation, or adverse treatment</strong> by BbB as a result of making that report.
                </p>
              </div>
              <BulletList color="bg-bit-green" items={[
                'Retaliation against a person who has raised a safeguarding concern is itself a serious breach of this policy and will be treated as a severe disciplinary offence.',
                'If a person making a report believes they are being subjected to retaliation, they should contact BbB’s supporting bodies (NVPC, Temasek Foundation, Tote Board) or the relevant authorities directly.',
              ]} />
            </Card>

            {/* Section 10 */}
            <Card>
              <SH icon={Scale} gradient="from-bit-lavender to-bit-turquoise" title="10. Conflict of Interest" />
              <BulletList color="bg-bit-lavender" items={[
                'All BbB personnel must declare any pre-existing personal, familial, or financial relationship with any participant or their family that could create a conflict of interest or the appearance of impropriety. Declarations should be made to the CPO.',
                'Where a conflict of interest is declared, the CPO will determine what, if any, adjustments to duties or supervision arrangements are necessary.',
                'Failure to declare a known conflict of interest is a disciplinary matter.',
              ]} />
            </Card>

            {/* Child Privacy */}
            <Card>
              <SH icon={Lock} gradient="from-bit-lavender to-violet-400" title="Child Privacy" />
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: 'Children under 13',
                    body: 'We do not knowingly permit children under 13 to create independent BbB accounts. A parent or legal guardian must complete all registration processes. If we learn we collected personal data directly from a child under 13 without required authorisation, we will delete it as soon as practicable.',
                  },
                  {
                    title: 'Parental Rights',
                    body: '',
                  },
                  {
                    title: 'Minimum Necessary',
                    body: 'BbB collects only the minimum personal data necessary for a child to participate safely in a given activity.',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <p className="font-bold text-bit-dark dark:text-white text-sm mb-2">{item.title}</p>
                    <p className="text-sm text-bit-dark/70 dark:text-gray-400 leading-relaxed">
                      {i === 1 ? (
                        <>
                          Parents and guardians may at any time request access to, correction of, or deletion of their child’s personal data held by BbB, and may withdraw consent for any optional processing. To exercise these rights, email{' '}
                          <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a>.
                        </>
                      ) : item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Section 11 */}
            <Card>
              <SH icon={RefreshCw} gradient="from-bit-lavender to-violet-400" title="11. Policy Review and Version History" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                This policy will be reviewed at minimum annually, or sooner following any significant incident or change in BbB’s operations. All updates will be version-numbered and dated.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                  <span className="px-2 py-0.5 rounded-md bg-bit-dark/10 dark:bg-gray-600 text-bit-dark dark:text-gray-300 text-xs font-bold shrink-0">v1.0</span>
                  <div>
                    <p className="font-bold text-bit-dark dark:text-white text-sm">January 2026</p>
                    <p className="text-xs text-bit-dark/60 dark:text-gray-400">Initial policy adopted.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/20 dark:border-bit-lavender/30">
                  <span className="px-2 py-0.5 rounded-md bg-bit-lavender/20 dark:bg-bit-lavender/30 text-bit-lavender text-xs font-bold shrink-0">v1.1</span>
                  <div>
                    <p className="font-bold text-bit-dark dark:text-white text-sm">March 2026 <span className="text-bit-lavender text-xs font-normal ml-2">Current</span></p>
                    <p className="text-xs text-bit-dark/60 dark:text-gray-400 leading-relaxed">Revised to add CPO designation, safe recruitment and vetting, online safeguarding, mandatory reporting to authorities, response procedure, whistleblower protection, and conflict of interest provisions.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-bit-dark/10 dark:border-gray-700">
                <p className="text-xs text-bit-dark/50 dark:text-gray-500 leading-relaxed">
                  Bit by Bit Coding &nbsp;&bull;&nbsp; <a href="mailto:info@bbbcoding.org" className="hover:text-bit-lavender transition-colors">info@bbbcoding.org</a> &nbsp;&bull;&nbsp; @bbbcoding &nbsp;&bull;&nbsp; bitbybitcoding.github.io<br />
                  This policy does not constitute legal advice. BbB recommends periodic independent legal review of this and all related documents.
                </p>
              </div>
            </Card>

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
    <div className="glass rounded-3xl p-8 md:p-10 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
      {children}
    </div>
  );
}

function SH({ icon: Icon, gradient, title }: { icon: React.ElementType; gradient: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white">{title}</h2>
    </div>
  );
}

function SubSH({ title }: { title: string }) {
  return (
    <h3 className="text-base font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-3">{title}</h3>
  );
}

function BulletList({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
          <span className={`w-1.5 h-1.5 rounded-full ${color} mt-2 shrink-0`} />
          <p className="text-sm text-bit-dark/80 dark:text-gray-300 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
}
