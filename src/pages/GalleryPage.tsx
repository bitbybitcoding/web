const eventImages = [
  'scape_class_term1.jpeg',
  'wework_class_brianteaching_term1.jpeg',
  'wework_class_nicholasguiding_term1.jpeg',
  'wework_class_term1.jpeg',
  'scape_class_pannteaching_term1.jpeg',
  'wework_class_frombackleft_term1.jpeg',
  'scape_class_pannbrianselfie_term1.jpeg',
  'wework_class_frombackmiddle_term1.jpeg',
  'wework_class_nicholastutoringcloseup_term1.jpeg',
  'wework_class_frombackright_term1.jpeg',
  'scape_class_frombackmiddle_term1.jpeg',
  'wework_class_frombackright2_term1.jpeg',
  'scape_class_pannteachingzoomed_term1.jpeg',
  'wework_class_pratikteachingzoomed_term1.jpeg',
  'csm_class_frombackleft_term1.jpeg,
  'bootcamp_photo.jpeg',
  'kevin_teaching.jpeg',
  'suki_teaching_whiteboard.jpeg',
  'tutor_debate_session.jpeg',
  'zoomed_in_kevin_teaching.jpeg',
  'wework_class_wholepanel_term1.jpeg',
  'wework_class_mrchriszoomed_term1.jpeg',
  'wework_class_panelfrombackright_term1.jpeg',
  'wework_class_hackathonfrombackleft_term1.jpeg',
  'wework_class_mrridzwandiscussionzoomed_term1.jpeg',
  'wework_class_hackathongroupzoomed_term1.jpeg',
  'wework_class_mrridzwanzoomed_term1.jpeg',
  'wework_class_panelfrombackleft_term1.jpeg',
  'wework_class_panelhongpengzoomed_term1.jpeg',
];

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/web/main/.github/assets';

export function GalleryPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-bit-dark dark:text-white mb-4">Event Gallery</h1>
          <p className="text-bit-dark/70 dark:text-gray-300">Snapshots from past BbB workshops, bootcamps, and mentoring sessions.</p>
        </div>

        <div className="gallery-masonry">
          {eventImages.map((image) => (
            <div key={image} className="gallery-card mb-5 break-inside-avoid">
              <img
                src={`${assetBase}/${image}`}
                alt="Bit by Bit event"
                className="w-full h-auto object-cover rounded-[28px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
