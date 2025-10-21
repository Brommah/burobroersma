import Link from 'next/link';
import { ArrowRight, Grid3x3, Calculator } from 'lucide-react';

interface Service {
  title: string;
  valueProp: string;
  icon: React.ReactNode;
  process: string[];
  href: string;
}

const services: Service[] = [
  {
    title: 'Broersma Ingenieurs',
    valueProp: 'Directe lijn met constructeurs en tekenaars. BIM/Revit-first, Eurocode-conform en peer-reviewed ontwerpkeuzes.',
    icon: <Calculator className="w-6 h-6" />,
    process: [],
    href: '/ingenieurs',
  },
  {
    title: 'Bouwadvies',
    valueProp: 'Onafhankelijk bouwadvies voor complexe projecten. Van haalbaarheidsstudies tot uitvoeringsbegeleiding en technische ondersteuning.',
    icon: <Grid3x3 className="w-6 h-6" />,
    process: [],
    href: '/bouwadvies',
  },
];

const ServicesOverview = () => {
  return (
    <section id="diensten" className="section-spacing bg-paper">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <p className="eyebrow mb-4 text-accent">Diensten</p>
          <h2 className="text-h2 text-base mb-6 max-w-2xl">
            Technisch Onderbouwen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
          <p className="text-body-l text-neutral-400 max-w-3xl mb-4">
            Het ingenieursbureau adviseert over technieken, materialen en methodieken die volgens constructieplan zullen worden toegepast in de bouw.
          </p>
          <p className="text-body-m text-neutral-400 max-w-3xl">
            Van funderingen tot alle dragende constructies in staal en beton vragen om berekening van draagkracht tot levensduur, ook onder extreme omstandigheden.
          </p>
        </div>

        {/* Two Organization Cards */}
        <div className="grid sm:grid-cols-2 gap-1 max-w-4xl">
          {services.map((service) => (
            <ServiceTile key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceTileProps {
  service: Service;
}

const ServiceTile = ({ service }: ServiceTileProps) => {
  return (
    <div className="group relative bg-paper border border-neutral-100 p-6 sm:p-8 hover:border-accent transition-all duration-base">
      {/* Icon & Title */}
      <div className="flex items-start gap-4 mb-4">
        <div 
          className="p-3 text-base rounded-md transition-all duration-base"
          style={{
            background: 'linear-gradient(135deg, #E7EAEE 0%, #f5f5f5 100%)',
          }}
        >
          <div className="group-hover:text-accent transition-colors duration-base">
            {service.icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-h3 text-base mb-2">{service.title}</h3>
        </div>
      </div>

      {/* Value Proposition */}
      <p className="text-body-m text-neutral-400 mb-6 leading-relaxed">
        {service.valueProp}
      </p>

      {/* Link */}
      <Link
        href={service.href}
        className="inline-flex items-center gap-2 text-body-m font-semibold text-accent hover:text-accent-hover transition-colors duration-fast group"
      >
        Meer informatie
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServicesOverview;
