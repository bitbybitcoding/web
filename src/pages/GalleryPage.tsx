const eventImages = [
  '4385b213-b05b-4328-b6ec-73f5d3e01311.jpeg',
  '611f6328-2eb3-49ae-af9c-9440b49e65be.jpeg',
  '68de53ef-e146-4d28-a059-e667784138b7.jpeg',
  '6cecd81a-dd93-46bd-8cb9-dea526686f91.jpeg',
  '7c86fb97-6953-4c37-a729-770478d57101.jpeg',
  '7d020912-ff9e-417a-a7f3-2a728f1c992f.jpeg',
  '81b26b18-77e6-44f8-914e-810720f734ae.jpeg',
  '9a416c96-b734-4451-bddf-dc97c71ecc39.jpeg',
  'a2589bcd-8c66-4125-a63b-64952f346b09.jpeg',
  'ad6407d3-48b2-4665-8455-f6cabb650611.jpeg',
  'afec02e4-4673-4319-92f3-2d0edf0ec99c.jpeg',
  'bfce5ae2-32c3-410b-a126-1158b871885d.jpeg',
  'db89596f-f68b-463e-894f-a0445f82fd2a.jpeg',
  'f032812d-2f37-4c10-8624-254be11164fa.jpeg',
  'IMG_0197.jpeg',
  'IMG_0199.jpeg',
  'bootcamp_photo.jpeg',
  'kevin_teaching.jpeg',
  'suki_teaching_whiteboard.jpeg',
  'tutor_debate_session.jpeg',
  'zoomed_in_kevin_teaching.jpeg',
];

const assetBase = 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets';

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
