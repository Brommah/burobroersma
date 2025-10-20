/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.bureau-broersma.nl',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://www.bureau-broersma.nl/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transform for Dutch URLs
    const dutchPaths = {
      '/services': '/diensten',
      '/projects': '/projecten',
      '/about': '/over-ons',
      '/contact': '/contact',
    };

    const dutchPath = dutchPaths[path] || path;

    return {
      loc: dutchPath,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const result = [];

    // Add service pages
    const services = [
      'structureel-ontwerp',
      'constructietekeningen-berekeningen',
      'renovatie-verbouw',
      'industrieel-logistiek',
    ];

    services.forEach((service) => {
      result.push({
        loc: `/diensten/${service}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    // Add about pages
    const aboutPages = ['historie', 'team', 'aanpak', 'carrieres'];
    aboutPages.forEach((page) => {
      result.push({
        loc: `/over-ons/${page}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
