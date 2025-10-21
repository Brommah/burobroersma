import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-neutral-100 shadow-sm">
      {/* Top Utility Bar */}
      <div 
        className="border-b border-accent/20"
        style={{
          background: 'linear-gradient(135deg, #b6966d 0%, #9d7f58 100%)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-9 text-xs sm:text-sm">
            <div className="hidden sm:flex items-center gap-4 lg:gap-6 font-mono text-paper">
              <a 
                href="tel:+31703602907" 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+31 (0)70 360 29 07</span>
              </a>
              <a 
                href="mailto:info@bureau-broersma.nl" 
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@bureau-broersma.nl</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-paper font-mono ml-auto">
              <button 
                className="px-2 py-0.5 font-semibold hover:opacity-80 transition-opacity"
                aria-label="Nederlands"
              >
                NL
              </button>
              <span className="opacity-50">|</span>
              <button 
                className="px-2 py-0.5 opacity-70 hover:opacity-100 transition-opacity"
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-paper">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-bureau-broersma.png" 
                alt="Bureau Broersma" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/ingenieurs"
                className="px-4 py-2 text-base font-semibold text-base hover:text-accent transition-colors"
              >
                Ingenieurs
              </Link>
              <Link
                href="/bouwadvies"
                className="px-4 py-2 text-base font-semibold text-base hover:text-accent transition-colors"
              >
                Bouwadvies
              </Link>
              <button
                onClick={() => scrollToSection('projecten')}
                className="px-4 py-2 text-base font-semibold text-base hover:text-accent transition-colors"
              >
                Projecten
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="px-4 py-2 text-base font-semibold text-base hover:text-accent transition-colors"
              >
                Team
              </button>
              <div className="w-px h-6 bg-neutral-100 mx-2"></div>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 bg-accent text-paper font-semibold rounded-md hover:bg-accent-hover transition-all"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-neutral-100 rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral-100">
              <div className="space-y-1">
                <Link
                  href="/ingenieurs"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-left px-4 py-3 text-base font-semibold hover:bg-neutral-100 hover:text-accent transition-colors rounded-md"
                >
                  Ingenieurs
                </Link>
                <Link
                  href="/bouwadvies"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-left px-4 py-3 text-base font-semibold hover:bg-neutral-100 hover:text-accent transition-colors rounded-md"
                >
                  Bouwadvies
                </Link>
                <button
                  onClick={() => scrollToSection('projecten')}
                  className="w-full text-left px-4 py-3 text-base font-semibold hover:bg-neutral-100 hover:text-accent transition-colors rounded-md"
                >
                  Projecten
                </button>
                <button
                  onClick={() => scrollToSection('team')}
                  className="w-full text-left px-4 py-3 text-base font-semibold hover:bg-neutral-100 hover:text-accent transition-colors rounded-md"
                >
                  Team
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-4 px-4 py-3 bg-accent text-paper font-semibold rounded-md hover:bg-accent-hover transition-all"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-neutral-100 space-y-3">
                <a 
                  href="tel:+31703602907" 
                  className="flex items-center gap-2 text-sm font-mono text-accent"
                >
                  <Phone className="w-4 h-4" />
                  +31 (0)70 360 29 07
                </a>
                <a 
                  href="mailto:info@bureau-broersma.nl" 
                  className="flex items-center gap-2 text-sm font-mono text-accent break-all"
                >
                  <Mail className="w-4 h-4" />
                  info@bureau-broersma.nl
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
