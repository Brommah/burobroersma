import Link from 'next/link';
import { Shield, FileCheck, BookOpen, Users } from 'lucide-react';

interface MethodPillar {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const methodPillars: MethodPillar[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Veiligheid',
    description: 'De veiligheid is de marge ten opzichte van een instabiele situatie en is wettelijk vastgelegd in het Bouwbesluit 2012.',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Eurocode-conform',
    description: 'Alle berekeningen conform NEN-EN-1990 — de Grondslagen voor het constructief ontwerp. Herleidbaar en reproduceerbaar.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Verantwoordelijkheid',
    description: 'Tegenover de aanvrager van de vergunning dragen wij de verantwoordelijkheid om de taak vakkundig uit te voeren.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Coördinatie',
    description: 'Alle gemaakte stukken coördineren met de werkzaamheden van de architect en de specifieke inbreng van de aannemer.',
  },
];

const MethodSafety = () => {
  return (
    <section id="aanpak" className="section-spacing bg-paper border-y border-neutral-100 sm:block hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <div>
            <p className="eyebrow mb-4 text-accent">Aanpak & Veiligheid</p>
            <h2 className="text-h2 text-base mb-6">
              Methodiek en kwaliteitsborging
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
            <div className="prose prose-lg max-w-none text-neutral-400">
              <p className="text-body-l mb-6">
                Als specialisten beschikken we over alle kennis en expertise om de normen naar behoren toe te passen. Tegenover de aanvrager van de vergunning dragen wij de verantwoordelijkheid om de taak vakkundig uit te voeren.
              </p>
              <p className="text-body-m mb-6">
                Wij werken volgens een methodiek die is opgebouwd uit vier pijlers:
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {methodPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex gap-4 p-4 rounded-md hover:bg-accent/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/20 rounded-md flex items-center justify-center text-accent">
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 text-base mb-2">{pillar.title}</h3>
                    <p className="text-body-m text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-accent pl-6 py-4 bg-accent/5 mb-8">
              <p className="text-body-m text-neutral-400 leading-relaxed">
                Ons werk als ingenieurs kent een tweede aspect. Wij geven essentiële aanwijzingen om onveilige situaties bij bouw- en stutwerkzaamheden te voorkomen. Op basis van ons stut- en stempelplan kan het uitvoerende bouwbedrijf conform het wettelijk vereiste veiligheidsplan te werk gaan.
              </p>
            </div>

            <Link
              href="/aanpak-veiligheid"
              className="btn btn-secondary"
            >
              Lees meer over onze aanpak
            </Link>
          </div>

          {/* Right Column - Process Verification Diagram */}
          <div className="lg:sticky lg:top-24">
            <div 
              className="border border-accent/30 p-6 sm:p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(182, 150, 109, 0.03) 0%, rgba(231, 234, 238, 0.5) 100%)',
              }}
            >
              <div className="mb-6">
                <p className="eyebrow text-accent">Verificatieladder</p>
                <div className="w-16 h-0.5 bg-accent mt-2"></div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { step: '01', title: 'Intake & Normen', desc: 'Vaststellen belastingklassen, gevolgklasse, Eurocodes' },
                  { step: '02', title: 'Model & Berekening', desc: 'Revit/BIM-model, SCIA Engineer, handberekeningen' },
                  { step: '03', title: 'Interne verificatie', desc: 'Tweede constructeur controleert kernresultaten' },
                  { step: '04', title: 'Rapportage', desc: 'Rekennotitie met traceerbare rekenstappen' },
                  { step: '05', title: 'Externe toetsing', desc: 'Onafhankelijke derde toetst ontwerp (indien vereist)' },
                  { step: '06', title: 'Uitvoering & Nazorg', desc: 'Bereikbaar tijdens bouw voor aanpassingsvragen' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-3 sm:gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-accent text-paper rounded-sm flex items-center justify-center font-mono font-bold text-caption sm:text-body-s shadow-sm">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-base mb-1 text-body-m sm:text-h4">{item.title}</h4>
                      <p className="text-caption sm:text-body-s text-neutral-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Independence Badge */}
              <div 
                className="mt-8 p-4 bg-paper relative overflow-hidden"
                style={{
                  borderLeft: '4px solid #2DBE8B',
                  background: 'linear-gradient(90deg, rgba(45, 190, 139, 0.05) 0%, transparent 100%)',
                }}
              >
                <p className="font-mono text-body-s text-base relative z-10">
                  <strong className="text-success">✓</strong> Onafhankelijkheidsverklaring beschikbaar op aanvraag
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSafety;

