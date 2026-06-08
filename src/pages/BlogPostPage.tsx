import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const blogPosts: Record<string, any> = {
  'why-we-founded-bit-by-bit': {
    title: 'Why We Founded Bit by Bit Coding',
    subtitle: 'On equity in coding education, opening doors, and how we got there',
    author: 'Hongpeng Wei',
    role: 'Co-founder & President, Bit by Bit Coding',
    date: 'January 2026',
    readTime: '8 min read',
    category: 'Opinion',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
    imageCredit: {
      name: 'Desola Lanre-Ologun',
      url: 'https://unsplash.com/@disruptxn?utm_source=medium&utm_medium=referral',
      platform: 'Unsplash',
      platformUrl: 'https://unsplash.com/?utm_source=medium&utm_medium=referral',
    },
  },
};

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-4xl font-display font-bold text-bit-dark dark:text-white mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-bit-lavender hover:text-bit-red underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-bit-lavender hover:text-bit-red transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-bit-dark dark:text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-bit-dark/70 dark:text-gray-300 mb-6">
              {post.subtitle}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-bit-dark/60 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
            {post.imageCredit && (
              <div className="bg-bit-dark/5 dark:bg-gray-800/80 px-4 py-2 text-xs text-bit-dark/60 dark:text-gray-400">
                Photo by{' '}
                <a href={post.imageCredit.url} target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red underline">
                  {post.imageCredit.name}
                </a>
                {' '}on{' '}
                <a href={post.imageCredit.platformUrl} target="_blank" rel="noopener noreferrer" className="text-bit-lavender hover:text-bit-red underline">
                  {post.imageCredit.platform}
                </a>
              </div>
            )}
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="glass rounded-2xl p-8 md:p-12 border border-white/60 dark:border-gray-700 shadow-xl bg-white/40 dark:bg-gray-800/40">

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                In January 2026, Brian and I launched what would go on to occupy our minds and efforts for the next two months — and, we hope, for many years after. We called it Bit by Bit Coding (thanks to our tutor Apicha Maneerat, who came up with the name while in a chat with me). The name was deliberate. Not a grand proclamation. Not a promise of overnight transformation. Just a quiet acknowledgement that the most meaningful change happens incrementally, persistently, one small step at a time. And little by little, bit by bit, we will make that difference.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                What we built is a free, multi-year coding education programme for Singaporean youth aged 13 to 18. What we are building toward is something bigger: a Singapore where every young person who wants to learn to code can learn to code, regardless of what their parents earn, regardless of what school they attend, regardless of whether they’re able to bring a shiny new MacBook to class to code, regardless of anything except their own curiosity and drive.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                <strong>Learning to code is not a privilege. It is a right.</strong> And for too long, we have treated it like the former.
              </p>

              <h2 className="text-3xl font-display font-bold text-bit-dark dark:text-white mt-12 mb-6">Fighting Privilege, Head-on</h2>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                Singapore has made admirable strides in coding education. Programmes like Code for Fun and Code in the Community have brought introductory coding to thousands of students who might otherwise never have encountered it. We are grateful those programmes exist. They have lit flames that keep burning, especially for some children.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                But these… stop at the beginning.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                A student who completes an introductory coding workshop learns what a loop is, how to write a basic function, perhaps how to build a simple game with characters. In my first introductory lesson to coding, I was taught how to make a Sprite move on Scratch, and how to make it say things. I thought it was pretty fun. And for many kids, they are. The things that they’re taught, these are real skills. But they are the first rung of a very tall ladder. What happens when that student — the one who stayed up until midnight debugging their project because they loved it, the one who came back the next week asking what comes next — wants to keep climbing?
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                The honest answer, for most Singaporean teenagers from ordinary households, is: not much. Advanced coding pathways exist in Singapore. They are called enrichment centres. They cost hundreds of dollars a month. They are, in practice, accessible only to families who can afford them.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                We did the research. We surveyed the landscape and read empirical research, and confirmed what we had suspected: there is a genuine, unmet market for rigorous, advanced, free coding education for Singaporean youth. Nobody was serving it. Not because it wasn’t needed. But because the economics of free are hard, and someone has to care enough to make it work anyway.
              </p>

              <h2 className="text-3xl font-display font-bold text-bit-dark dark:text-white mt-12 mb-6">Why Us. Why Now</h2>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                The honest answer is rather personal.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                That door was once closed for me. Not dramatically. There was no single moment of rejection, no villain who told me coding wasn’t for people like me. It was subtler than that. It was the quiet arithmetic of enrichment class fees and household budgets. It was having to run Scratch on an old PC and always watching it hang. It was understanding, without anyone ever saying it out loud, that some things were for certain kinds of families.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                I was lucky. I found my own way in eventually: through free online resources, through sheer stubbornness, through teachers who went above and beyond. But I spent a long time thinking about the kids who don’t find their way. Who lose interest before the door cracks open. Who conclude, perhaps at thirteen or fourteen, that coding is simply not for them, when what they really encountered was a price tag.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                I made a promise to myself last year. I would let every kid who wants to learn to code learn to code, regardless of money, regardless of background, regardless of anything else. Bit by Bit Coding is that promise made real.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                We are not here to disrupt. We are here to make sure that what already exists is available to everyone — not just the ones who can pay for it.
              </p>

              <h2 className="text-3xl font-display font-bold text-bit-dark dark:text-white mt-12 mb-6">What We Built</h2>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                Bit by Bit Coding offers free, multi-year coding pathways for youth aged 10 to 18. We begin with Python — not because it is the only language worth knowing, but because it is the most accessible entry point into serious programming. From there, students progress into Flask for web development, SQL for databases, and beyond: C, Java, robotics, Arduino.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                This is not a workshop. It is not a one-off event or a taster session. It is a structured, multi-term curriculum designed to take a student from beginner to genuinely capable. The kind of capable that shows up in portfolios, in university applications, in real projects that solve real problems.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                Our curriculum takes inspiration from Victoria Junior College’s computing syllabus and goes further, informed by research in coding education pedagogy and shaped with input from former computing teachers and a leading coding education expert from Cornell University. We are serious about the quality of what we teach. Free should not mean second-rate.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                Our tutors are volunteers: ex-computing students, current CS students, young professionals, who remember what it felt like to want more than what was available to them. They are not here for a line on their CVs. They are here because they believe, as we do, that this matters.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                We are a recognised groundup under the BAGUS Together initiative, supported by NVPC, Temasek Foundation, and Tote Board. We are small. We are new. We are, in every meaningful sense, still at the beginning.
              </p>

              <h2 className="text-3xl font-display font-bold text-bit-dark dark:text-white mt-12 mb-6">The Road So Far</h2>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                Two months into building Bit by Bit Coding, the scorecard looks something like this: thirteen volunteers, a working curriculum, institutional recognition, a handful of warm introductions to schools.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                It is, in fact, humbling: you can build the most thoughtful programme in the world and still find yourself, weeks before launch, refreshing your inbox hoping someone, anyone, has signed up. The hardest lesson of the past two months has been that doing good work is necessary but not sufficient. You have to reach people. And reaching people, especially young people and their parents, through institutions that move slowly and inboxes that fill up fast, is its own kind of labour.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                We have been rejected, ignored, and left on read more times than I care to count. We have also been surprised — by former teachers who replied within hours, by tutors who stayed up late to finish a lesson plan, by the Cornell professor who made time for a conversation with students she had never met. The good and the bad arrive together. You learn to hold both.
              </p>

              <h2 className="text-3xl font-display font-bold text-bit-dark dark:text-white mt-12 mb-6">A Call to Everyone Reading This</h2>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                If you are a young person aged 13 to 18 in Singapore who loves coding or wants to learn — come. We are building this for you, and we want you in our first cohort. It is free. It is rigorous. It is designed to take you somewhere.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                If you are a parent with a child who fits that description — share this with them. The sign-up is simple. The commitment is three hours on Saturdays, for twelve weeks. The potential return, we believe, is significant.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                If you are an educator, a school administrator, or a teacher who has watched talented students hit a ceiling they couldn’t afford to break through — talk to us. We are looking for partners who share our belief that every child deserves a pathway forward.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                If you are, regardless of your age, a computing professional, programmer with many years of experience, or a computing student who just believes that every youth in Singapore deserves a chance to learn to code and go beyond the basics — join us. Be part of a community of ex-students and programmers who want to make a real difference. Help us make coding education democratic and accessible throughout Singapore.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                If you are a company, a foundation, or an individual who believes that equitable access to technical education is one of the more important investments Singapore can make in its own future — we would be grateful to hear from you.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                And if you are simply someone who believes that the accident of your birth should not determine whether you get to learn something you love — then you already understand why we built this. Tell someone about us.
              </p>

              <h2 className="text-3xl font-display font-bold text-bit-dark dark:text-white mt-12 mb-6">On Going, Anyway</h2>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                There is a version of this story where we stop at the easy wins. Where we frame BAGUS recognition as success and call it a good semester. Where we tell ourselves the timing wasn’t right, the pipeline wasn’t there, the schools weren’t ready.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                That version is available to us. We have chosen not to take it.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-6">
                The mission has not changed since January. There is a fourteen-year-old somewhere in this city who wants to learn to code, whose family cannot afford the enrichment class, who has not yet found Bit by Bit Coding. That student is the reason we are still here. That student is the reason we will keep going, regardless of how the inbox looks on any given morning.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-8">
                We will work together, tenaciously, to make coding education democratic to all Singaporean youth. Bit by bit.
              </p>

              <p className="text-bit-dark/80 dark:text-gray-300 leading-relaxed mb-12">
                See you at our first session.
              </p>

              {/* Byline */}
              <div className="border-t border-bit-dark/10 dark:border-gray-700 pt-6">
                <p className="text-bit-dark/80 dark:text-gray-300 font-medium mb-2">— {post.author}</p>
                <p className="text-sm text-bit-dark/60 dark:text-gray-400 mb-6">{post.role}</p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href="https://www.instagram.com/bbbcoding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-bit-lavender hover:text-bit-red transition-colors font-medium"
                  >
                    @bbbcoding
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://bitbybitcoding.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-bit-lavender hover:text-bit-red transition-colors font-medium"
                  >
                    bitbybitcoding.github.io
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://resonanceblog.net/post/why-we-founded-bit-by-bit-coding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-bit-lavender hover:text-bit-red transition-colors font-medium"
                  >
                    Read the post on Resonance Blog
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-bit-dark/50 dark:text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding. Opening the doors of coding education for all youth, bit by bit.</p>
      </footer>
    </div>
  );
}
