import { useEffect } from 'react';
import { FileText, Users, Shield, Camera, Database, Scale, AlertTriangle, BookOpen, Heart, Globe, RefreshCw } from 'lucide-react';

// Map each quick-ref card to the section card id it should scroll to
const quickRef = [
  { icon: Users,         label: 'Eligibility',        color: 'from-bit-lavender to-violet-400',  targetId: 'terms-1'  },
  { icon: BookOpen,      label: 'Programme Conduct',  color: 'from-bit-turquoise to-cyan-400',   targetId: 'terms-2'  },
  { icon: AlertTriangle, label: 'Attendance',         color: 'from-bit-red to-pink-400',         targetId: 'terms-3'  },
  { icon: Shield,        label: 'Safety',             color: 'from-bit-green to-emerald-400',    targetId: 'terms-4'  },
  { icon: Camera,        label: 'Media',              color: 'from-orange-400 to-yellow-400',    targetId: 'terms-6'  },
  { icon: Database,      label: 'Data Protection',    color: 'from-bit-lavender to-bit-red',     targetId: 'terms-7'  },
  { icon: Scale,         label: 'Liability',          color: 'from-bit-turquoise to-bit-lavender', targetId: 'terms-9' },
  { icon: FileText,      label: 'IP & Amendments',    color: 'from-bit-red to-bit-lavender',     targetId: 'terms-8'  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Terms() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <FileText className="w-4 h-4 text-bit-lavender" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">Legal Documents</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              These Terms govern participation in all Bit by Bit Coding programmes, workshops, events, and activities.
            </p>
            <p className="text-sm text-bit-dark/50 dark:text-gray-500 mt-4">
              Effective: March 2026 &nbsp;&bull;&nbsp; Applies to: Students, Parents/Guardians, and Participants
            </p>
          </div>

          {/* Quick Reference Cards — onClick scroll, not href, to avoid HashRouter conflicts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {quickRef.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={i}
                  onClick={() => scrollTo(s.targetId)}
                  className="glass rounded-2xl p-4 border border-white/60 dark:border-gray-700 text-center hover:shadow-lg hover:border-bit-lavender/30 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-bold text-bit-dark dark:text-gray-300">{s.label}</p>
                </button>
              );
            })}
          </div>

          {/* Intro banner */}
          <div className="glass rounded-2xl p-6 border border-bit-lavender/30 dark:border-bit-lavender/50 bg-bit-lavender/5 dark:bg-bit-lavender/10 mb-8">
            <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">
              These Terms and Conditions (&quot;Terms&quot;) govern participation in all programmes, workshops, events, and activities (collectively, &quot;Programmes&quot;) organised by Bit by Bit Coding (&quot;BbB&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By registering for or participating in any BbB Programme, the participant and their parent or legal guardian (where the participant is under 18 years of age) agree to be bound by these Terms.
            </p>
            <p className="text-bit-dark/80 dark:text-gray-300 text-sm leading-relaxed">
              BbB is a community ground-up recognised under the <strong>BAGUS Together</strong> initiative, supported by <strong>NVPC</strong>, <strong>Temasek Foundation</strong>, and <strong>Tote Board</strong>. These Terms should be read alongside BbB&apos;s{' '}
              <a href="/#/privacy" className="text-bit-lavender hover:text-bit-red transition-colors">Privacy Policy</a> and Code of Conduct.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">

            <Card id="terms-1">
              <SH num="1" icon={Users} gradient="from-bit-lavender to-violet-400" title="Eligibility and Registration" />
              <SubSH title="1.1 Eligibility" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB Programmes are open to youth aged 10 to 18 residing in Singapore, unless otherwise stated for a specific programme. Participation by persons outside this age range may be considered at BbB&apos;s discretion.</p>
              <SubSH title="1.2 Registration" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Registration must be completed via BbB&apos;s official registration form. A place in a Programme is only confirmed upon receipt of a completed registration form and, where applicable, any required consent documents. BbB reserves the right to refuse or cancel registration at its discretion.</p>
              <SubSH title="1.3 Parental or Guardian Consent" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">As BbB Programmes are designed for minors, a parent or legal guardian must complete the registration form on behalf of the participant, or must supervise the completion of the form by their child/ward. By submitting the form, the parent or guardian confirms that they have the legal authority to consent on the participant&apos;s behalf and that all information provided is accurate and complete.</p>
            </Card>

            <Card id="terms-2">
              <SH num="2" icon={BookOpen} gradient="from-bit-turquoise to-cyan-400" title="Programme Conduct" />
              <SubSH title="2.1 Code of Conduct" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">All participants are required to comply with BbB&apos;s <a href="/#/conduct" className="text-bit-lavender hover:text-bit-red transition-colors">Code of Conduct</a> at all times during Programme activities, including online sessions and any associated communications.</p>
              <SubSH title="2.2 Disciplinary Action" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB reserves the right to take disciplinary action, including suspension or permanent removal from the Programme, in response to breaches of the Code of Conduct. BbB&apos;s decisions on disciplinary matters are final, subject to the appeals process described therein.</p>
              <SubSH title="2.3 Removal from Programme" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">BbB reserves the right to remove any participant from a Programme at any time if the participant&apos;s continued presence poses a risk to the safety, wellbeing, or learning experience of others, or if the participant repeatedly or seriously violates these Terms or the Code of Conduct.</p>
            </Card>

            <Card id="terms-3">
              <SH num="3" icon={AlertTriangle} gradient="from-bit-red to-pink-400" title="Attendance and Commitment" />
              <SubSH title="3.1 Expected Attendance" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Participants are expected to attend all scheduled sessions of the Programme they have enrolled in. Consistent or unexplained absence may result in the participant&apos;s place being offered to another student on the waitlist.</p>
              <SubSH title="3.2 Absence Notification" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">If a participant is unable to attend a session, the parent or guardian should notify BbB as early as possible via our official communication channels. Repeated absences without notice may be treated as a light offence under the Code of Conduct.</p>
              <SubSH title="3.3 Punctuality" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">Participants are expected to arrive on time for all sessions. Arriving more than 15 minutes late without prior notice may be recorded as a light offence under the Code of Conduct.</p>
            </Card>

            <Card id="terms-4">
              <SH num="4" icon={Shield} gradient="from-bit-green to-emerald-400" title="Supervision and Safety" />
              <SubSH title="4.1 Scope of Supervision" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB&apos;s duty of care and supervision of participants begins at the scheduled start time of each session and ends at the scheduled end time. BbB is not responsible for the safety or supervision of participants travelling to or from the venue.</p>
              <SubSH title="4.2 Arrival and Departure" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Parents and guardians are responsible for ensuring their child arrives at and departs from sessions safely. If a participant requires a specific arrangement for pickup, this must be communicated to BbB in advance.</p>
              <SubSH title="4.3 Emergency Situations" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">In the event of a medical emergency, our tutors and administrators will take reasonable steps to ensure the participant&apos;s safety, including contacting emergency services if necessary. By registering, parents and guardians authorise BbB to consent to emergency medical treatment on their child&apos;s behalf in circumstances where the parent or guardian cannot be reached in time.</p>
              <SubSH title="4.4 Medical and Health Disclosure" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">Parents and guardians are required to disclose, at the time of registration, any known medical conditions, allergies, or special needs. BbB shall not be liable for any adverse outcomes arising from incomplete or inaccurate medical disclosures.</p>
            </Card>

            <Card id="terms-5">
              <SH num="5" icon={Camera} gradient="from-orange-400 to-yellow-400" title="Programme Changes and Cancellations" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">BbB reserves the right to amend, reschedule, cancel, or discontinue any Programme or session at any time where reasonably necessary. As BbB Programmes are offered <strong>free of charge</strong>, no monetary refunds apply. In the event of a cancellation, BbB will endeavour to offer participants an alternative session or placement where possible.</p>
            </Card>

            <Card id="terms-6">
              <SH num="6" icon={Camera} gradient="from-orange-400 to-yellow-400" title="Photography, Videography, and Media" />
              <SubSH title="6.1 BbB Media" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">BbB may take photographs and videos during Programme sessions for use in our social media, website, publications, and marketing materials. BbB will not publish clearly identifiable photographs of individual minors without the explicit consent of their parent or guardian.</p>
              <SubSH title="6.2 Parental Consent for Photography" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">Parents and guardians will be asked to provide explicit consent for photography as part of the registration process.</p>
              <SubSH title="6.3 Venue and Partner Photography" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">From time to time, the venues or partner organisations hosting BbB sessions may also take photographs for their own marketing purposes. BbB will inform parents and guardians of this possibility where known in advance.</p>
              <SubSH title="6.4 Participant and Parent Media" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">Participants and parents are welcome to take photographs for personal use during sessions. However, sharing photographs that include other participants — particularly other minors — on any public platform is strictly prohibited without the express consent of those participants&apos; parents or guardians.</p>
            </Card>

            <Card id="terms-7">
              <SH num="7" icon={Database} gradient="from-bit-lavender to-bit-red" title="Personal Data Protection" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">BbB collects, uses, and stores personal data in accordance with Singapore&apos;s <strong>Personal Data Protection Act 2012 (PDPA)</strong> and BbB&apos;s{' '}<a href="/#/privacy" className="text-bit-lavender hover:text-bit-red transition-colors">Privacy Policy</a>. We will not sell personal data. Parents and guardians may request access to, correction of, or deletion of personal data by contacting <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a>.</p>
            </Card>

            <Card id="terms-8">
              <SH num="8" icon={FileText} gradient="from-bit-turquoise to-bit-lavender" title="Intellectual Property" />
              <SubSH title="8.1 BbB Curriculum and Materials" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-4">All curriculum materials, lesson content, worksheets, and resources produced by BbB remain the intellectual property of Bit by Bit Coding. Reproduction, distribution, or commercial use of BbB materials without prior written consent is prohibited.</p>
              <SubSH title="8.2 Student Work" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">Participants retain ownership of original code and projects produced during BbB Programmes. By participating, participants and their parents or guardians grant BbB a non-exclusive, royalty-free licence to showcase participant work (in anonymised or credited form, with consent) for educational or promotional purposes.</p>
            </Card>

            <Card id="terms-9">
              <SH num="9" icon={Scale} gradient="from-bit-red to-bit-lavender" title="Liability" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">To the maximum extent permitted by applicable law, BbB, its volunteers, tutors, administrators, and affiliated organisations shall not be liable for any loss, damage, injury, or harm arising from participation in any BbB Programme, except where such loss or damage arises from BbB&apos;s gross negligence or wilful misconduct. Participants are responsible for their own personal devices and belongings during sessions.</p>
            </Card>

            <Card id="terms-10">
              <SH num="10" icon={Heart} gradient="from-bit-green to-emerald-400" title="Child Protection" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">BbB is deeply committed to the safety and wellbeing of all participants. All tutors and administrators are required to comply with BbB&apos;s{' '}<a href="/#/child-policy" className="text-bit-lavender hover:text-bit-red transition-colors">Child Protection Policy</a>. Any concerns regarding the safety or wellbeing of a participant should be reported immediately to{' '}<a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a>.</p>
            </Card>

            <Card id="terms-11">
              <SH num="11" icon={RefreshCw} gradient="from-bit-lavender to-violet-400" title="Amendments to These Terms" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">BbB reserves the right to amend these Terms at any time. The most current version will be published on our website. Continued participation in BbB Programmes following any amendment constitutes acceptance of the revised Terms.</p>
            </Card>

            <Card id="terms-12">
              <SH num="12" icon={Globe} gradient="from-bit-turquoise to-cyan-400" title="Governing Law" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed">These Terms are governed by and construed in accordance with the laws of the <strong>Republic of Singapore</strong>. Any disputes arising from or in connection with these Terms shall be subject to the non-exclusive jurisdiction of the courts of Singapore.</p>
            </Card>

            <Card id="terms-13">
              <SH num="13" icon={FileText} gradient="from-bit-red to-pink-400" title="Contact" />
              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-3"><strong>Bit by Bit Coding</strong></p>
              <ul className="space-y-1 text-sm text-bit-dark/70 dark:text-gray-400">
                <li>Email: <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors">info@bbbcoding.org</a></li>
                <li>Instagram: <a href="https://instagram.com/bbbcoding" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors">@bbbcoding</a></li>
                <li>Website: <a href="https://bitbybitcoding.github.io" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors">bitbybitcoding.github.io</a></li>
              </ul>
              <div className="mt-6 pt-5 border-t border-bit-dark/10 dark:border-gray-700">
                <p className="text-xs text-bit-dark/50 dark:text-gray-500">Last updated: March 2026. These Terms and Conditions are not a substitute for legal advice.</p>
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

function Card({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="glass rounded-3xl p-8 md:p-10 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40 scroll-mt-28">
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
