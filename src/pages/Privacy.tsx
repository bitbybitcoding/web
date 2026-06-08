import { useEffect } from 'react';
import { Shield, Lock, UserCheck, FileText, Clock, AlertTriangle, Scale, RefreshCw } from 'lucide-react';

const summaryCards = [
  {
    icon: Lock,
    title: 'What We Collect',
    body: 'Registration details, emergency contacts, limited technical analytics, and tutor/volunteer records. No payment data or raw passwords stored by BbB.',
    gradient: 'from-bit-lavender to-violet-400',
  },
  {
    icon: UserCheck,
    title: 'How We Use It',
    body: 'Programme administration, safety and emergency response, communications, impact reporting, and legal compliance. Only for purposes disclosed here.',
    gradient: 'from-bit-turquoise to-bit-green',
  },
  {
    icon: Shield,
    title: 'Your Rights',
    body: 'Under the PDPA: access, correction, withdrawal of consent, and deletion. Respond within 30 days. Contact info@bbbcoding.org.',
    gradient: 'from-bit-red to-bit-lavender',
  },
  {
    icon: FileText,
    title: "We Don't Sell Data",
    body: 'We never sell personal data. We share only with trusted service providers and supporting organisations, and only as necessary.',
    gradient: 'from-bit-green to-bit-turquoise',
  },
];

const retentionRows = [
  { category: 'Student & parent registration data', period: 'Duration of participation + 1 year' },
  { category: 'Emergency contact & medical data', period: 'Duration of participation + 6 months' },
  { category: 'Tutor & volunteer records', period: 'Duration of engagement + 2 years' },
  { category: 'Child protection & incident records', period: 'Min. 7 years, or until child turns 25 (whichever is later)' },
  { category: 'Marketing & communications data', period: 'Until opt-out (deleted within 30 days)' },
  { category: 'Website analytics data', period: 'Raw: 26 months (GA default); Aggregated: indefinitely' },
];

export function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <Shield className="w-4 h-4 text-bit-lavender" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">Your Privacy Matters</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              How we collect, use, protect, and respect your personal data.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-5 text-xs text-bit-dark/50 dark:text-gray-500">
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Version 1.1</span>
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Effective: March 2026</span>
              <span className="px-3 py-1 rounded-full bg-white/60 dark:bg-gray-800/60 border border-bit-dark/10 dark:border-gray-700">Next review: January 2027</span>
              <span className="px-3 py-1 rounded-full bg-bit-lavender/10 dark:bg-bit-lavender/20 border border-bit-lavender/20 dark:border-bit-lavender/40 text-bit-lavender">Governed by Singapore PDPA</span>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
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

          {/* Intro Banner */}
          <div className="glass rounded-2xl p-6 border border-bit-lavender/30 dark:border-bit-lavender/50 bg-bit-lavender/5 dark:bg-bit-lavender/10 mb-8">
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
              Bit by Bit Coding (&quot;BbB&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting the personal data of everyone who interacts with us — students, parents and guardians, tutors, volunteers, donors, and community members. This Privacy Policy explains what personal data we collect, why we collect it, how we use and protect it, how long we keep it, and your rights in relation to it.
            </p>
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
              By registering for or participating in any BbB programme, or by using our digital platforms, you acknowledge that you have read and understood this Privacy Policy. This policy applies to BbB&apos;s website (<a href="https://bitbybitcoding.github.io" className="text-bit-lavender hover:text-bit-red transition-colors">bitbybitcoding.github.io</a>), BbB online portals, BbB class management software, and all in-person and online programme activities. It should be read alongside BbB&apos;s{' '}
              <a href="/#/terms" className="text-bit-lavender hover:text-bit-red transition-colors">Terms and Conditions</a> and <a href="/#/child-policy" className="text-bit-lavender hover:text-bit-red transition-colors">Child Protection Policy</a>.
            </p>
            <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">
              This Privacy Policy is governed by the <strong>Personal Data Protection Act 2012 (Singapore) (PDPA)</strong>. BbB is operated in Singapore and serves Singaporean youth. All data practices described herein comply with Singapore law.
            </p>
          </div>

          {/* Per-Section Cards */}
          <div className="flex flex-col gap-6">

            {/* 1 */}
            <Card>
              <SH num="1" icon={Shield} gradient="from-bit-lavender to-violet-400" title="Who We Are" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
                Bit by Bit Coding is a community ground-up recognised under the <strong>BAGUS Together</strong> initiative, supported by <strong>NVPC</strong>, <strong>Temasek Foundation</strong>, and <strong>Tote Board</strong>. We are a non-profit educational initiative providing free coding education to Singaporean youth aged 10 to 18.
              </p>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                <strong>Data Protection Contact:</strong>{' '}
                <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a>
                <br />
                For the purposes of the PDPA, BbB is the organisation responsible for the personal data we collect.
              </p>
            </Card>

            {/* 2 */}
            <Card>
              <SH num="2" icon={Lock} gradient="from-bit-turquoise to-cyan-400" title="Personal Data We Collect" />
              <SubSH title="2.1 Data You Provide Directly" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-3">We collect the following personal data when you register for or participate in BbB programmes:</p>
              <ul className="space-y-2 text-bit-dark/70 dark:text-gray-400 mb-6 list-disc pl-6">
                <li>Student&apos;s full name, age, date of birth, school, and school year level</li>
                <li>Parent or guardian&apos;s full name, relationship to student, email address, and mobile phone number</li>
                <li>Emergency contact details</li>
                <li>Relevant medical conditions, allergies, or special needs (where disclosed for safety purposes)</li>
                <li>Programme registration details and preferences</li>
                <li>Communication preferences (email, SMS)</li>
                <li>Photographs and videos taken during sessions (where consent has been given)</li>
                <li>Student work, code submissions, and project outputs</li>
                <li>Survey and feedback responses</li>
                <li>For tutors and volunteers: name, contact details, educational background, references, and availability</li>
              </ul>
              <SubSH title="2.2 Data Collected Automatically" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-3">When you use BbB&apos;s digital platforms, we may automatically collect limited technical data including:</p>
              <ul className="space-y-2 text-bit-dark/70 dark:text-gray-400 mb-4 list-disc pl-6">
                <li>Browser type and device type</li>
                <li>Pages visited and navigation paths</li>
                <li>Date and time of visits</li>
                <li>General location derived from IP address (city or region level only; not precise GPS)</li>
              </ul>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
                We use <strong>Google Analytics</strong> (standard implementation) for aggregate usage analysis. This uses cookies. You may opt out via your browser settings or the Google Analytics opt-out browser add-on.
              </p>
              <SubSH title="2.3 Data We Do Not Collect" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                BbB does not collect payment or credit card information directly. All donation processing is handled by third-party payment processors. BbB does not store raw passwords. BbB does not knowingly collect personal data directly from children under 13 — all registrations for students under 18 must be completed by a parent or legal guardian.
              </p>
            </Card>

            {/* 3 */}
            <Card>
              <SH num="3" icon={UserCheck} gradient="from-bit-green to-emerald-400" title="How We Use Personal Data" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">We use personal data only for the purposes for which it was collected:</p>
              <ul className="space-y-3 text-bit-dark/70 dark:text-gray-400 list-disc pl-6">
                <li><strong className="text-bit-dark dark:text-gray-200">Programme administration:</strong> registering participants, managing waitlists, confirming attendance, and communicating session logistics.</li>
                <li><strong className="text-bit-dark dark:text-gray-200">Safety and emergency response:</strong> retaining emergency contact and medical information to respond appropriately in the event of an incident.</li>
                <li><strong className="text-bit-dark dark:text-gray-200">Communication:</strong> sending programme updates, scheduling information, and operational notices to parents and guardians.</li>
                <li><strong className="text-bit-dark dark:text-gray-200">Impact measurement and reporting:</strong> preparing anonymised or aggregated statistics for grant reporting. No personally identifiable data is shared in these reports.</li>
                <li><strong className="text-bit-dark dark:text-gray-200">Marketing and outreach (with consent):</strong> sending newsletters, programme announcements, and updates to those who have opted in.</li>
                <li><strong className="text-bit-dark dark:text-gray-200">Volunteer and tutor administration:</strong> managing tutor onboarding, scheduling, and compliance with BbB&apos;s Code of Conduct and Child Protection Policy.</li>
                <li><strong className="text-bit-dark dark:text-gray-200">Legal and regulatory compliance:</strong> meeting obligations under Singapore law, responding to lawful requests, and protecting the rights and safety of BbB and its community.</li>
              </ul>
            </Card>

            {/* 4 */}
            <Card>
              <SH num="4" icon={Scale} gradient="from-bit-lavender to-bit-red" title="Legal Basis for Processing" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-5">Under the PDPA, BbB collects and uses personal data only where we have a valid basis to do so:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Consent', desc: "Where you or your child's parent/guardian has given explicit consent, such as for marketing communications or photography." },
                  { label: 'Contractual necessity', desc: 'Where processing is necessary to deliver the programme you or your child has registered for.' },
                  { label: 'Legitimate interests', desc: "Where processing is necessary for BbB's operational purposes, provided this does not override your rights." },
                  { label: 'Legal obligation', desc: 'Where we are required to process or disclose data under Singapore law, including mandatory reporting obligations relating to child safety.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <p className="font-bold text-bit-dark dark:text-white text-sm mb-1">{item.label}</p>
                    <p className="text-xs text-bit-dark/60 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* 5 */}
            <Card>
              <SH num="5" icon={FileText} gradient="from-bit-turquoise to-bit-lavender" title="How We Share Personal Data" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-5">BbB does <strong>not</strong> sell personal data. We share personal data only as follows:</p>
              <SubSH title="5.1 Service Providers" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">We work with trusted third-party service providers for website hosting, email delivery, learning management, and analytics. These providers are contractually required to handle personal data securely and use it only for the services they provide to BbB.</p>
              <SubSH title="5.2 Supporting Organisations" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB may share limited, aggregated, or anonymised programme data (such as total participant numbers and outcomes) with our community non-profit partners, such as, but not limited to, BAGUS Together, NVPC, Temasek Foundation, and Tote Board for grant reporting. We will not share identifiable personal data with these bodies without explicit consent.</p>
              <SubSH title="5.3 Partner Organisations" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Where BbB collaborates with schools or other partners to deliver sessions, we may share limited participant data (such as roster names or attendance) where necessary for delivery. We will not share personal contact information with partners for their independent use without your consent.</p>
              <SubSH title="5.4 Legal and Safety Disclosures" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">We may disclose personal data where required by law, in response to a lawful request from a public authority, or where we believe in good faith that disclosure is necessary to protect the safety of any person — including in compliance with our mandatory reporting obligations under the Child Protection Policy.</p>
            </Card>

            {/* 6 */}
            <Card>
              <SH num="6" icon={Clock} gradient="from-orange-400 to-yellow-400" title="Data Retention" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-5">BbB retains personal data only for as long as necessary for the purposes for which it was collected, or as required by law. At the end of a retention period, data will be securely deleted or anonymised.</p>
              <div className="overflow-x-auto rounded-2xl border border-white/60 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-bit-lavender/5 dark:bg-bit-lavender/10 border-b border-white/60 dark:border-gray-700">
                      <th className="text-left p-4 font-bold text-bit-dark dark:text-white">Data Category</th>
                      <th className="text-left p-4 font-bold text-bit-dark dark:text-white">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {retentionRows.map((row, i) => (
                      <tr key={i} className={`border-b border-white/40 dark:border-gray-700/60 last:border-0 ${
                        i % 2 === 0 ? 'bg-white/30 dark:bg-gray-700/20' : 'bg-white/10 dark:bg-gray-800/20'
                      }`}>
                        <td className="p-4 text-bit-dark/80 dark:text-gray-300 font-medium">{row.category}</td>
                        <td className="p-4 text-bit-dark/60 dark:text-gray-400">{row.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* 7 */}
            <Card>
              <SH num="7" icon={Shield} gradient="from-bit-green to-bit-turquoise" title="Data Security" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB implements appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration, and loss. These include:</p>
              <ul className="space-y-2 text-bit-dark/70 dark:text-gray-400 mb-5 list-disc pl-6">
                <li>Access controls limiting who within BbB can access personal data</li>
                <li>Use of reputable third-party platforms with established security standards</li>
                <li>Avoiding unnecessary storage of sensitive data in insecure formats</li>
              </ul>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                No data transmission or storage system can be guaranteed 100% secure. In the event of a data security incident, BbB will act promptly to contain it and fulfil its notification obligations under the PDPA.
              </p>
            </Card>

            {/* 8 */}
            <Card>
              <SH num="8" icon={AlertTriangle} gradient="from-bit-red to-pink-400" title="Data Breach Notification" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">In the event of a notifiable data breach — one that results in, or is likely to result in, significant harm to any individual — BbB will:</p>
              <ul className="space-y-2 text-bit-dark/70 dark:text-gray-400 mb-5 list-disc pl-6">
                <li>Take immediate steps to contain and assess the breach.</li>
                <li>Notify the <strong>Personal Data Protection Commission (PDPC)</strong> as required under the PDPA, within three calendar days of assessing that the breach is notifiable.</li>
                <li>Notify affected individuals as soon as practicable where the breach is likely to result in significant harm to them.</li>
                <li>Document the breach, our assessment, and the steps taken in response.</li>
              </ul>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                To report a suspected data security concern to BbB:{' '}
                <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a>.
              </p>
            </Card>

            {/* 9 */}
            <Card>
              <SH num="9" icon={UserCheck} gradient="from-bit-lavender to-violet-400" title="Your Rights" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-5">Under the PDPA, you have the following rights in relation to your personal data held by BbB:</p>
              <div className="flex flex-col gap-3 mb-5">
                {[
                  { right: 'Right of access', desc: 'You may request a copy of the personal data we hold about you or your child.' },
                  { right: 'Right of correction', desc: 'You may request that we correct any inaccurate or incomplete personal data.' },
                  { right: 'Right of withdrawal of consent', desc: "Where processing is based on consent, you may withdraw that consent at any time. Note that withdrawing consent for operational data (such as emergency contact information) may affect your child's continued participation." },
                  { right: 'Right to request deletion', desc: 'You may request deletion of personal data we hold. We will comply unless we have a legal obligation or legitimate operational reason to retain it (for example, child protection records).' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-bit-lavender to-bit-red flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-bold text-bit-dark dark:text-white text-sm mb-1">{item.right}</p>
                      <p className="text-sm text-bit-dark/60 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a>. We may need to verify your identity before fulfilling a request. We will respond within <strong>30 days</strong>.
              </p>
            </Card>

            {/* 10 */}
            <Card>
              <SH num="10" icon={Shield} gradient="from-bit-green to-emerald-400" title="Children's Privacy" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">All BbB programmes are designed for young people under 18. We do not permit children under 13 to create independent BbB accounts without supervision — a parent or legal guardian must assist with the completion of all registration processes.</p>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Parents and guardians may at any time request access to, correction of, or deletion of their child&apos;s personal data. They may also withdraw consent for any optional processing (such as photography or marketing communications).</p>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">BbB collects only the <strong>minimum personal data necessary</strong> for a child to participate safely in a given activity.</p>
            </Card>

            {/* 11 */}
            <Card>
              <SH num="11" icon={Lock} gradient="from-bit-turquoise to-cyan-400" title="Cookies" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                BbB&apos;s website uses cookies for core functionality and analytics. You can control cookies through your browser settings. Disabling some cookies may affect the functionality of our website. BbB&apos;s site does not currently respond to browser Do Not Track signals.
              </p>
            </Card>

            {/* 12 */}
            <Card>
              <SH num="12" icon={FileText} gradient="from-bit-lavender to-bit-turquoise" title="Third-Party Links" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                BbB&apos;s website and communications may include links to third-party websites or platforms. BbB is not responsible for the privacy practices of those sites. We encourage you to review the privacy notices of any site you visit.
              </p>
            </Card>

            {/* 13 */}
            <Card>
              <SH num="13" icon={RefreshCw} gradient="from-orange-400 to-yellow-400" title="Changes to This Policy" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                BbB may update this Privacy Policy to reflect changes in our operations, legal obligations, or data practices. The updated version will be published on our website with a revised effective date. Where material changes are made, we will notify registered participants where possible. Continued participation after an update constitutes acceptance of the revised policy.
              </p>
            </Card>

            {/* 14 */}
            <Card>
              <SH num="14" icon={UserCheck} gradient="from-bit-red to-bit-lavender" title="Contact" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-3">
                For any questions, concerns, or requests relating to this Privacy Policy or BbB&apos;s data practices:
              </p>
              <ul className="space-y-1 text-bit-dark/70 dark:text-gray-400 text-sm mb-4">
                <li><strong className="text-bit-dark dark:text-gray-200">Email:</strong>{' '}<a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a></li>
                <li><strong className="text-bit-dark dark:text-gray-200">Instagram:</strong>{' '}<a href="https://instagram.com/bbbcoding" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors">@bbbcoding</a></li>
                <li><strong className="text-bit-dark dark:text-gray-200">Website:</strong>{' '}<a href="https://bitbybitcoding.github.io" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors">bitbybitcoding.github.io</a></li>
              </ul>
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">
                To report a concern to the <strong>Personal Data Protection Commission (Singapore)</strong>:{' '}
                <a href="https://www.pdpc.gov.sg" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors">www.pdpc.gov.sg</a>
              </p>
            </Card>

            {/* 15 — Version History */}
            <Card>
              <SH num="15" icon={Clock} gradient="from-bit-lavender to-violet-400" title="Version History" />
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                  <span className="px-2 py-0.5 rounded-md bg-bit-dark/10 dark:bg-gray-600 text-bit-dark dark:text-gray-300 text-xs font-bold shrink-0">v1.0</span>
                  <div>
                    <p className="font-bold text-bit-dark dark:text-white text-sm">January 2026</p>
                    <p className="text-xs text-bit-dark/60 dark:text-gray-400">Initial Privacy Policy adopted.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-bit-lavender/5 dark:bg-bit-lavender/10 border border-bit-lavender/20 dark:border-bit-lavender/30">
                  <span className="px-2 py-0.5 rounded-md bg-bit-lavender/20 dark:bg-bit-lavender/30 text-bit-lavender text-xs font-bold shrink-0">v1.1</span>
                  <div>
                    <p className="font-bold text-bit-dark dark:text-white text-sm">March 2026 <span className="text-bit-lavender text-xs font-normal ml-2">Current</span></p>
                    <p className="text-xs text-bit-dark/60 dark:text-gray-400 leading-relaxed">Revised to add explicit PDPA framing as primary governing law; added data retention schedule; added data breach notification procedure; removed TCPA (US law) provisions; clarified legal bases for processing; added right of deletion; strengthened children&apos;s privacy section.</p>
                  </div>
                </div>
              </div>
              <div className="pt-5 border-t border-bit-dark/10 dark:border-gray-700">
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass rounded-3xl p-8 md:p-10 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
      {children}
    </div>
  );
}

function SH({ num, icon: Icon, gradient, title }: { num: string; icon: React.ElementType; gradient: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <h2 className="text-2xl font-display font-bold text-bit-dark dark:text-white">{num}. {title}</h2>
    </div>
  );
}

function SubSH({ title }: { title: string }) {
  return (
    <h3 className="text-base font-display font-bold text-bit-dark dark:text-gray-200 mt-6 mb-3 pb-1 border-b border-bit-dark/8 dark:border-gray-700/60">{title}</h3>
  );
}
