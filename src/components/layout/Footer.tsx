import Link from 'next/link';
import { FileDown, Briefcase, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-base text-paper border-t border-neutral-300">
      {/* Careers CTA Band */}
      <div 
        className="border-b border-neutral-300 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(182, 150, 109, 0.15) 0%, rgba(201, 168, 127, 0.08) 100%)',
        }}
      >
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-6 h-6 text-paper drop-shadow-sm" />
                <h3 className="text-h3 text-paper">Werken bij Bureau Broersma</h3>
              </div>
              <p className="text-body-m text-paper/90">
                Constructeur, tekenaar of stagiair? Bekijk onze openstaande posities.
              </p>
            </div>
            <Link
              href="/stages-vacatures"
              className="btn btn-accent whitespace-nowrap"
            >
              Bekijk vacatures
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <div className="text-h3 font-bold text-paper group-hover:text-accent transition-colors">
                Bureau Broersma
              </div>
              <p className="text-caption font-mono text-accent">sinds 1956</p>
            </Link>
            <p className="text-body-s text-neutral-100 mb-6 max-w-xs">
              Constructieve engineering. Rekenkracht + verantwoordelijkheid.
            </p>
            
            <address className="not-italic text-body-s text-neutral-200 space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  Groothertoginnelaan 33<br />
                  2517 EB Den Haag
                </div>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-h4 text-paper mb-4">
              Navigatie
              <div className="w-12 h-0.5 bg-accent mt-2"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/diensten" className="text-body-s text-neutral-100 hover:text-accent transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/projecten" className="text-body-s text-neutral-100 hover:text-accent transition-colors">
                  Projecten
                </Link>
              </li>
              <li>
                <Link href="/aanpak-veiligheid" className="text-body-s text-neutral-100 hover:text-accent transition-colors">
                  Aanpak & Veiligheid
                </Link>
              </li>
              <li>
                <Link href="/over" className="text-body-s text-neutral-100 hover:text-accent transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/stages-vacatures" className="text-body-s text-neutral-100 hover:text-accent transition-colors">
                  Stages & Vacatures
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body-s text-neutral-100 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Downloads & Certifications */}
          <div>
            <h4 className="text-h4 text-paper mb-4">
              Downloads
              <div className="w-12 h-0.5 bg-accent mt-2"></div>
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/downloads/onafhankelijkheidsverklaring.pdf" 
                  className="flex items-center gap-2 text-body-s text-neutral-100 hover:text-accent transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  Verklaring onafhankelijkheid
                </a>
              </li>
              <li>
                <a 
                  href="/downloads/bedrijfsprofiel.pdf" 
                  className="flex items-center gap-2 text-body-s text-neutral-100 hover:text-accent transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  Bedrijfsprofiel
                </a>
              </li>
              <li>
                <a 
                  href="/downloads/certificeringen.pdf" 
                  className="flex items-center gap-2 text-body-s text-neutral-100 hover:text-accent transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  Certificeringen
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-accent/30">
              <p className="text-caption font-mono uppercase tracking-wide text-accent mb-2">
                Certificeringen
              </p>
              <p className="text-body-s text-neutral-200">
                ISO 9001:2015<br />
                VCA** gecertificeerd
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-h4 text-paper mb-4">
              Contact
              <div className="w-12 h-0.5 bg-accent mt-2"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+31703602907" 
                  className="flex items-start gap-2 text-body-s text-neutral-100 hover:text-accent transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5" />
                  <span className="font-mono">+31 (0)70 360 29 07</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@bureau-broersma.nl" 
                  className="flex items-start gap-2 text-body-s text-neutral-100 hover:text-accent transition-colors group break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="font-mono">info@bureau-broersma.nl</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-caption font-mono text-neutral-300 mb-2">
                Openingstijden
              </p>
              <p className="text-body-s text-neutral-200">
                Ma–Vr: 08:00–17:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-300">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-body-s font-mono">
            <div className="text-neutral-200">
              © 2025 Bureau Broersma · KVK 27108415
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-neutral-200 hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="/algemene-voorwaarden" className="text-neutral-200 hover:text-accent transition-colors">
                Algemene voorwaarden
              </Link>
              <Link href="/sitemap" className="text-neutral-200 hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
