import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Sinds 1956',
    description: 'Meer dan 70 jaar ervaring in structureel ontwerp en constructieberekeningen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: '19.000+ projecten',
    description: 'Een indrukwekkend portfolio van gerealiseerde projecten in diverse sectoren.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Modern gereedschap',
    description: 'Gebruik van de nieuwste technologieën zoals Revit, BIM en geavanceerde berekeningssoftware.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'One-stop specialist',
    description: 'Van concept tot realisatie: complete begeleiding van uw constructieproject.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Waarom Bureau Broersma?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Met meer dan 70 jaar ervaring en een indrukwekkend portfolio van 
            gerealiseerde projecten, is Bureau Broersma uw betrouwbare partner 
            voor structureel ontwerp en constructieberekeningen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary-950 shadow-soft">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg p-8 shadow-soft"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Van tekentafel naar Revit
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sinds de oprichting in 1956 heeft Bureau Broersma een constante 
                evolutie doorgemaakt. Van de traditionele tekentafel en rekenliniaal 
                naar moderne 3D-modellering en geavanceerde berekeningssoftware. 
                Deze ontwikkeling heeft ons in staat gesteld om steeds complexere 
                en innovatieve constructies te realiseren.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Onze ervaring en moderne aanpak maken ons de ideale partner voor 
                projecten van elke omvang en complexiteit.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-950 mb-2">70+</div>
                  <div className="text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-950 mb-2">19.000+</div>
                  <div className="text-sm text-gray-600">Projecten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-950 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Te tevredenheid</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-950 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Beschikbaar</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
