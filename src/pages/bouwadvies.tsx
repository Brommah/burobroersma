import { NextPage } from 'next';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { ArrowRight, Building, FileText, Users, CheckCircle, Calendar, Phone } from 'lucide-react';

const BouwadviesPage: NextPage = () => {
  return (
    <>
      <DefaultSeo
        title="Bouwadvies - Constructief advies en technische ondersteuning"
        description="Onafhankelijk bouwadvies voor complexe projecten. Van haalbaarheidsstudies tot uitvoeringsbegeleiding. Technische expertise sinds 1956."
        canonical="https://www.bureau-broersma.nl/bouwadvies"
        openGraph={{
          type: 'website',
          locale: 'nl_NL',
          url: 'https://www.bureau-broersma.nl/bouwadvies',
          siteName: 'Bureau Broersma',
          title: 'Bouwadvies - Constructief advies en technische ondersteuning',
          description: 'Onafhankelijk bouwadvies voor complexe projecten. Van haalbaarheidsstudies tot uitvoeringsbegeleiding.',
          images: [
            {
              url: 'https://www.bureau-broersma.nl/images/og-bouwadvies.jpg',
              width: 1200,
              height: 630,
              alt: 'Bouwadvies - Constructief advies',
            },
          ],
        }}
      />
      <Head>
        <link rel="canonical" href="https://www.bureau-broersma.nl/bouwadvies" />
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
                    Bouwadvies
                  </p>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-heavy text-base mb-6">
                  <span className="text-accent">Onafhankelijk bouwadvies</span>
                  <br />
                  <span className="text-neutral-500">voor complexe projecten</span>
                </h1>
                
                <p className="text-body-l sm:text-h4 max-w-prose leading-relaxed text-neutral-500 mb-8">
                  Van haalbaarheidsstudies tot uitvoeringsbegeleiding. Onafhankelijk advies over constructies, materialen en uitvoeringsmethoden voor optimale resultaten.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="btn btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Plan adviesgesprek</span>
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

        {/* Services Section */}
        <section className="section-spacing bg-neutral-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <p className="eyebrow mb-4 text-accent">Diensten</p>
              <h2 className="text-h2 text-base mb-6 max-w-2xl">
                Bouwadvies en technische ondersteuning
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
              <p className="text-body-l text-neutral-400 max-w-3xl">
                Het ingenieursbureau adviseert over technieken, materialen en methodieken die volgens constructieplan zullen worden toegepast in de bouw.
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
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h4 text-base">Haalbaarheidsstudies</h3>
                </div>
                <p className="text-body-m text-neutral-400 mb-4">
                  Technische haalbaarheidsstudies voor complexe projecten. Analyse van constructieve mogelijkheden en beperkingen.
                </p>
                <ul className="space-y-2 text-body-s text-neutral-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Constructieve haalbaarheid
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Materiaalkeuze advies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Kostenraming
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
                    <Building className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h4 text-base">Uitvoeringsbegeleiding</h3>
                </div>
                <p className="text-body-m text-neutral-400 mb-4">
                  Technische begeleiding tijdens de uitvoering. Controle op kwaliteit en naleving van specificaties.
                </p>
                <ul className="space-y-2 text-body-s text-neutral-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Kwaliteitscontrole
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Technische ondersteuning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Probleemoplossing
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
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h4 text-base">Projectmanagement</h3>
                </div>
                <p className="text-body-m text-neutral-400 mb-4">
                  Coördinatie van technische aspecten binnen complexe bouwprojecten. Samenwerking met alle betrokken partijen.
                </p>
                <ul className="space-y-2 text-body-s text-neutral-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Technische coördinatie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Stakeholder management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Risicobeheer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="section-spacing bg-paper">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <p className="eyebrow mb-4 text-accent">Expertise</p>
              <h2 className="text-h2 text-base mb-6 max-w-2xl">
                Gespecialiseerde kennisgebieden
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
              <p className="text-body-l text-neutral-400 max-w-3xl">
                Met onze kring van relaties zijn wij in staat ook verregaand gespecialiseerde ontwerpen op functioneringsniveau te berekenen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-neutral-100 border border-neutral-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-h4 text-base mb-2">Industrie</h3>
                <p className="text-body-s text-neutral-400">
                  Complexe industriële installaties en productiefaciliteiten met zware belastingen.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-100 border border-neutral-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-h4 text-base mb-2">Logistiek</h3>
                <p className="text-body-s text-neutral-400">
                  Distributiecentra, magazijnen en logistieke complexen met grote overspanningen.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-100 border border-neutral-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-h4 text-base mb-2">Utiliteit</h3>
                <p className="text-body-s text-neutral-400">
                  Kantoren, winkels en andere utiliteitsgebouwen met specifieke eisen.
                </p>
              </div>

              <div className="text-center p-6 bg-neutral-100 border border-neutral-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-h4 text-base mb-2">Wonen</h3>
                <p className="text-body-s text-neutral-400">
                  Woningbouwprojecten van eengezinswoningen tot hoogbouwcomplexen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-spacing bg-neutral-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <p className="eyebrow mb-4 text-accent">Aanpak</p>
              <h2 className="text-h2 text-base mb-6 max-w-2xl">
                Gestructureerde adviesaanpak
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
              <p className="text-body-l text-neutral-400 max-w-3xl">
                Systematische aanpak met duidelijke fasen en deliverables. Transparante communicatie en regelmatige rapportage.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">1</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Inventarisatie</h3>
                <p className="text-body-s text-neutral-400">
                  Analyse van projecteisen, randvoorwaarden en stakeholders. Opstellen van adviesplan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">2</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Analyse</h3>
                <p className="text-body-s text-neutral-400">
                  Technische analyse van constructieve mogelijkheden en beperkingen. Materiaalkeuze en uitvoeringsmethoden.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">3</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Advies</h3>
                <p className="text-body-s text-neutral-400">
                  Uitwerking van concrete adviezen en aanbevelingen. Rapportage en presentatie van resultaten.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-h3 font-heavy text-accent">4</span>
                </div>
                <h3 className="text-h4 text-base mb-2">Implementatie</h3>
                <p className="text-body-s text-neutral-400">
                  Ondersteuning bij implementatie van adviezen. Begeleiding tijdens uitvoering en nazorg.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-spacing bg-paper">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mb-12 sm:mb-16">
              <p className="eyebrow mb-4 text-accent">Voordelen</p>
              <h2 className="text-h2 text-base mb-6 max-w-2xl">
                Waarom kiezen voor ons bouwadvies?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
              <p className="text-body-l text-neutral-400 max-w-3xl">
                Onafhankelijk advies gebaseerd op 70+ jaar ervaring en 19.000+ gerealiseerde projecten.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-100 border border-neutral-100 p-6">
                <h3 className="text-h4 text-base mb-3">Onafhankelijkheid</h3>
                <p className="text-body-m text-neutral-400">
                  Geen commerciële belangen bij leveranciers of aannemers. Objectief advies in het belang van het project.
                </p>
              </div>

              <div className="bg-neutral-100 border border-neutral-100 p-6">
                <h3 className="text-h4 text-base mb-3">Ervaring</h3>
                <p className="text-body-m text-neutral-400">
                  70+ jaar ervaring in constructieve engineering. Kennis van traditionele en moderne bouwmethoden.
                </p>
              </div>

              <div className="bg-neutral-100 border border-neutral-100 p-6">
                <h3 className="text-h4 text-base mb-3">Expertise</h3>
                <p className="text-body-m text-neutral-400">
                  Gespecialiseerde kennis van complexe constructies en uitdagende projecten. Up-to-date met laatste ontwikkelingen.
                </p>
              </div>

              <div className="bg-neutral-100 border border-neutral-100 p-6">
                <h3 className="text-h4 text-base mb-3">Praktijkgericht</h3>
                <p className="text-body-m text-neutral-400">
                  Adviezen gebaseerd op praktische uitvoerbaarheid en realistische kosten. Focus op haalbare oplossingen.
                </p>
              </div>

              <div className="bg-neutral-100 border border-neutral-100 p-6">
                <h3 className="text-h4 text-base mb-3">Samenwerking</h3>
                <p className="text-body-m text-neutral-400">
                  Intensieve samenwerking met alle betrokken partijen. Transparante communicatie en regelmatige rapportage.
                </p>
              </div>

              <div className="bg-neutral-100 border border-neutral-100 p-6">
                <h3 className="text-h4 text-base mb-3">Nazorg</h3>
                <p className="text-body-m text-neutral-400">
                  Continue ondersteuning tijdens en na de uitvoering. Beantwoording van vragen en oplossen van problemen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-neutral-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-paper border border-neutral-100 p-8 sm:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-h2 text-base mb-4">
                Heeft u een complex bouwproject?
              </h2>
              <p className="text-body-l text-neutral-400 mb-8 max-w-2xl mx-auto">
                Plan een adviesgesprek met onze experts. We bespreken uw uitdagingen en mogelijkheden voor technische ondersteuning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Plan adviesgesprek</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Direct contact</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BouwadviesPage;
