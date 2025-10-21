import { NextPage } from 'next';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ArrowRight, Calculator, Grid3x3, Shield, CheckCircle, Users, Calendar } from 'lucide-react';

const IngenieursPage: NextPage = () => {
  return (
    <>
      <DefaultSeo
        title="Broersma Ingenieurs - Constructieve engineering en berekeningen"
        description="Directe lijn met constructeurs en tekenaars. BIM/Revit-first, Eurocode-conform en peer-reviewed ontwerpkeuzes. Constructieve engineering sinds 1956."
        canonical="https://www.bureau-broersma.nl/ingenieurs"
        openGraph={{
          type: 'website',
          locale: 'nl_NL',
          url: 'https://www.bureau-broersma.nl/ingenieurs',
          siteName: 'Bureau Broersma',
          title: 'Broersma Ingenieurs - Constructieve engineering',
          description: 'Directe lijn met constructeurs en tekenaars. BIM/Revit-first, Eurocode-conform en peer-reviewed ontwerpkeuzes.',
          images: [
            {
              url: 'https://www.bureau-broersma.nl/images/og-ingenieurs.jpg',
              width: 1200,
              height: 630,
              alt: 'Broersma Ingenieurs - Constructieve engineering',
            },
          ],
        }}
      />
      <Head>
        <link rel="canonical" href="https://www.bureau-broersma.nl/ingenieurs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-paper border-b border-neutral-100 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, #0B0D0F 0px, #0B0D0F 2px, transparent 2px, transparent 12px),
                repeating-linear-gradient(-45deg, #0B0D0F 0px, #0B0D0F 2px, transparent 2px, transparent 12px)
              `,
            }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="py-16 sm:py-24">
              <div className="max-w-4xl">
                <div 
                  className="inline-block px-3 py-1 border border-accent/30 rounded-sm mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #b6966d 0%, #9d7f58 100%)',
                  }}
                >
                  <p className="text-caption sm:text-body-s font-mono uppercase tracking-wider text-paper font-semibold">
                    Broersma Ingenieurs
                  </p>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-heavy text-base mb-6">
                  <span className="text-accent">Constructieve engineering</span>
                  <br />
                  <span className="text-neutral-500">voor elke uitdaging</span>
                </h1>
                
                <p className="text-body-l sm:text-h4 max-w-prose leading-relaxed text-neutral-500 mb-8">
                  Directe lijn met constructeurs en tekenaars. BIM/Revit-first, Eurocode-conform en peer-reviewed ontwerpkeuzes voor optimale veiligheid en uitvoerbaarheid.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="btn btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Plan technisch overleg</span>
                  </Link>
                  <Link
                    href="/projecten"
                    className="btn btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    <span>Bekijk referentieprojecten</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-spacing bg-neutral-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <p className="eyebrow mb-4 text-accent">Expertise</p>
              <h2 className="text-h2 text-base mb-6 max-w-2xl">
                Constructieve berekeningen en engineering
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
              <p className="text-body-l text-neutral-400 max-w-3xl">
                Van funderingen tot alle dragende constructies in staal en beton vragen om berekening van draagkracht tot levensduur, ook onder extreme omstandigheden.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-paper border border-neutral-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-2 text-base rounded-md"
                    style={{
                      background: 'linear-gradient(135deg, #E7EAEE 0%, #f5f5f5 100%)',
                    }}
                  >
                    <Calculator className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h4 text-base">Constructieberekeningen</h3>
                </div>
                <p className="text-body-m text-neutral-400 mb-4">
                  Eurocode-conforme berekeningen voor staal- en betonconstructies. Van eenvoudige liggerberekeningen tot complexe ruimtelijke constructies.
                </p>
                <ul className="space-y-2 text-body-s text-neutral-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Staalconstructies (EN 1993)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Betonconstructies (EN 1992)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Funderingen (EN 1997)
                  </li>
                </ul>
              </div>

              <div className="bg-paper border border-neutral-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-2 text-base rounded-md"
                    style={{
                      background: 'linear-gradient(135deg, #E7EAEE 0%, #f5f5f5 100%)',
                    }}
                  >
                    <

Grid3x3 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h4 text-base">BIM/Revit Engineering</h3>
                </div>
                <p className="text-body-m text-neutral-400 mb-4">
                  Volledige BIM-integratie met Revit-modellen. 3D-constructieberekeningen en directe koppeling tussen berekening en tekening.
                </p>
                <ul className="space-y-2 text-body-s text-neutral-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Revit-structurele modellen
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Robot Structural Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Tekla Structures
                  </li>
                </ul>
              </div>

              <div className="bg-paper border border-neutral-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="p-2 text-base rounded-md"
                    style={{
                      background: 'linear-gradient(135deg, #E7EAEE 0%, #f5f5f5 100%)',
                    }}
                  >
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h4 text-base">Veiligheidsberekeningen</h3>
                </div>
                <p className="text-body-m text-neutral-400 mb-4">
                  Peer-reviewed ontwerpkeuzes en veiligheidsanalyses voor kritieke constructies. Brandwerendheid, seismische belastingen en extreme belastingen.
                </p>
                <ul className="space-y-2 text-body-s text-neutral-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Brandwerendheid (EN 1991-1-2)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Seismische belastingen
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Extreme belastingen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-spacing bg-paper">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <p className="eyebrow mb-4 text-accent">Aanpak</p>
              <h2 className="text-h2 text-base mb-6 max-w-2xl">
                Van concept tot uitvoering
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
              <p className="text-body-l text-neutral-400 max-w-3xl">
                Gestructureerde aanpak met duidelijke fasen en deliverables. Directe communicatie met het projectteam voor optimale resultaten.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">1</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Projectanalyse</h3>
                <p className="text-body-s text-neutral-400">
                  Inventarisatie van eisen, belastingen en randvoorwaarden. Opstellen van constructief concept.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">2</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Berekening</h3>
                <p className="text-body-s text-neutral-400">
                  Eurocode-conforme berekeningen met moderne software. Peer-review en verificatie van resultaten.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">3</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Detailing</h3>
                <p className="text-body-s text-neutral-400">
                  Uitwerking van constructiedetails en aansluitingen. BIM-integratie en tekeningproductie.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">4</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Ondersteuning</h3>
                <p className="text-body-s text-neutral-400">
                  Begeleiding tijdens uitvoering en beantwoording van vragen. Nazorg en onderhoudsadvies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-spacing bg-neutral-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <p className="eyebrow mb-4 text-accent">Team</p>
              <h2 className="text-h2 text-base mb-6 max-w-2xl">
                Ervaren constructeurs
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
              <p className="text-body-l text-neutral-400 max-w-3xl">
                Ons team van ervaren constructeurs heeft de kennis en ervaring om complexe constructieve uitdagingen op te lossen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-paper border border-neutral-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Users className="w-8 h-8 text-neutral-400" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-base">Constructeurs</h3>
                    <p className="text-body-s text-neutral-400">Ervaren ingenieurs</p>
                  </div>
                </div>
                <p className="text-body-m text-neutral-400">
                  Gespecialiseerd in staal- en betonconstructies. Up-to-date kennis van Eurocodes en moderne berekeningssoftware.
                </p>
              </div>

              <div className="bg-paper border border-neutral-100 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Calculator className="w-8 h-8 text-neutral-400" />
                  </div>
                  <div>
                    <h3 className="text-h4 text-base">Tekenaren</h3>
                    <p className="text-body-s text-neutral-400">BIM-specialisten</p>
                  </div>
                </div>
                <p className="text-body-m text-neutral-400">
                  Expert in Revit, Tekla Structures en andere BIM-software. Koppeling tussen berekening en tekening.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-paper">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-neutral-100 border border-neutral-100 p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-h2 text-base mb-4">
                Klaar om uw project te bespreken?
              </h2>
              <p className="text-body-l text-neutral-400 mb-8 max-w-2xl mx-auto">
                Plan een technisch overleg met onze constructeurs. We bespreken uw uitdagingen en mogelijkheden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Plan technisch overleg</span>
                </Link>
                <Link
                  href="/projecten"
                  className="btn btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <span>Bekijk referentieprojecten</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IngenieursPage;
