import Link from 'next/link';
import { Phone, Mail, FileText } from 'lucide-react';

interface LeadEngineer {
  name: string;
  title: string;
  since: string;
  email: string;
  phone: string;
  phoneDisplay: string;
}

const leadEngineers: LeadEngineer[] = [
  {
    name: 'ir. Andries Broersma',
    title: 'Directeur',
    since: '1980',
    email: 'a.broersma@bureau-broersma.nl',
    phone: '+31653160124',
    phoneDisplay: '+31 (0)6 5316 0124',
  },
  {
    name: 'ing. Pim Beekink',
    title: 'Directeur',
    since: '1986',
    email: 'p.beekink@bureau-broersma.nl',
    phone: '+31703602907',
    phoneDisplay: '+31 (0)70 360 29 07',
  },
];

const TeamOverview = () => {
  return (
    <section id="team" className="section-spacing bg-paper">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 sm:mb-16">
          <p className="eyebrow mb-4 text-accent">Team</p>
          <h2 className="text-h2 text-base mb-6">
            Mensenwerk
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
          <p className="text-body-l text-neutral-400 max-w-3xl mb-4">
            We streven naar een langdurige relatie met onze participerende werknemers. 
            Velen begonnen bij ons als stagiair aan hun carrière.
          </p>
          <p className="text-body-m text-neutral-400 max-w-3xl">
            Alle leden van het team hebben een aandeel in de resultaten van Broersma Ingenieurs. 
            Zo werken we aan een goed ingespeeld en ervaren samenwerkingsverband, dat profiteert van het delen van expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-1 mb-12 sm:mb-16">
          {leadEngineers.map((engineer, index) => (
            <LeadEngineerCard key={engineer.name} engineer={engineer} index={index} />
          ))}
        </div>

        {/* Supporting Team Info */}
        <div 
          className="border border-accent/30 p-6 sm:p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(182, 150, 109, 0.08) 0%, rgba(231, 234, 238, 0.5) 100%)',
          }}
        >
          <h3 className="text-h3 text-base mb-6">Ondersteunend team</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-4xl font-bold text-accent mb-2 font-mono">8</div>
              <div className="text-body-m text-neutral-400">Constructeurs & Tekenaren</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2 font-mono">35+</div>
              <div className="text-body-m text-neutral-400">Jaar gemiddelde ervaring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2 font-mono">100%</div>
              <div className="text-body-m text-neutral-400">Revit/BIM-gecertificeerd</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface LeadEngineerCardProps {
  engineer: LeadEngineer;
  index: number;
}

const LeadEngineerCard = ({ engineer, index }: LeadEngineerCardProps) => {
  const photoPath = engineer.name.includes('Andries') 
    ? '/images/team/andries-broersma.png'
    : '/images/team/pim-beekink.png';

  return (
    <article className="bg-paper border border-neutral-100 p-6 sm:p-8">
      {/* Header with Photo */}
      <div className="mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <img 
              src={photoPath}
              alt={engineer.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-accent/30"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-h3 text-base mb-2">{engineer.name}</h3>
            <p className="text-body-m text-neutral-400 mb-1">{engineer.title}</p>
            <div 
              className="inline-block px-2 py-0.5 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #b6966d 0%, #9d7f58 100%)',
              }}
            >
              <p className="text-caption font-mono text-paper font-semibold">
                Sinds {engineer.since}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="mb-6">
        <p className="text-body-s text-neutral-400 leading-relaxed">
          {engineer.name.includes('Andries') ? (
            <>
              Na zijn studie Civiele Techniek in Delft begint Andries Broersma in de eerste jaren tachtig bij het ingenieursbureau van zijn vader. 
              Vanaf zijn indiensttreding is hij de drijvende kracht achter een doorlopende modernisering. De tekentafel verdwijnt en niemand werkt nog met een rekenschuif.
              <br /><br />
              Hij volgt nauwgezet alle ontwikkelingen in de sector en wijst telkens weer op de noodzakelijke innovatie van werkwijze en technieken. 
              Het lidmaatschap van vele verenigingen, het begeleiden van studenten en zijn functie binnen de Beroepenveldcommissie van de Haagse Hogeschool inspireren hem nog elke dag.
            </>
          ) : (
            <>
              In 1986 heeft Pim Beekink het degelijke traject LTS, MTS en HTS afgerond. De regelmatige ronde door Den Haag voert telkens over de Groothertoginnelaan. 
              Bij Buro Broersma begint hij zijn carrière, eerst als tekenaar, later als rekenaar.
              <br /><br />
              Nu maakt hij deel uit van de directie waarbij het managen en organiseren op de voorgrond komen te staan. 
              Zijn uitgebreide netwerk stelt hem in staat Bureau Broersma overal te introduceren. Het contact met de klant is hem wel toevertrouwd en hij houdt zich met name bezig met Broersma Bouwadvies.
            </>
          )}
        </p>
      </div>

      {/* Contact CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${engineer.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-base text-paper rounded-md hover:bg-accent hover:text-base transition-all duration-base font-semibold text-body-s sm:text-body-m"
        >
          <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
          <span>Bel mij</span>
        </a>
        <a
          href={`mailto:${engineer.email}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-3 border border-neutral-200 text-base rounded-md hover:border-accent hover:text-accent transition-all duration-base font-semibold text-body-s sm:text-body-m"
        >
          <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
          <span>Mail mij</span>
        </a>
      </div>

      {/* Phone number display */}
      <div className="mt-3 text-center">
        <a
          href={`tel:${engineer.phone}`}
          className="text-caption font-mono text-neutral-300 hover:text-accent transition-colors"
        >
          {engineer.phoneDisplay}
        </a>
      </div>
    </article>
  );
};

export default TeamOverview;
