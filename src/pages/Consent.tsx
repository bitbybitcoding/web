import { useEffect } from 'react';
import { ClipboardCheck, Shield, Users, Camera, Database, CheckCircle2, Info } from 'lucide-react';

const sections = [
  { id: 'A', title: 'Terms and Conditions', icon: ClipboardCheck, color: 'from-bit-lavender to-violet-400', items: [
    { label: 'I have read and accept BbB\'s Terms and Conditions.', detail: 'I confirm that I have read the full Terms and Conditions of Participation and agree to be bound by them on behalf of myself and my child.', required: true },
    { label: 'I have read and accept BbB\'s Child Protection Policy.', detail: 'I understand the safeguarding measures in place and how to raise a concern if I believe my child\'s safety or welfare is at risk.', required: true },
    { label: 'I understand that BbB reserves the right to amend its Terms and Conditions.', detail: 'I understand that BbB may update its Terms and Conditions from time to time. Continued participation constitutes acceptance of any revised terms.', required: true },
    { label: 'I understand BbB\'s liability limitations.', detail: 'I acknowledge that BbB, its volunteers, tutors, and administrators will take reasonable care in the conduct of all BbB programmes and activities. However, to the fullest extent permitted by law, BbB shall not be liable for any loss or damage arising from participation in BbB programmes, save that nothing in this form excludes or limits BbB’s liability for death or personal injury caused by negligence, or for any other liability that cannot be excluded or limited under Singapore law.', required: true },
  ]},
  { id: 'B', title: 'Conduct and Participation', icon: Users, color: 'from-bit-turquoise to-cyan-400', items: [
    { label: 'I have read and accept BbB\'s Code of Conduct.', detail: 'I agree to ensure my child understands and complies with the Code of Conduct. I understand that breaches may result in disciplinary action, including suspension or removal from the Programme.', required: true },
    { label: 'I understand BbB\'s attendance expectations.', detail: 'I understand that my child is expected to attend all scheduled sessions punctually. I will notify BbB if my child is unable to attend. Repeated unexplained absences may result in my child\'s place being offered to another student.', required: true },
    { label: 'I accept BbB\'s right to remove my child from the Programme if necessary.', detail: 'I understand that BbB reserves the right to suspend or permanently remove my child for serious or repeated breaches of the Code of Conduct.', required: true },
  ]},
  { id: 'C', title: 'Safety and Medical', icon: Shield, color: 'from-bit-green to-emerald-400', items: [
    { label: 'I authorise BbB to seek emergency medical treatment on my child\'s behalf if necessary.', detail: 'In the event of a medical emergency during a BbB session or activity, I authorise BbB tutors and administrators to consent to emergency medical treatment for my child where I (or my designated emergency contact) cannot be reached after reasonable attempts. I understand that BbB will make all reasonable efforts to contact me before exercising this authority, and that any costs of emergency medical treatment shall be my responsibility.', required: true },
    { label: 'I confirm I have disclosed all relevant medical information.', detail: 'I confirm that I have disclosed any known medical conditions, allergies, or special needs. Failure to disclose may affect BbB\'s ability to respond appropriately in an emergency.', required: true },
    { label: 'I understand BbB\'s supervision scope.', detail: 'BbB\'s duty of care begins at the scheduled start time of each session and ends at the scheduled end time. BbB is not responsible for my child\'s safety during travel to or from the venue.', required: true },
  ]},
  { id: 'D', title: 'Photography and Media', icon: Camera, color: 'from-orange-400 to-yellow-400', items: [
    { label: 'I consent to my child being photographed during BbB sessions.', detail: 'I consent to Bit by Bit Coding and/or the session venue taking photographs and videos of my child for use on BbB\'s social media, website, and marketing materials. I may request pre-publication review of any photos featuring my child.', required: false },
  ]},
  { id: 'E', title: 'Personal Data', icon: Database, color: 'from-bit-lavender to-bit-red', items: [
    { label: 'I consent to BbB collecting and using my child\'s personal data as described.', detail: 'I consent to Bit by Bit Coding collecting, using, and storing the personal data provided for programme administration, safety, communication, and impact reporting. I understand that BbB may share relevant personal data with its supporting bodies (including NVPC, Temasek Foundation, Tote Board, SGPO and *SCAPE) for funding and impact reporting purposes, and with the relevant Singapore authorities where required for safeguarding or by law. Personal data will be retained for the duration of my child’s participation and for a reasonable period thereafter in accordance with BbB\'s Privacy Policy and Singapore\'s Personal Data Protection Act 2012.', required: true },
    { label: 'I consent to receiving programme-related communications from BbB.', detail: 'I consent to BbB contacting me via email and/or phone for programme updates, scheduling changes, and related communications. I may opt out at any time by contacting info@bbbcoding.org.', required: false },
  ]},
];

export function Consent() {
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
              <ClipboardCheck className="w-4 h-4 text-bit-lavender" />
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                Legal Documents
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Parent / Guardian Consent
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              To be completed by a parent or legal guardian for all participants under 18 years of age.
            </p>
          </div>

          {/* Notice Banner */}
          <div className="glass rounded-2xl p-6 border border-bit-lavender/30 dark:border-bit-lavender/50 bg-bit-lavender/5 dark:bg-bit-lavender/10 mb-10 flex items-start gap-4">
            <div className="p-2 bg-bit-lavender/10 dark:bg-bit-lavender/20 rounded-xl shrink-0">
              <Info className="w-5 h-5 text-bit-lavender" />
            </div>
            <div>
              <p className="font-bold text-bit-dark dark:text-white text-sm mb-1">For Reference Only</p>
              <p className="text-sm text-bit-dark/70 dark:text-gray-300 leading-relaxed">
                This page is a reference copy of BbB's consent form. The digital version is embedded in BbB's registration form at <a href="https://bitbybitcoding.github.io" className="text-bit-lavender hover:text-bit-red transition-colors">bitbybitcoding.github.io</a>. All boxes must be checked before registration can be accepted.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="glass rounded-3xl p-8 md:p-10 border border-white/60 dark:border-gray-700 shadow-xl shadow-bit-lavender/5 bg-white/40 dark:bg-gray-800/40">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b border-bit-dark/5 dark:border-gray-700">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-bit-dark/40 dark:text-gray-500 uppercase tracking-widest">Section {section.id}</p>
                      <h2 className="text-xl font-display font-bold text-bit-dark dark:text-white">{section.title}</h2>
                    </div>
                  </div>

                  {/* Consent Items */}
                  <div className="flex flex-col gap-5">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 dark:bg-gray-700/50 border border-white/60 dark:border-gray-600">
                        <div className="mt-0.5 shrink-0">
                          <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${
                            item.required
                              ? 'border-bit-lavender bg-bit-lavender/10 dark:bg-bit-lavender/20'
                              : 'border-orange-400 bg-orange-400/10'
                          }`}>
                            <CheckCircle2 className={`w-4 h-4 ${
                              item.required ? 'text-bit-lavender' : 'text-orange-400'
                            }`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-bit-dark dark:text-white text-sm mb-1">
                            {item.label}
                            {!item.required && (
                              <span className="ml-2 text-xs font-normal text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">
                                Optional
                              </span>
                            )}
                          </p>
                          <p className="text-sm text-bit-dark/60 dark:text-gray-400 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Section-specific footnotes */}
                  {section.id === 'D' && (
                    <div className="mt-5 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                      <p className="text-xs text-orange-700 dark:text-orange-300 leading-relaxed">
                        ✦ This item is optional. If you do not consent, your child will still be welcome to participate fully in all sessions. Please note that the session venue may also take photographs for their own use. If you do not consent to any photography, please notify BbB separately at <a href="mailto:info@bbbcoding.org" className="underline">info@bbbcoding.org</a>.
                      </p>
                    </div>
                  )}
                  {section.id === 'E' && (
                    <div className="mt-5 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
                      <p className="text-xs text-orange-700 dark:text-orange-300 leading-relaxed">
                        ✦ The communications consent item is optional. Essential programme communications (e.g. safety notices, urgent scheduling changes) may still be sent regardless of preference.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center glass rounded-2xl p-8 border border-white/60 dark:border-gray-700 bg-white/40 dark:bg-gray-800/40">
            <p className="text-bit-dark/70 dark:text-gray-300 text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:info@bbbcoding.org" className="text-bit-lavender hover:text-bit-red transition-colors font-bold">info@bbbcoding.org</a>
              {' '}or on Instagram{' '}
              <a href="https://instagram.com/bbbcoding" target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red transition-colors font-bold">@bbbcoding</a>.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 text-center text-bit-dark/50 dark:text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding. Opening the doors of coding education for all youth, bit by bit.</p>
      </footer>
    </div>
  );
}
