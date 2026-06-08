import { Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="border-t border-bit-dark/5 dark:border-gray-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl pt-16 pb-8 px-6 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/logo.png"
                alt="Bit by Bit Logo"
                width="32"
                height="32"
                className="w-8 h-8"
              />
              <span className="text-bit-red text-lg font-display font-bold">Bit by Bit</span>
            </div>
            <p className="text-bit-dark/60 dark:text-gray-400 text-sm leading-relaxed">
              A non-profit initiative dedicated to making coding education accessible to every Singaporean youth.
            </p>
          </div>

          {/* Programmes */}
          <div>
            <h5 className="text-bit-dark dark:text-white font-display font-bold text-lg mb-4">Programmes</h5>
            <ul className="flex flex-col gap-3 text-sm text-bit-dark/60 dark:text-gray-400">
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">Python</Link></li>
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">AI &amp; Machine Learning</Link></li>
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">C++ &amp; Algorithms</Link></li>
              <li><Link to="/pathways" className="hover:text-bit-lavender transition-colors">#GirlsWhoCode</Link></li>
              <li><Link to="/impact" className="hover:text-bit-lavender transition-colors">Impact</Link></li>
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h5 className="text-bit-dark dark:text-white font-display font-bold text-lg mb-4">Organisation</h5>
            <ul className="flex flex-col gap-3 text-sm text-bit-dark/60 dark:text-gray-400">
              <li>
                <a
                  href="/#about"
                  onClick={handleAboutClick}
                  className="hover:text-bit-lavender transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li><Link to="/team" className="hover:text-bit-lavender transition-colors">Team</Link></li>
              <li><Link to="/tutor" className="hover:text-bit-lavender transition-colors">Volunteer</Link></li>
              <li><Link to="/partners" className="hover:text-bit-lavender transition-colors">Partners</Link></li>
              <li><Link to="/press" className="hover:text-bit-lavender transition-colors">Press</Link></li>
              <li><Link to="/gallery" className="hover:text-bit-lavender transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-bit-lavender transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-bit-dark dark:text-white font-display font-bold text-lg mb-4">Connect</h5>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bbbcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bit-dark/5 dark:bg-gray-800 flex items-center justify-center text-bit-dark/60 dark:text-gray-400 hover:bg-bit-lavender hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.github.com/bitbybitcoding"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bit-dark/5 dark:bg-gray-800 flex items-center justify-center text-bit-dark/60 dark:text-gray-400 hover:bg-bit-lavender hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/bbbcoding/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-bit-dark/5 dark:bg-gray-800 flex items-center justify-center text-bit-dark/60 dark:text-gray-400 hover:bg-bit-lavender hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bit-dark/5 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-bit-dark/50 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Bit by Bit Coding. Opening the doors of coding education for all youth, bit by bit.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-bit-dark/50 dark:text-gray-500">
            <Link to="/privacy" className="hover:text-bit-dark dark:hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-bit-dark dark:hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link to="/conduct" className="hover:text-bit-dark dark:hover:text-gray-300 transition-colors">Code of Conduct</Link>
            <Link to="/consent" className="hover:text-bit-dark dark:hover:text-gray-300 transition-colors">Consent Form</Link>
            <Link to="/child-policy" className="hover:text-bit-dark dark:hover:text-gray-300 transition-colors">Child Protection Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
