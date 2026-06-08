import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 'why-we-founded-bit-by-bit',
    title: 'Why We Founded Bit by Bit Coding',
    excerpt: 'On equity in coding education, opening doors, and how we got there',
    author: 'Hongpeng Wei',
    date: 'January 2026',
    readTime: '8 min read',
    category: 'Opinion',
    tags: ['#student-stories', '#equity', '#events'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    slug: 'why-we-founded-bit-by-bit',
  },
];

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string>('all');

  const allTags = useMemo(() => {
    const tags = blogPosts.flatMap((post) => post.tags);
    return ['all', ...Array.from(new Set(tags))];
  }, []);

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesTag = activeTag === 'all' || post.tags.includes(activeTag);
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.join(' ').toLowerCase().includes(query);
      return matchesTag && matchesSearch;
    });
  }, [activeTag, searchTerm]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-bit-lavender/30 dark:border-bit-lavender/50 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bit-red animate-pulse"></span>
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                Stories & Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark dark:text-white tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-bit-lavender to-bit-red">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Thoughts on coding education, equity, and building a community that learns together.
            </p>
          </div>

          <div className="glass rounded-2xl p-5 border border-white/60 dark:border-gray-700 mb-10">
            <div className="relative mb-4">
              <Search className="w-4 h-4 text-bit-dark/50 dark:text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search blog posts..."
                className="w-full rounded-xl border border-bit-dark/10 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 pl-10 pr-3 py-2.5 text-sm text-bit-dark dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-bit-lavender/40"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                    activeTag === tag
                      ? 'bg-bit-lavender text-white'
                      : 'bg-white/70 dark:bg-gray-800/70 text-bit-dark/70 dark:text-gray-300 border border-bit-dark/10 dark:border-gray-700 hover:border-bit-lavender/40'
                  }`}
                >
                  {tag === 'all' ? 'All' : tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group glass rounded-2xl overflow-hidden border border-white/60 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-bit-lavender/20 to-bit-red/20">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-bit-lavender/90 text-white text-xs font-bold backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white/40 dark:bg-gray-800/40 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-bold text-bit-dark dark:text-white mb-2 group-hover:text-bit-lavender transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-bit-dark/70 dark:text-gray-400 mb-4 flex-grow line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-bit-dark/50 dark:text-gray-500 pt-4 border-t border-bit-dark/10 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-bit-lavender group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <p className="text-center text-bit-dark/60 dark:text-gray-400 mt-8">No posts match your current filters.</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-bit-dark/50 dark:text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding. Opening the doors of coding education for all youth, bit by bit.</p>
      </footer>
    </div>
  );
}
