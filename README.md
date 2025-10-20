# Bureau Broersma Website

Modern, professional website for Bureau Broersma - Dutch structural engineering consultancy established in 1956.

## Project Overview

This is a complete redesign of the Bureau Broersma website with the following objectives:

- **Dutch-only website** (removing English version)
- **Remove BioCoaching Consultancy** sub-brand
- **Modern design** with strong hero section
- **Professional engineering consultancy** positioning
- **Heritage emphasis** (since 1956, 19,000+ projects)
- **Performance optimized** (>90 Lighthouse score)
- **Accessibility compliant** (WCAG AA)
- **SEO optimized** for Dutch market

## Tech Stack

- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Forms:** React Hook Form with Zod validation
- **SEO:** Next SEO
- **Testing:** Jest + Testing Library
- **Linting:** ESLint + Prettier
- **Deployment:** Vercel

## Key Features

### Design System
- Modern typography (Work Sans)
- Professional color palette
- Responsive design (mobile-first)
- Accessibility compliant
- Performance optimized

### Content Structure
- **Homepage:** Hero section, services overview, featured projects
- **Services:** Structural design, construction drawings, calculations
- **Projects:** Portfolio with filtering and detailed case studies
- **About:** Company history, team, methodology
- **Contact:** Contact form, location, map

### Technical Features
- Image optimization (WebP, lazy loading)
- Font optimization (preload, font-display: swap)
- SEO optimization (meta tags, schema markup)
- Security headers
- Performance monitoring

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bureau-broersma-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run format` - Format code with Prettier
- `npm run analyze` - Analyze bundle size

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Basic UI components
│   ├── layout/        # Layout components
│   └── sections/       # Page sections
├── pages/              # Next.js pages
├── styles/             # Global styles
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── data/               # Static data
├── hooks/              # Custom React hooks
└── utils/              # Helper functions
```

## Content Strategy

### Key Messages
- **Heritage + Innovation:** "Van tekentafel naar Revit sinds 1956"
- **Scale:** "Meer dan 19.000 projecten gerealiseerd"
- **Expertise:** "Staal- en betonconstructies voor elke uitdaging"
- **Quality:** "Technische precisie en betrouwbare oplossingen"

### Content Removal
- BioCoaching Consultancy division
- English language content
- Bio consultancy references

### Content Enhancement
- Strong hero section with clear value proposition
- Detailed project case studies
- Professional team presentations
- Service descriptions with technical expertise

## Performance Targets

- **Lighthouse Performance:** >90
- **Page Load Time:** <3 seconds
- **Mobile Usability:** 100%
- **Accessibility Score:** >95
- **SEO Score:** >95

## SEO Strategy

### Dutch Market Focus
- Dutch meta titles and descriptions
- Dutch URL structure
- Local SEO optimization
- Schema markup for organization

### Technical SEO
- Clean URL structure
- XML sitemap
- Robots.txt
- Image optimization
- Core Web Vitals optimization

## Accessibility

### WCAG AA Compliance
- Color contrast ratios
- Keyboard navigation
- Screen reader compatibility
- Focus management
- Alternative text for images

### Implementation
- Semantic HTML structure
- ARIA labels and roles
- Focus indicators
- Skip navigation links
- High contrast mode support

## Deployment

### Vercel Deployment
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Environment Variables
- `SITE_URL` - Production site URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `CONTACT_EMAIL` - Contact form email

## Contributing

### Development Workflow
1. Create feature branch
2. Make changes
3. Run tests and linting
4. Create pull request
5. Code review
6. Merge to main

### Code Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Jest for testing
- Conventional commits

## License

MIT License - see LICENSE file for details.

## Contact

For questions about this project, contact:
- **Email:** info@bureau-broersma.nl
- **Phone:** +31 (0)70 360 29 07
- **Address:** Groothertoginnelaan 33, 2517 EB Den Haag

---

**Bureau Broersma** - Structureel ontwerp en technische berekeningen sinds 1956.
