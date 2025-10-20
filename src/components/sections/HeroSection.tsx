import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-paper border-b border-neutral-100 overflow-hidden">
      {/* Subtle Construction Pattern Background */}
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] sm:min-h-[85vh] py-12 sm:py-20">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div>
              <h1 className="text-[20vw] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl font-heavy text-base mb-4 sm:mb-6">
                <span className="text-accent">
                  <span className="block sm:inline">Rekenkracht</span>
                  <span className="hidden sm:inline"> + </span>
                  <span className="block sm:inline">verantwoordelijkheid.</span>
                </span>
              </h1>
              <div 
                className="inline-block px-3 py-1 border border-accent/30 rounded-sm"
                style={{
                  background: 'linear-gradient(135deg, #b6966d 0%, #9d7f58 100%)',
                }}
              >
                <p className="text-caption sm:text-body-s font-mono uppercase tracking-wider text-paper font-semibold">
                  Sinds 1956
                </p>
              </div>
            </div>

            {/* Proof Strip */}
            <div 
              className="flex flex-wrap gap-x-4 gap-y-2 text-body-s font-mono border-l-4 border-accent pl-6 relative bg-accent/5 py-4 pr-4 rounded-r-sm"
            >
              <span 
                className="font-semibold px-2 py-0.5 rounded-sm text-paper"
                style={{
                  background: 'linear-gradient(135deg, #b6966d 0%, #9d7f58 100%)',
                }}
              >
                19.000+ projecten
              </span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-400">Onafhankelijk advies</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-400">BIM/Revit-first</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-400">Industrie</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-400">Logistiek</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-400">Utiliteit</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-400">Wonen</span>
            </div>

            {/* Subheading */}
            <p className="text-body-l sm:text-h4 max-w-prose leading-relaxed text-neutral-500">
              De ervaring strekt zich uit over projecten van elk formaat. Met onze kring van relaties zijn wij in staat ook verregaand gespecialiseerde ontwerpen op functioneringsniveau te berekenen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Plan een technisch overleg</span>
                <span className="text-caption opacity-75 hidden sm:inline">(15–30 min)</span>
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

          {/* Right Column - Isometric Structural Detail */}
          <div className="hidden lg:flex items-center justify-center">
            <StructuralDetailSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

// Advanced Structural Detail SVG - Multi-story Frame with Load Distribution
const StructuralDetailSVG = () => {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full max-w-lg h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#b6966d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c9a87f', stopOpacity: 1 }} />
        </linearGradient>
        <pattern id="rebarPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="#9BA3AE" />
        </pattern>
      </defs>
      
      {/* Concrete Slab with Rebar */}
      <g>
        <rect x="50" y="280" width="400" height="30" fill="#E7EAEE" stroke="#0B0D0F" strokeWidth="1.5" />
        <rect x="50" y="285" width="400" height="20" fill="url(#rebarPattern)" opacity="0.4" />
      </g>
      
      {/* Steel Columns - 3 columns */}
      <g stroke="#0B0D0F" strokeWidth="2.5" fill="none">
        {/* Left Column */}
        <line x1="100" y1="80" x2="100" y2="280" />
        <line x1="115" y1="80" x2="115" y2="280" />
        <line x1="100" y1="80" x2="115" y2="80" />
        <rect x="95" y="75" width="25" height="12" fill="#E7EAEE" stroke="#0B0D0F" strokeWidth="1.5" />
        
        {/* Center Column */}
        <line x1="250" y1="50" x2="250" y2="280" />
        <line x1="265" y1="50" x2="265" y2="280" />
        <line x1="250" y1="50" x2="265" y2="50" />
        <rect x="245" y="45" width="25" height="12" fill="#E7EAEE" stroke="#0B0D0F" strokeWidth="1.5" />
        
        {/* Right Column */}
        <line x1="400" y1="80" x2="400" y2="280" />
        <line x1="415" y1="80" x2="415" y2="280" />
        <line x1="400" y1="80" x2="415" y2="80" />
        <rect x="395" y="75" width="25" height="12" fill="#E7EAEE" stroke="#0B0D0F" strokeWidth="1.5" />
      </g>
      
      {/* Horizontal Beams - Multiple Levels */}
      <g stroke="#0B0D0F" strokeWidth="2" fill="none">
        {/* Top Beam */}
        <line x1="115" y1="150" x2="250" y2="150" />
        <line x1="115" y1="165" x2="250" y2="165" />
        <line x1="265" y1="150" x2="400" y2="150" />
        <line x1="265" y1="165" x2="400" y2="165" />
        
        {/* Bottom Beam */}
        <line x1="115" y1="280" x2="250" y2="280" />
        <line x1="115" y1="295" x2="250" y2="295" />
        <line x1="265" y1="280" x2="400" y2="280" />
        <line x1="265" y1="295" x2="400" y2="295" />
      </g>
      
      {/* Diagonal Bracing */}
      <g stroke="#0B0D0F" strokeWidth="1.5" strokeDasharray="none">
        <line x1="115" y1="165" x2="245" y2="280" opacity="0.6" />
        <line x1="265" y1="165" x2="395" y2="280" opacity="0.6" />
      </g>
      
      {/* Connection Details with Brass Welds */}
      <g>
        {/* Center Node */}
        <rect x="240" y="270" width="35" height="35" fill="#E7EAEE" stroke="#0B0D0F" strokeWidth="2" />
        <circle cx="248" cy="278" r="2.5" fill="#0B0D0F" />
        <circle cx="267" cy="278" r="2.5" fill="#0B0D0F" />
        <circle cx="248" cy="297" r="2.5" fill="#0B0D0F" />
        <circle cx="267" cy="297" r="2.5" fill="#0B0D0F" />
        
        {/* Brass Weld Indicators */}
        <path d="M 235 275 L 235 265 L 245 265" stroke="url(#brassGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 280 275 L 280 265 L 270 265" stroke="url(#brassGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 235 300 L 235 310 L 245 310" stroke="url(#brassGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 280 300 L 280 310 L 270 310" stroke="url(#brassGradient)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      
      {/* Load Distribution Arrows */}
      <g>
        {/* Point Loads */}
        <line x1="107" y1="120" x2="107" y2="80" stroke="#D64545" strokeWidth="3" />
        <polygon points="107,80 103,90 111,90" fill="#D64545" />
        <line x1="257" y1="90" x2="257" y2="50" stroke="#D64545" strokeWidth="3" />
        <polygon points="257,50 253,60 261,60" fill="#D64545" />
        <line x1="407" y1="120" x2="407" y2="80" stroke="#D64545" strokeWidth="3" />
        <polygon points="407,80 403,90 411,90" fill="#D64545" />
        
        {/* Reaction Forces */}
        <line x1="107" y1="310" x2="107" y2="360" stroke="#2DBE8B" strokeWidth="3" />
        <polygon points="107,360 103,350 111,350" fill="#2DBE8B" />
        <line x1="257" y1="310" x2="257" y2="360" stroke="#2DBE8B" strokeWidth="3" />
        <polygon points="257,360 253,350 261,350" fill="#2DBE8B" />
        <line x1="407" y1="310" x2="407" y2="360" stroke="#2DBE8B" strokeWidth="3" />
        <polygon points="407,360 403,350 411,350" fill="#2DBE8B" />
        
        {/* Moment Indicators */}
        <path d="M 180 157 A 20 20 0 0 1 200 177" stroke="url(#brassGradient)" strokeWidth="2" fill="none" />
        <polygon points="200,177 195,170 205,173" fill="#b6966d" />
      </g>
      
      {/* Shear Connectors */}
      <g stroke="url(#brassGradient)" strokeWidth="1.5">
        <line x1="107" y1="280" x2="107" y2="295" />
        <line x1="257" y1="280" x2="257" y2="295" />
        <line x1="407" y1="280" x2="407" y2="295" />
      </g>
      
      {/* Technical Annotations */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="10" fill="#9BA3AE">
        <text x="70" y="70">HEA 200</text>
        <text x="215" y="40">HEB 240</text>
        <text x="360" y="70">HEA 200</text>
        <text x="160" y="145">IPE 180</text>
        <text x="310" y="145">IPE 180</text>
        <text x="10" y="300" fill="#D64545" fontSize="9">P = 45 kN</text>
        <text x="215" y="35" fill="#D64545" fontSize="9">P = 65 kN</text>
        <text x="460" y="375" fill="#2DBE8B" fontSize="9">R↑</text>
      </g>
      
      {/* Dimension Lines */}
      <g stroke="#9BA3AE" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5">
        <line x1="107" y1="320" x2="257" y2="320" />
        <line x1="257" y1="320" x2="407" y2="320" />
        <text x="175" y="335" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fill="#9BA3AE">6000</text>
        <text x="325" y="335" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fill="#9BA3AE">6000</text>
      </g>
    </svg>
  );
};

export default HeroSection;
