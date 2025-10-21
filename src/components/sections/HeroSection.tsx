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
          <div className="hidden lg:flex items-end justify-end pr-8">
            <div className="w-full max-w-2xl">
              <StructuralDetailSVG />
            </div>
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
      viewBox="0 0 800 700"
      className="w-full h-auto"
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
      <g opacity="0.08">
        <defs>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#0B0D0F" strokeWidth="0.3"/>
          </pattern>
        </defs>
        <rect width="800" height="700" fill="url(#grid)" />
      </g>
      
      {/* Foundation */}
      <g>
        <rect x="100" y="580" width="600" height="120" fill="url(#concreteGradient)" stroke="#0B0D0F" strokeWidth="2" />
        <rect x="100" y="585" width="600" height="110" fill="url(#rebarPattern)" opacity="0.3" />
        
        {/* Foundation bolts */}
        <g stroke="url(#brassGradient)" strokeWidth="2" fill="none">
          <line x1="180" y1="580" x2="180" y2="560" />
          <line x1="400" y1="580" x2="400" y2="560" />
          <line x1="620" y1="580" x2="620" y2="560" />
          <circle cx="180" cy="560" r="4" fill="url(#brassGradient)">
            <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="400" cy="560" r="4" fill="url(#brassGradient)">
            <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
          <circle cx="620" cy="560" r="4" fill="url(#brassGradient)">
            <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" begin="1s"/>
          </circle>
        </g>
        
        {/* Soil pressure visualization */}
        <g opacity="0.6">
          <rect x="100" y="700" width="600" height="20" fill="#8B4513" />
          <g stroke="#8B4513" strokeWidth="1" fill="none">
            <line x1="120" y1="700" x2="120" y2="680">
              <animate attributeName="y2" values="680;675;680" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="200" y1="700" x2="200" y2="685">
              <animate attributeName="y2" values="685;680;685" dur="3s" repeatCount="indefinite" begin="0.3s"/>
            </line>
            <line x1="400" y1="700" x2="400" y2="675">
              <animate attributeName="y2" values="675;670;675" dur="3s" repeatCount="indefinite" begin="0.6s"/>
            </line>
            <line x1="600" y1="700" x2="600" y2="680">
              <animate attributeName="y2" values="680;675;680" dur="3s" repeatCount="indefinite" begin="0.9s"/>
            </line>
          </g>
        </g>
      </g>
      
      {/* Multi-story Steel Frame */}
      <g stroke="#0B0D0F" strokeWidth="3" fill="none">
        {/* Ground Floor Columns */}
        <g fill="url(#steelGradient)">
          <rect x="145" y="420" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="380" y="360" width="40" height="220" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="615" y="420" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
        </g>
        
        {/* First Floor Columns */}
        <g fill="url(#steelGradient)">
          <rect x="145" y="260" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="380" y="200" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="615" y="260" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
        </g>
        
        {/* Second Floor Columns */}
        <g fill="url(#steelGradient)">
          <rect x="145" y="100" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="380" y="40" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="615" y="100" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
        </g>
        
        {/* Third Floor Columns */}
        <g fill="url(#steelGradient)">
          <rect x="145" y="-60" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="380" y="-120" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
          <rect x="615" y="-60" width="40" height="160" stroke="#0B0D0F" strokeWidth="2" />
        </g>
      </g>
      
      {/* Horizontal Beams */}
      <g stroke="#0B0D0F" strokeWidth="2.5" fill="url(#steelGradient)">
        {/* Ground Floor Beams */}
        <rect x="185" y="400" width="195" height="40" />
        <rect x="425" y="400" width="195" height="40" />
        
        {/* First Floor Beams */}
        <rect x="185" y="240" width="195" height="40" />
        <rect x="425" y="240" width="195" height="40" />
        
        {/* Second Floor Beams */}
        <rect x="185" y="80" width="195" height="40" />
        <rect x="425" y="80" width="195" height="40" />
        
        {/* Third Floor Beams */}
        <rect x="185" y="-80" width="195" height="40" />
        <rect x="425" y="-80" width="195" height="40" />
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
        <g stroke="#D64545" strokeWidth="5" fill="#D64545">
          {/* Third Floor Loads */}
          <line x1="165" y1="-60" x2="165" y2="-120">
            <animate attributeName="y2" values="-120;-140;-120" dur="2s" repeatCount="indefinite"/>
          </line>
          <polygon points="165,-120 160,-110 170,-110">
            <animate attributeName="points" values="165,-120 160,-110 170,-110;165,-140 160,-130 170,-130;165,-120 160,-110 170,-110" dur="2s" repeatCount="indefinite"/>
          </polygon>
          
          <line x1="400" y1="-120" x2="400" y2="-180">
            <animate attributeName="y2" values="-180;-200;-180" dur="2s" repeatCount="indefinite" begin="0.3s"/>
          </line>
          <polygon points="400,-180 395,-170 405,-170">
            <animate attributeName="points" values="400,-180 395,-170 405,-170;400,-200 395,-190 405,-190;400,-180 395,-170 405,-170" dur="2s" repeatCount="indefinite" begin="0.3s"/>
          </polygon>
          
          <line x1="635" y1="-60" x2="635" y2="-120">
            <animate attributeName="y2" values="-120;-140;-120" dur="2s" repeatCount="indefinite" begin="0.6s"/>
          </line>
          <polygon points="635,-120 630,-110 640,-110">
            <animate attributeName="points" values="635,-120 630,-110 640,-110;635,-140 630,-130 640,-130;635,-120 630,-110 640,-110" dur="2s" repeatCount="indefinite" begin="0.6s"/>
          </polygon>
          
          {/* Second Floor Loads */}
          <line x1="165" y1="100" x2="165" y2="40">
            <animate attributeName="y2" values="40;20;40" dur="2.5s" repeatCount="indefinite" begin="0.2s"/>
          </line>
          <polygon points="165,40 160,50 170,50">
            <animate attributeName="points" values="165,40 160,50 170,50;165,20 160,30 170,30;165,40 160,50 170,50" dur="2.5s" repeatCount="indefinite" begin="0.2s"/>
          </polygon>
          
          <line x1="400" y1="40" x2="400" y2="-20">
            <animate attributeName="y2" values="-20;-40;-20" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </line>
          <polygon points="400,-20 395,-10 405,-10">
            <animate attributeName="points" values="400,-20 395,-10 405,-10;400,-40 395,-30 405,-30;400,-20 395,-10 405,-10" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          </polygon>
          
          <line x1="635" y1="100" x2="635" y2="40">
            <animate attributeName="y2" values="40;20;40" dur="2.5s" repeatCount="indefinite" begin="0.8s"/>
          </line>
          <polygon points="635,40 630,50 640,50">
            <animate attributeName="points" values="635,40 630,50 640,50;635,20 630,30 640,30;635,40 630,50 640,50" dur="2.5s" repeatCount="indefinite" begin="0.8s"/>
          </polygon>
          
          {/* First Floor Loads */}
          <line x1="165" y1="260" x2="165" y2="200">
            <animate attributeName="y2" values="200;180;200" dur="3s" repeatCount="indefinite" begin="0.4s"/>
          </line>
          <polygon points="165,200 160,210 170,210">
            <animate attributeName="points" values="165,200 160,210 170,210;165,180 160,190 170,190;165,200 160,210 170,210" dur="3s" repeatCount="indefinite" begin="0.4s"/>
          </polygon>
          
          <line x1="400" y1="200" x2="400" y2="140">
            <animate attributeName="y2" values="140;120;140" dur="3s" repeatCount="indefinite" begin="0.7s"/>
          </line>
          <polygon points="400,140 395,150 405,150">
            <animate attributeName="points" values="400,140 395,150 405,150;400,120 395,130 405,130;400,140 395,150 405,150" dur="3s" repeatCount="indefinite" begin="0.7s"/>
          </polygon>
          
          <line x1="635" y1="260" x2="635" y2="200">
            <animate attributeName="y2" values="200;180;200" dur="3s" repeatCount="indefinite" begin="1s"/>
          </line>
          <polygon points="635,200 630,210 640,210">
            <animate attributeName="points" values="635,200 630,210 640,210;635,180 630,190 640,190;635,200 630,210 640,210" dur="3s" repeatCount="indefinite" begin="1s"/>
          </polygon>
        </g>
        
        {/* Distributed Loads */}
        <g stroke="#D64545" strokeWidth="3" fill="none" opacity="0.7">
          <line x1="185" y1="-80" x2="380" y2="-80">
            <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="425" y1="-80" x2="620" y2="-80">
            <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </line>
          <line x1="185" y1="80" x2="380" y2="80">
            <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s"/>
          </line>
          <line x1="425" y1="80" x2="620" y2="80">
            <animate attributeName="stroke-width" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1.5s"/>
          </line>
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
