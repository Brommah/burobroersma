import { ExternalLink, Newspaper } from 'lucide-react';

interface ProofProject {
  title: string;
  locationYear: string;
  description: string;
  href: string;
  image?: string;
}


const projects: ProofProject[] = [
  {
    title: 'Villa Kogelhof',
    locationYear: 'Kamperland · 2013',
    description:
      'Energie-neutrale villa (Paul de Ruiter Architects). Zwevend glasvolume gedragen door stalen vakwerken. Constructeur: Bureau Broersma.',
    href: 'https://eumiesawards.com',
    image: 'https://source.unsplash.com/featured/800x600?villa,glass,architecture&sig=11',
  },
  {
    title: 'Nautilus optop-appartementen',
    locationYear: 'Scheveningen · 2006',
    description:
      'Lichte “skybox” penthouses boven havenpakhuisbebouwing (Archipelontwerpers). Constructief ontwerp door Broersma.',
    href: 'https://e-architect.com',
    image: 'https://source.unsplash.com/featured/800x600?steel,bridge,structure&sig=12',
  },
  {
    title: 'Kaviaarhuis',
    locationYear: 'Scheveningen · 2016',
    description:
      'Nieuw hoekgebouw met luxe appartementen en horeca. Uitkragende top en maritiem-bestendige gevel. Constructeur: Broersma.',
    href: 'https://archipelontwerpers.nl',
    image: 'https://source.unsplash.com/featured/800x600?facade,brick,architecture&sig=13',
  },
  {
    title: 'Mercedes-Benz Flagshipstore',
    locationYear: 'Forepark Den Haag · 2019',
    description:
      'Vier verdiepingen hoge glazen etalage. Staal- en glasconstructies met 6.5 m overstek en 22 m luifel. Hoofdconstructeur: Broersma.',
    href: 'https://architizer.com',
    image: 'https://source.unsplash.com/featured/800x600?glass,steel,showroom&sig=14',
  },
  {
    title: 'Toren van Oud (transformatie)',
    locationYear: 'Den Haag · 2018–2020',
    description:
      'Iconische hoogbouw getransformeerd tot 38 short-stay appartementen. Nieuwe gevel en draagstructuur. Hoofdconstructeur: Broersma.',
    href: 'https://haac.nu',
    image: 'https://source.unsplash.com/featured/800x600?tower,architecture,city&sig=15',
  },
];


const SocialProof = () => {
  return (
    <section id="erkenningen" className="section-spacing bg-paper border-y border-neutral-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <p className="eyebrow mb-4 text-accent">Projecten & erkenningen</p>
          <h2 className="text-h2 text-base mb-6 max-w-2xl">Bewijs van kwaliteit</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light"></div>
        </div>

        {/* Projects grid */}
        <div className="mb-10 sm:mb-14">
          <h3 className="text-h3 text-base mb-4 flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-accent" /> Projecten
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {projects.map((p) => (
              <article key={p.title} className="bg-paper border border-neutral-100 overflow-hidden">
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="h-44 sm:h-48 bg-neutral-100 border-b border-neutral-100 overflow-hidden">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-300">{p.title}</div>
                    )}
                  </div>
                  <div className="p-4 sm:p-5">
                    <h4 className="font-semibold text-base mb-1 text-h4">{p.title}</h4>
                    <p className="text-caption font-mono text-neutral-400 mb-2">{p.locationYear}</p>
                    <p className="text-body-s text-neutral-400 leading-relaxed">{p.description}</p>
                    <span className="inline-flex items-center gap-1 text-body-s font-semibold text-accent mt-3">
                      Bekijk case <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Awards and media removed per request */}
      </div>
    </section>
  );
};

export default SocialProof;


