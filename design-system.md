# Bureau Broersma - Design System & Visual Identity

## Design Philosophy

### Core Principles
- **Professional:** Technical expertise and reliability
- **Modern:** Contemporary engineering solutions
- **Heritage:** 70+ years of experience
- **Trustworthy:** Established reputation
- **Accessible:** Clear communication and usability

### Visual Identity
- **Clean & Minimal:** Focus on content and functionality
- **Technical Precision:** Reflecting engineering accuracy
- **Professional Credibility:** Building trust and confidence
- **Modern Heritage:** Combining tradition with innovation

## Typography System

### Font Selection
**Primary Font:** Work Sans
- **Rationale:** Modern, clean, excellent readability
- **Dutch Support:** Full character set including accents
- **Web Performance:** Optimized for web delivery
- **Versatility:** Works for headings and body text

**Fallback Fonts:**
```css
font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Typography Scale
```css
:root {
  /* Font Sizes */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */
  
  /* Line Heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

### Typography Usage
**Headings:**
- **H1:** `font-size: 3rem; font-weight: 700; line-height: 1.25`
- **H2:** `font-size: 2.25rem; font-weight: 600; line-height: 1.3`
- **H3:** `font-size: 1.875rem; font-weight: 600; line-height: 1.35`
- **H4:** `font-size: 1.5rem; font-weight: 500; line-height: 1.4`
- **H5:** `font-size: 1.25rem; font-weight: 500; line-height: 1.45`
- **H6:** `font-size: 1.125rem; font-weight: 500; line-height: 1.5`

**Body Text:**
- **Large:** `font-size: 1.125rem; font-weight: 400; line-height: 1.75`
- **Regular:** `font-size: 1rem; font-weight: 400; line-height: 1.6`
- **Small:** `font-size: 0.875rem; font-weight: 400; line-height: 1.5`

## Color Palette

### Primary Colors
```css
:root {
  /* Primary Brand Colors */
  --color-primary: #1a365d;        /* Dark blue - trust, stability */
  --color-primary-light: #2c5282;   /* Lighter blue */
  --color-primary-dark: #153450;   /* Darker blue */
  
  /* Accent Colors */
  --color-accent: #d69e2e;         /* Gold - heritage, quality */
  --color-accent-light: #f6e05e;   /* Light gold */
  --color-accent-dark: #b7791f;    /* Dark gold */
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-gray-50: #f7fafc;
  --color-gray-100: #edf2f7;
  --color-gray-200: #e2e8f0;
  --color-gray-300: #cbd5e0;
  --color-gray-400: #a0aec0;
  --color-gray-500: #718096;
  --color-gray-600: #4a5568;
  --color-gray-700: #2d3748;
  --color-gray-800: #1a202c;
  --color-gray-900: #171923;
  
  /* Status Colors */
  --color-success: #38a169;
  --color-warning: #d69e2e;
  --color-error: #e53e3e;
  --color-info: #3182ce;
}
```

### Color Usage Guidelines
- **Primary Blue:** Headings, navigation, primary CTAs
- **Accent Gold:** Highlights, secondary CTAs, accents
- **Gray Scale:** Body text, backgrounds, borders
- **White:** Backgrounds, contrast elements

## Hero Section Design

### Hero Section Specifications
**Layout:** Full-width, full-height viewport
**Background:** High-quality project image with overlay
**Content:** Centered text with clear hierarchy
**CTAs:** Prominent buttons with clear actions

### Hero Section Code Structure
```html
<section class="hero">
  <div class="hero-background">
    <img src="hero-image.jpg" alt="Bureau Broersma project" />
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">Structureel ontwerp. Technische berekeningen. Sinds 1956.</h1>
    <p class="hero-subtitle">Bureau Broersma realiseert staal- en betonconstructies voor utiliteit, industrie en logistiek. Meer dan 19.000 projecten gerealiseerd.</p>
    <div class="hero-actions">
      <a href="/projecten" class="btn btn-primary">Onze projecten bekijken</a>
      <a href="/contact" class="btn btn-secondary">Neem contact op</a>
    </div>
  </div>
</section>
```

### Hero Section CSS
```css
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.8) 0%, rgba(26, 54, 93, 0.6) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.75rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
```

## Component System

### Buttons
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: white;
  color: var(--color-primary);
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-gray-800);
}

.card-description {
  color: var(--color-gray-600);
  line-height: 1.6;
}
```

### Navigation
```css
.nav {
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: var(--color-gray-700);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}
```

## Layout System

### Grid System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid {
  display: grid;
  gap: 2rem;
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
}
```

### Spacing System
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

## Responsive Design

### Breakpoints
```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Mobile-First Approach
- Start with mobile design
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized performance for mobile

## Accessibility Guidelines

### Color Contrast
- Minimum 4.5:1 ratio for normal text
- Minimum 3:1 ratio for large text
- Color-blind friendly palette
- High contrast mode support

### Typography Accessibility
- Minimum 16px font size for body text
- Clear hierarchy and structure
- Sufficient line spacing
- Readable font weights

### Interactive Elements
- Minimum 44px touch targets
- Clear focus states
- Keyboard navigation support
- Screen reader compatibility

## Performance Considerations

### Font Loading
```css
@font-face {
  font-family: 'Work Sans';
  src: url('fonts/work-sans-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Image Optimization
- WebP format with fallbacks
- Responsive images with srcset
- Lazy loading for below-the-fold images
- Optimized compression

### CSS Optimization
- Critical CSS inlined
- Non-critical CSS loaded asynchronously
- Minified production builds
- Vendor prefixing as needed

## Implementation Notes

### Development Workflow
1. Design system setup
2. Component development
3. Page layout implementation
4. Responsive testing
5. Performance optimization
6. Accessibility testing

### Quality Assurance
- Cross-browser testing
- Mobile device testing
- Performance monitoring
- Accessibility auditing
- User experience testing
