# Bureau Broersma - Sitemap & Information Architecture

## Site Structure Overview

### Primary Navigation (Hoofdnavigatie)
```
Startpagina (Homepage)
├── Diensten (Services)
│   ├── Structureel ontwerp
│   ├── Constructietekeningen & berekeningen
│   ├── Renovatie & verbouw
│   └── Industrieel & logistiek
├── Projecten (Projects)
│   ├── Filter: Type, Jaar, Schaal
│   └── Project detailpagina's
├── Over ons (About Us)
│   ├── Historie & kernwaarden
│   ├── Ons team
│   ├── Onze aanpak
│   └── Carrières & stages
├── Nieuws (News) - Optional
└── Contact (Contact)
```

## Detailed Page Structure

### 1. Startpagina (Homepage)
**URL:** `/`
**Purpose:** Primary landing page with strong first impression

**Sections:**
1. **Hero Section**
   - Full-width background image/video
   - Headline: "Structureel ontwerp. Technische berekeningen. Sinds 1956."
   - Sub-headline: "Bureau Broersma realiseert staal- en betonconstructies voor utiliteit, industrie en logistiek. Meer dan 19.000 projecten gerealiseerd."
   - CTA Primary: "Onze projecten bekijken" → `/projecten`
   - CTA Secondary: "Neem contact op" → `/contact`

2. **Wat we doen** (What we do)
   - Service overview with icons
   - Link to services page

3. **Geselecteerde projecten** (Featured projects)
   - Grid of 3-5 featured projects
   - Project cards with image, title, year
   - Link to projects page

4. **Waarom Bureau Broersma** (Why choose us)
   - Key differentiators:
     - Sinds 1956 (Since 1956)
     - Meer dan 19.000 projecten (19,000+ projects)
     - Modern gereedschap (Modern tools)
     - One-stop specialist

5. **Ons team** (Our team)
   - Management overview
   - Link to about page

6. **Contact** (Contact)
   - Quick contact info
   - Link to contact page

### 2. Diensten (Services)
**URL:** `/diensten`
**Purpose:** Detailed service offerings

**Sub-pages:**
- `/diensten/structureel-ontwerp`
- `/diensten/constructietekeningen-berekeningen`
- `/diensten/renovatie-verbouw`
- `/diensten/industrieel-logistiek`

**Content Structure:**
- Service description
- Technical expertise
- Process overview
- Project examples
- CTA: "Neem contact op"

### 3. Projecten (Projects)
**URL:** `/projecten`
**Purpose:** Portfolio showcase

**Features:**
- Filterable grid (by type, year, scale)
- Project cards with:
  - Image thumbnail
  - Project name
  - Year
  - Short description
  - Client (if public)

**Project Detail Pages:**
**URL:** `/projecten/[project-slug]`
**Content:**
- Hero image gallery
- Project title and details
- Client, year, location
- Project description
- Bureau Broersma's role
- Technical specifications
- Key facts (structure type, materials)
- Back to projects link

### 4. Over ons (About Us)
**URL:** `/over-ons`
**Purpose:** Company information and team

**Sub-sections:**
- **Historie & kernwaarden** (`/over-ons/historie`)
  - Company history since 1956
  - Core values and mission
  - Evolution story (slide rule to Revit)

- **Ons team** (`/over-ons/team`)
  - Management profiles
  - Senior engineers
  - Team photos and bios

- **Onze aanpak** (`/over-ons/aanpak`)
  - Methodology
  - Tools and technology
  - Quality assurance

- **Carrières & stages** (`/over-ons/carrieres`)
  - Job opportunities
  - Internship programs
  - Thesis supervision

### 5. Nieuws (News) - Optional
**URL:** `/nieuws`
**Purpose:** Company updates and insights

**Content:**
- News articles
- Project updates
- Industry insights
- Company announcements

**Article Pages:**
**URL:** `/nieuws/[article-slug]`
**Content:**
- Article title and date
- Article content
- Related articles
- Social sharing

### 6. Contact (Contact)
**URL:** `/contact`
**Purpose:** Contact information and form

**Content:**
- Company address
- Phone and email
- Contact form
- Map integration
- Office hours
- Directions

## URL Structure Guidelines

### URL Patterns
- **Dutch slugs:** Use Dutch words in URLs
- **Hyphens:** Use hyphens for word separation
- **Lowercase:** All URLs in lowercase
- **No special characters:** Avoid accents and special characters

### Examples
```
/ → Startpagina
/diensten → Services overview
/diensten/structureel-ontwerp → Structural design
/projecten → Projects overview
/projecten/logistiek-centrum-den-haag → Project detail
/over-ons → About overview
/over-ons/team → Team page
/contact → Contact page
```

## Navigation Design

### Main Navigation (Desktop)
```
[Logo] [Startpagina] [Diensten ▼] [Projecten] [Over ons ▼] [Contact]
```

### Mobile Navigation
```
[☰ Menu]
├── Startpagina
├── Diensten
│   ├── Structureel ontwerp
│   ├── Constructietekeningen & berekeningen
│   ├── Renovatie & verbouw
│   └── Industrieel & logistiek
├── Projecten
├── Over ons
│   ├── Historie & kernwaarden
│   ├── Ons team
│   ├── Onze aanpak
│   └── Carrières & stages
└── Contact
```

### Footer Navigation
```
Diensten          Projecten        Over ons          Contact
├── Structureel   ├── Utiliteit    ├── Historie      ├── Adres
├── Constructie   ├── Woningbouw   ├── Team          ├── Telefoon
├── Renovatie     ├── Industrie    ├── Aanpak        ├── Email
└── Industrieel   └── Logistiek    └── Carrières     └── Route

© 2025 Bureau Broersma. Alle rechten voorbehouden.
```

## Content Hierarchy

### Information Architecture Principles
1. **User-focused:** Organize by user needs, not company structure
2. **Progressive disclosure:** Show overview first, details on demand
3. **Logical flow:** Services → Projects → About → Contact
4. **Search-friendly:** Clear URLs and navigation
5. **Mobile-first:** Responsive navigation design

### Content Priorities
1. **Primary:** Services, Projects, Contact
2. **Secondary:** About, Team, History
3. **Tertiary:** News, Careers, Detailed service pages

## SEO Considerations

### URL Optimization
- Dutch keywords in URLs
- Descriptive page names
- Consistent structure
- No unnecessary parameters

### Navigation SEO
- Clear hierarchy
- Breadcrumb navigation
- Internal linking strategy
- XML sitemap structure

### Content Organization
- Logical page grouping
- Related content linking
- Clear page purposes
- User journey optimization

## Implementation Notes

### Technical Requirements
- Responsive navigation
- Accessibility compliance
- Fast loading
- SEO optimization
- Analytics tracking

### Content Management
- Easy navigation updates
- Flexible page structure
- SEO-friendly URLs
- User-friendly interface

### Future Considerations
- Scalable structure
- Easy content addition
- Multi-language potential
- Advanced filtering options
