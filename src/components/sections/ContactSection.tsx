import { MapPin, Phone, Mail, Clock, Train, Car, Video, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing bg-paper border-t border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <p className="eyebrow mb-4 text-accent">Contact</p>
          <h2 className="text-h2 text-base mb-6">
            Direct bereikbaar
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
          
          {/* Response SLA Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 border border-accent/30 rounded-md mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(182, 150, 109, 0.1) 0%, rgba(45, 190, 139, 0.05) 100%)',
            }}
          >
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="font-mono text-body-m text-base font-semibold">
              We reageren binnen 1 werkdag
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Primary Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/20 rounded-md flex items-center justify-center text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h4 text-base mb-2">Telefoon</h3>
                  <a 
                    href="tel:+31703602907" 
                    className="text-body-l font-mono text-accent hover:text-accent-hover transition-colors"
                  >
                    +31 (0)70 360 29 07
                  </a>
                  <p className="text-body-s text-neutral-400 mt-1">
                    Maandag - Vrijdag: 08:00 - 17:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/20 rounded-md flex items-center justify-center text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h4 text-base mb-2">Email</h3>
                  <a 
                    href="mailto:info@bureau-broersma.nl" 
                    className="text-body-l font-mono text-accent hover:text-accent-hover transition-colors break-all"
                  >
                    info@bureau-broersma.nl
                  </a>
                  <p className="text-body-s text-neutral-400 mt-1">
                    Responstijd binnen 1 werkdag
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/20 rounded-md flex items-center justify-center text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-h4 text-base mb-2">Adres</h3>
                  <address className="text-body-m text-neutral-400 not-italic">
                    Groothertoginnelaan 33<br />
                    2517 EB Den Haag
                  </address>
                </div>
              </div>
            </div>

            {/* Video Call CTA removed per request */}

            {/* Parking & Transit Info */}
            <div className="border-l-2 border-accent pl-6 space-y-3">
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-body-m font-semibold text-base mb-1">Parkeren</h5>
                  <p className="text-body-s text-neutral-400">
                    Betaald parkeren in omgeving. Bezoekersparkeerplaatsen op aanvraag.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Train className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-body-m font-semibold text-base mb-1">Openbaar vervoer</h5>
                  <p className="text-body-s text-neutral-400">
                    Tram 1, 16, 17 (halte Frankenslag) — 3 min lopen
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Image & Map */}
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* Office Photo */}
            <div className="border border-accent/30 overflow-hidden">
              <img 
                src="/images/contact-office.jpg" 
                alt="Bureau Broersma kantoor, Groothertoginnelaan 33, Den Haag"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Map Placeholder */}
            <div className="border border-neutral-100 overflow-hidden">
              <div className="aspect-[4/3] bg-neutral-100 relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-300">
                  <MapPin className="w-16 h-16 mb-4" />
                  <p className="text-body-m font-mono">Google Maps integratie</p>
                  <p className="text-body-s text-neutral-400 mt-2">
                    Groothertoginnelaan 33, Den Haag
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-paper">
                <a
                  href="https://maps.google.com/?q=Groothertoginnelaan+33,+2517+EB+Den+Haag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full justify-center group"
                >
                  Open in Google Maps
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
