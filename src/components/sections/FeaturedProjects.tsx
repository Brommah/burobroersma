import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  type: string;
  material: string;
  year: string;
  role: string;
  description: string;
  image: string;
  href: string;
}

const featuredProjects: Project[] = [
  {
    title: 'Mercedes-Benz Flagshipstore',
    type: 'Utiliteit',
    material: 'Staal + Glas',
    year: '2019',
    role: 'Hoofdconstructeur',
    description: 'Vier verdiepingen hoge glazen etalage, 6.5 m overstek en 22 m luifel.',
    image: 'https://archello.s3.eu-central-1.amazonaws.com/images/2019/07/23/Den-Haag-Mercedes-Benz-Forepark-30.1563875437.5992.jpg',
    href: '/projecten/mercedes-benz-flagshipstore',
  },
  {
    title: 'Villa Kogelhof',
    type: 'Wonen',
    material: 'Staal + Glas',
    year: '2013',
    role: 'Constructeur',
    description: 'Zwevend glasvolume gedragen door stalen vakwerken. Energie-neutraal ontwerp.',
    image: 'https://paulderuiter.ams3.cdn.digitaloceanspaces.com/resized/main/projecten/_1920xAUTO_crop_center-center_none/kogelhof_0.jpg',
    href: '/projecten/villa-kogelhof',
  },
  {
    title: 'Kaviaarhuis',
    type: 'Wonen + Horeca',
    material: 'Beton + Metselwerk',
    year: '2016',
    role: 'Constructeur',
    description: 'Nieuw hoekgebouw met uitkragende top en maritiem-bestendige gevel.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLQjXJCDYKyWa8HAC20ocr7mTQdGe3yiwtw&s',
    href: '/projecten/kaviaarhuis',
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projecten" className="section-spacing bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <p className="eyebrow mb-4 text-accent">Referenties</p>
          <h2 className="text-h2 text-base mb-6 max-w-2xl">
            Ons werk
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
          <p className="text-body-l text-neutral-400 max-w-3xl mb-4">
            De ervaring strekt zich uit over projecten van elk formaat. Met onze kring van relaties zijn wij in staat ook verregaand gespecialiseerde ontwerpen op functioneringsniveau te berekenen.
          </p>
          <p className="text-body-m text-neutral-400 max-w-3xl">
            We formuleren technisch advies over constructies, haalbaarheid en veiligheid binnen projecten van elke omvang. In samenwerking met gespecialiseerde collega's breiden we het advies graag uit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1 mb-8 sm:mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projecten"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Bekijk alle projecten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group bg-paper border border-neutral-100 hover:border-accent transition-all duration-base overflow-hidden">
      {/* Thumbnail */}
      <Link href={project.href} className="block">
        <div className="relative h-56 sm:h-60 bg-neutral-100 border-b border-neutral-100 overflow-hidden">
          {project.image ? (
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={`https://source.unsplash.com/featured/800x600?construction,engineering,structure&sig=${Math.random()}`}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Metadata Strip */}
        <div className="absolute top-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2 text-caption font-mono text-paper">
            <span 
              className="px-2 py-1 backdrop-blur-sm rounded-sm border border-accent/30"
              style={{ background: 'linear-gradient(135deg, rgba(182, 150, 109, 0.9) 0%, rgba(157, 127, 88, 0.9) 100%)' }}
            >
              {project.type}
            </span>
            <span className="px-2 py-1 bg-base/80 backdrop-blur-sm rounded-sm">
              {project.material}
            </span>
            <span className="px-2 py-1 bg-base/80 backdrop-blur-sm rounded-sm">
              {project.year}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col h-full">
        <Link href={project.href}>
          <h3 className="text-h4 text-base mb-2 group-hover:text-accent transition-colors duration-fast">
            {project.title}
          </h3>
        </Link>
        
        <div 
          className="inline-block px-2 py-1 mb-3 rounded-sm"
          style={{
            background: 'linear-gradient(135deg, #b6966d 0%, #9d7f58 100%)',
          }}
        >
          <p className="text-caption font-mono text-paper uppercase font-semibold">
            {project.role}
          </p>
        </div>

        <p className="text-body-m text-neutral-400 mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        <Link
          href={project.href}
          className="inline-flex items-center gap-2 text-body-s font-semibold text-accent hover:text-accent-hover transition-colors duration-fast group"
        >
          Bekijk project
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedProjects;
