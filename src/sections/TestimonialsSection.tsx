const testimonials = [
  'I feel more confident and less intimidated by coding.',
  'I did not know that coding was easy to pick up and I can create my own games.',
  'The tutors were very friendly and helpful! They were very welcoming and clear in explaining.',
  'After learning the basics I am more excited to try harder challenges.',
];

export function TestimonialsSection() {
  return (
    <section className="py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-bit-lavender uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bit-dark dark:text-white">What students say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((quote) => (
            <blockquote
              key={quote}
              className="glass rounded-2xl p-6 border border-white/60 dark:border-gray-700 text-bit-dark/80 dark:text-gray-200 leading-relaxed"
            >
              “{quote}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
