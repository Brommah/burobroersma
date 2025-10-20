import Link from 'next/link';
import { GraduationCap, Briefcase, ArrowRight, FileUp } from 'lucide-react';

const CareersSection = () => {
  return (
    <section id="carrieres" className="section-spacing bg-paper">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <p className="eyebrow mb-4 text-accent">Carrières</p>
          <h2 className="text-h2 text-base mb-6">
            Stages & vacatures
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light"></div>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-1">
          
          {/* Why Broersma */}
          <div 
            className="border border-accent/30 p-6 sm:p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(182, 150, 109, 0.05) 0%, rgba(231, 234, 238, 0.3) 100%)',
            }}
          >
            <h3 className="text-h3 text-base mb-6">Waarom Broersma?</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-base mb-1">denken • modelleren • rekenen • adviseren</p>
                  <p className="text-body-s text-neutral-400">(ook 'nee' zeggen als het onveilig is)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-base mb-1">Revit/BIM mentor</p>
                  <p className="text-body-s text-neutral-400">Wekelijks 1:1, hands-on begeleiding</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-base mb-1">Verantwoordelijkheid</p>
                  <p className="text-body-s text-neutral-400">Échte projecten vanaf week 1</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1 font-bold text-lg">→</span>
                <div>
                  <p className="font-semibold text-base mb-1">Doorgroei</p>
                  <p className="text-body-s text-neutral-400">70% stagiairs blijft als junior</p>
                </div>
              </li>
            </ul>

            <div 
              className="p-4 bg-paper border-l-4 relative overflow-hidden"
              style={{
                borderLeftColor: '#b6966d',
                background: 'linear-gradient(90deg, rgba(182, 150, 109, 0.08) 0%, transparent 100%)',
              }}
            >
              <p className="text-body-s font-mono text-base">
                <strong className="text-accent">Vergoed:</strong> stages vanaf 6 maanden (€500–800/mnd)
              </p>
            </div>
          </div>

          {/* Stage */}
          <div className="bg-paper border border-neutral-100 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-base" />
              <h3 className="text-h3 text-base">Stage</h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="eyebrow mb-2 text-accent">Vereisten</p>
                <ul className="space-y-2 text-body-s text-neutral-400">
                  <li>• HBO/WO Bouwkunde of Civiele Techniek</li>
                  <li>• Beschikbaar min. 6 maanden</li>
                  <li>• Basis Revit/AutoCAD kennis (gewenst)</li>
                  <li>• Affiniteit met constructies</li>
                </ul>
              </div>

              <div>
                <p className="eyebrow mb-3 text-accent">Proces</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { step: '1', label: 'Solliciteer' },
                    { step: '2', label: 'Intake' },
                    { step: '3', label: 'Meeloopdag' },
                    { step: '4', label: 'Stageplan' },
                    { step: '5', label: 'Start' },
                  ].map((item) => (
                    <div key={item.step} className="flex flex-col items-center gap-2 text-center">
                      <span className="w-8 h-8 bg-accent/10 border border-accent/30 rounded-sm flex items-center justify-center text-caption font-mono font-bold text-accent">
                        {item.step}
                      </span>
                      <span className="text-caption text-neutral-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/stages-vacatures#stage"
                className="btn btn-secondary w-full justify-center group"
              >
                <FileUp className="w-5 h-5" />
                Solliciteer stage
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-100">
              <p className="text-caption font-mono text-neutral-300">
                Responstijd: binnen 3 werkdagen
              </p>
            </div>
          </div>

          {/* Junior functies */}
          <div className="bg-paper border border-neutral-100 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-base" />
              <h3 className="text-h3 text-base">Junior functies</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-base mb-2">Constructeur</h4>
                <ul className="space-y-1 text-body-s text-neutral-400 mb-4">
                  <li>• Staal/Beton berekeningen</li>
                  <li>• Revit modellering</li>
                  <li>• Eurocode-conform</li>
                  <li>• 1–3 jaar ervaring</li>
                </ul>
                <Link
                  href="/stages-vacatures#constructeur"
                  className="inline-flex items-center gap-2 text-body-s font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  Meer info
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <h4 className="font-semibold text-base mb-2">Revit-tekenaar</h4>
                <ul className="space-y-1 text-body-s text-neutral-400 mb-4">
                  <li>• Detaillering & tekeningen</li>
                  <li>• BIM-coördinatie</li>
                  <li>• Dynamo scripting (pre)</li>
                  <li>• 0–2 jaar ervaring</li>
                </ul>
                <Link
                  href="/stages-vacatures#tekenaar"
                  className="inline-flex items-center gap-2 text-body-s font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  Meer info
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Link
                href="/stages-vacatures#open-sollicitatie"
                className="btn btn-secondary w-full justify-center group"
              >
                <FileUp className="w-5 h-5" />
                Open sollicitatie
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-100">
              <p className="text-caption font-mono text-neutral-300">
                Salaris: marktconform + doorgroeimogelijkheden
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-h3 sm:text-h2 text-neutral-400 mb-6 text-center">
            Vragen over carrières bij Bureau Broersma?
          </p>
          <Link
            href="/contact"
            className="btn btn-primary"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;

