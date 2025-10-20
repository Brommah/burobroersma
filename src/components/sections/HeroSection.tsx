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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-heavy text-base mb-6">
                <span className="text-accent">
                  Rekenkracht + verantwoordelijkheid.
                </span>
              </h1>
              <div 
                className="inline-block px-3 py-1 border border-accent/30 rounded-sm mb-6"
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

// Ultra-Dynamic Structural Analysis SVG - Animated Engineering Visualization
const StructuralDetailSVG = () => {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full max-w-lg h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#b6966d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#c9a87f', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#E7EAEE', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#C9CED6', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="concreteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F5F5F5', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E7EAEE', stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Patterns */}
        <pattern id="rebarPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="2" fill="#9BA3AE" opacity="0.6" />
          <circle cx="2" cy="2" r="1" fill="#9BA3AE" opacity="0.3" />
          <circle cx="10" cy="10" r="1" fill="#9BA3AE" opacity="0.3" />
        </pattern>
        
        <pattern id="steelPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="8" height="8" fill="none" stroke="#0B0D0F" strokeWidth="0.5" opacity="0.2" />
        </pattern>
        
        {/* Filters for glow effects */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Animation definitions */}
        <animate id="pulse" attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
        <animate id="flow" attributeName="stroke-dashoffset" values="0;20" dur="3s" repeatCount="indefinite"/>
        <animate id="bounce" attributeName="cy" values="50;40;50" dur="1.5s" repeatCount="indefinite"/>
        <animate id="rotate" attributeName="transform" values="rotate(0 300 300);rotate(360 300 300)" dur="8s" repeatCount="indefinite"/>
      </defs>
      
      {/* Background Grid */}
      <g opacity="0.1">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0B0D0F" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#grid)" />
      </g>
      
      {/* Foundation */}
      <g>
        <rect x="50" y="520" width="500" height="80" fill="url(#concreteGradient)" stroke="#0B0D0F" strokeWidth="2" />
        <rect x="50" y="525" width="500" height="70" fill="url(#rebarPattern)" opacity="0.3" />
        
        {/* Foundation bolts */}
        <g stroke="url(#brassGradient)" strokeWidth="2" fill="none">
          <line x1="120" y1="520" x2="120" y2="500" />
          <line x1="280" y1="520" x2="280" y2="500" />
          <line x1="440" y1="520" x2="440" y2="500" />
          <circle cx="120" cy="500" r="3" fill="url(#brassGradient)" />
          <circle cx="280" cy="500" r="3" fill="url(#brassGradient)" />
          <circle cx="440" cy="500" r="3" fill="url(#brassGradient)" />
        </g>
      </g>
      
      {/* Multi-story Steel Frame */}
      <g stroke="#0B0D0F" strokeWidth="3" fill="none">
        {/* Ground Floor Columns */}
        <g fill="url(#steelGradient)">
          <rect x="95" y="350" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="245" y="300" width="30" height="200" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="395" y="350" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
        </g>
        
        {/* First Floor Columns */}
        <g fill="url(#steelGradient)">
          <rect x="95" y="200" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="245" y="150" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="395" y="200" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
        </g>
        
        {/* Second Floor Columns */}
        <g fill="url(#steelGradient)">
          <rect x="95" y="50" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="245" y="0" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="395" y="50" width="30" height="150" stroke="#0B0D0F" strokeWidth="2" />
        </g>
      </g>
      
      {/* Horizontal Beams */}
      <g stroke="#0B0D0F" strokeWidth="2.5" fill="url(#steelGradient)">
        {/* Ground Floor Beams */}
        <rect x="125" y="320" width="120" height="30" />
        <rect x="275" y="320" width="120" height="30" />
        
        {/* First Floor Beams */}
        <rect x="125" y="170" width="120" height="30" />
        <rect x="275" y="170" width="120" height="30" />
        
        {/* Second Floor Beams */}
        <rect x="125" y="20" width="120" height="30" />
        <rect x="275" y="20" width="120" height="30" />
      </g>
      
      {/* Diagonal Bracing - Animated */}
      <g stroke="#0B0D0F" strokeWidth="2" strokeDasharray="5,5" fill="none">
        <line x1="125" y1="170" x2="245" y2="320">
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="275" y1="170" x2="395" y2="320">
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="125" y1="20" x2="245" y2="170">
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="275" y1="20" x2="395" y2="170">
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
        </line>
      </g>
      
      {/* Connection Details - Pulsing */}
      <g>
        {/* Ground Floor Connections */}
        <rect x="240" y="310" width="40" height="40" fill="#E7EAEE" stroke="#0B0D0F" strokeWidth="2" filter="url(#glow)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
        </rect>
        
        {/* Bolt Details */}
        <g fill="url(#brassGradient)">
          <circle cx="250" cy="320" r="3">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="270" cy="320" r="3">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="250" cy="340" r="3">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="1s"/>
          </circle>
          <circle cx="270" cy="340" r="3">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" begin="1.5s"/>
          </circle>
        </g>
        
        {/* Weld Indicators - Flowing */}
        <g stroke="url(#brassGradient)" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M 230 320 L 230 300 L 240 300">
            <animate attributeName="stroke-dasharray" values="0,10;5,5;10,0" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M 290 320 L 290 300 L 280 300">
            <animate attributeName="stroke-dasharray" values="0,10;5,5;10,0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </path>
          <path d="M 230 350 L 230 370 L 240 370">
            <animate attributeName="stroke-dasharray" values="0,10;5,5;10,0" dur="2s" repeatCount="indefinite" begin="1s"/>
          </path>
          <path d="M 290 350 L 290 370 L 280 370">
            <animate attributeName="stroke-dasharray" values="0,10;5,5;10,0" dur="2s" repeatCount="indefinite" begin="1.5s"/>
          </path>
        </g>
      </g>
      
      {/* Dynamic Load Visualization */}
      <g>
        {/* Point Loads - Bouncing */}
        <g stroke="#D64545" strokeWidth="4" fill="#D64545">
          <line x1="110" y1="100" x2="110" y2="50">
            <animate attributeName="y2" values="50;40;50" dur="2s" repeatCount="indefinite"/>
          </line>
          <polygon points="110,50 105,60 115,60">
            <animate attributeName="points" values="110,50 105,60 115,60;110,40 105,50 115,50;110,50 105,60 115,60" dur="2s" repeatCount="indefinite"/>
          </polygon>
          
          <line x1="260" y1="80" x2="260" y2="30">
            <animate attributeName="y2" values="30;20;30" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </line>
          <polygon points="260,30 255,40 265,40">
            <animate attributeName="points" values="260,30 255,40 265,40;260,20 255,30 265,30;260,30 255,40 265,40" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </polygon>
          
          <line x1="410" y1="100" x2="410" y2="50">
            <animate attributeName="y2" values="50;40;50" dur="2s" repeatCount="indefinite" begin="1s"/>
          </line>
          <polygon points="410,50 405,60 415,60">
            <animate attributeName="points" values="410,50 405,60 415,60;410,40 405,50 415,50;410,50 405,60 415,60" dur="2s" repeatCount="indefinite" begin="1s"/>
          </polygon>
        </g>
        
        {/* Reaction Forces - Pulsing Upward */}
        <g stroke="#2DBE8B" strokeWidth="4" fill="#2DBE8B">
          <line x1="110" y1="520" x2="110" y2="480">
            <animate attributeName="y2" values="480;470;480" dur="1.5s" repeatCount="indefinite"/>
          </line>
          <polygon points="110,480 105,470 115,470">
            <animate attributeName="points" values="110,480 105,470 115,470;110,470 105,460 115,460;110,480 105,470 115,470" dur="1.5s" repeatCount="indefinite"/>
          </polygon>
          
          <line x1="260" y1="520" x2="260" y2="480">
            <animate attributeName="y2" values="480;470;480" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
          </line>
          <polygon points="260,480 255,470 265,470">
            <animate attributeName="points" values="260,480 255,470 265,470;260,470 255,460 265,460;260,480 255,470 265,470" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
          </polygon>
          
          <line x1="410" y1="520" x2="410" y2="480">
            <animate attributeName="y2" values="480;470;480" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
          </line>
          <polygon points="410,480 405,470 415,470">
            <animate attributeName="points" values="410,480 405,470 415,470;410,470 405,460 415,460;410,480 405,470 415,470" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
          </polygon>
        </g>
        
        {/* Moment Indicators - Rotating */}
        <g stroke="url(#brassGradient)" strokeWidth="3" fill="none">
          <path d="M 180 185 A 25 25 0 0 1 210 215">
            <animateTransform attributeName="transform" type="rotate" values="0 195 200;360 195 200" dur="4s" repeatCount="indefinite"/>
          </path>
          <polygon points="210,215 205,208 215,211" fill="#b6966d">
            <animateTransform attributeName="transform" type="rotate" values="0 210 215;360 210 215" dur="4s" repeatCount="indefinite"/>
          </polygon>
          
          <path d="M 330 185 A 25 25 0 0 1 360 215">
            <animateTransform attributeName="transform" type="rotate" values="0 345 200;360 345 200" dur="4s" repeatCount="indefinite" begin="1s"/>
          </path>
          <polygon points="360,215 355,208 365,211" fill="#b6966d">
            <animateTransform attributeName="transform" type="rotate" values="0 360 215;360 360 215" dur="4s" repeatCount="indefinite" begin="1s"/>
          </polygon>
        </g>
      </g>
      
      {/* Shear Connectors - Flowing */}
      <g stroke="url(#brassGradient)" strokeWidth="2" fill="none">
        <line x1="110" y1="320" x2="110" y2="335">
          <animate attributeName="stroke-dasharray" values="0,8;4,4;8,0" dur="2.5s" repeatCount="indefinite"/>
        </line>
        <line x1="260" y1="320" x2="260" y2="335">
          <animate attributeName="stroke-dasharray" values="0,8;4,4;8,0" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
        </line>
        <line x1="410" y1="320" x2="410" y2="335">
          <animate attributeName="stroke-dasharray" values="0,8;4,4;8,0" dur="2.5s" repeatCount="indefinite" begin="1s"/>
        </line>
      </g>
      
      {/* Technical Annotations - Fading */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="11" fill="#9BA3AE">
        <text x="70" y="90" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
          HEA 200
        </text>
        <text x="220" y="60" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="0.5s"/>
          HEB 240
        </text>
        <text x="360" y="90" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1s"/>
          HEA 200
        </text>
        <text x="150" y="185" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1.5s"/>
          IPE 180
        </text>
        <text x="300" y="185" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="2s"/>
          IPE 180
        </text>
        
        {/* Load Values - Pulsing */}
        <text x="20" y="320" fill="#D64545" fontSize="10" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
          P = 45 kN
        </text>
        <text x="220" y="50" fill="#D64545" fontSize="10" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          P = 65 kN
        </text>
        <text x="460" y="520" fill="#2DBE8B" fontSize="10" opacity="0.9">
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" begin="1s"/>
          R↑
        </text>
      </g>
      
      {/* Dimension Lines - Animated */}
      <g stroke="#9BA3AE" strokeWidth="1" strokeDasharray="3,3" opacity="0.7">
        <line x1="110" y1="380" x2="260" y2="380">
          <animate attributeName="stroke-dashoffset" values="0;6" dur="4s" repeatCount="indefinite"/>
        </line>
        <line x1="260" y1="380" x2="410" y2="380">
          <animate attributeName="stroke-dashoffset" values="0;6" dur="4s" repeatCount="indefinite" begin="1s"/>
        </line>
        <text x="175" y="395" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fill="#9BA3AE" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
          6000
        </text>
        <text x="325" y="395" fontFamily="'IBM Plex Mono', monospace" fontSize="9" fill="#9BA3AE" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1s"/>
          6000
        </text>
      </g>
      
      {/* Stress Flow Visualization */}
      <g opacity="0.6">
        <defs>
          <linearGradient id="stressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D64545', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#b6966d', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#2DBE8B', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <path d="M 110 50 Q 185 100 260 30 Q 335 100 410 50" stroke="url(#stressGradient)" strokeWidth="8" fill="none" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,200;100,100;200,0" dur="5s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  );
};

export default HeroSection;
