import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';

export default function Hero() {
  const marqueeItems = [
    "DART", "FLUTTER", "SWIFT", "KOTLIN", "REACT", 
    "TYPESCRIPT", "NODE.JS", "REST APIS", "FIREBASE", 
    "STRIPE", "RAZORPAY", "WEBRTC", "NOMUPAY"
  ];

  const statsData = [
    { value: "3+", label: "Years Experience" },
    { value: "12", label: "Client Projects" },
    { value: "5", label: "Production Apps" },
    { value: "5", label: "Payment Gateways" }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-12 px-6 flex flex-col justify-between bg-transparent overflow-hidden">
      {/* Background Coffee Stain */}
      <div className="coffee-stain top-[12%] left-[4%] opacity-50 sm:opacity-80"></div>
      
      {/* Main Hero grid layout */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        
        {/* Left Column: Wording & CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* Eyebrow tag */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-bold tracking-[0.25em] text-red-500 uppercase font-mono"
          >
            Mobile & Software Engineering
          </motion.span>
 
          {/* Heading stacked titles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.0] text-[#1A1A1A] heading-display tracking-tight">
              Mobile &
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.0] text-[#1A1A1A] heading-display tracking-tight">
              <span className="marker-highlight">Software</span> Dev
            </h1>
          </motion.div>
 
          {/* Description biography */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-lg text-sm sm:text-base text-zinc-700 font-medium leading-relaxed"
          >
            {personal.bio}
          </motion.p>
 
          {/* Dual Action CTA buttons */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#projects">
                <button className="inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer btn-sketch text-xs uppercase tracking-wider h-12 px-6 gap-2 rounded-xl hover-target">
                  View My Work
                  <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </button>
              </a>
              <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-stone-100 text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-stone-200 hover:text-black text-xs uppercase tracking-wider h-12 px-6 gap-2 rounded-xl hover-target shadow-[3px_3px_0_0_#1A1A1A]">
                  Contact Me
                  <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </button>
              </a>
            </motion.div>

            {/* Sketched Hand-Drawn Arrow annotation */}
            <div className="absolute -bottom-[85px] left-28 pointer-events-none hidden sm:flex flex-col items-center gap-1 select-none">
              <span className="font-handwriting text-sm text-[#1A1A1A] rotate-[-5deg] font-bold">Checkout projects!</span>
              <svg width="45" height="35" viewBox="0 0 45 35" fill="none" className="rotate-[25deg] text-[#1A1A1A]/70">
                <path d="M5 10 C15 12, 25 20, 38 25 M32 30 C34 28, 38 25, 38 25 C38 25, 33 18, 30 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>
 
        {/* Right Column: Polaroid Image Rotation & Guides */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          {/* Compass layout circles */}
          <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[190px] -translate-x-1/2 -translate-y-1/2 lg:translate-x-1/2 lg:translate-y-1/2 w-[480px] h-[480px] rounded-full border border-dashed border-[#1A1A1A]/10 pointer-events-none z-0"></div>
          
          {/* Rotating star decoration */}
          <div className="absolute -top-4 right-12 z-20 text-zinc-400 animate-spin-slow pointer-events-none hidden sm:block">
            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"></path>
            </svg>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-dotted border-[#1A1A1A]/15 pointer-events-none z-0"></div>
          
          {/* Polaroid Frame image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[320px] polaroid rotate-[-3deg] hover:rotate-[1deg] transition-all duration-300 z-10"
          >
            {/* Masking tape snippet */}
            <div className="masking-tape"></div>
            
            <div className="overflow-hidden border border-[#1A1A1A] rounded-sm bg-[#faf8f5] aspect-square">
              <img 
                alt={`${personal.name} - Portrait`} 
                className="object-cover object-center filter grayscale opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-700 w-full h-full"
                src={personal.heroImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = personal.aboutImage;
                }}
              />
            </div>
            
            <p className="text-center font-handwriting text-xl font-bold text-zinc-700 mt-4 select-none">
              me_draft_v3.jpg
            </p>
          </motion.div>
        </div>
 
      </div>
 
      {/* Stats container block: Ruled Index Card */}
      <div className="max-w-6xl mx-auto w-full mt-16 border-2 border-[#1A1A1A] bg-white rounded-xl shadow-[4px_4px_0_0_#1A1A1A] overflow-hidden relative z-10">
        {/* Red pen handwritten annotation */}
        <div className="absolute top-2 right-4 pointer-events-none z-20 hidden md:block select-none">
          <span className="font-handwriting text-xs text-red-500 font-bold rotate-[4deg] inline-block">App Store & Play Store live! ✓</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className={`py-8 px-4 flex flex-col justify-center border-[#1A1A1A] relative ${
                idx === 0 ? 'border-b-2 border-dashed md:border-b-0 md:border-r-2' :
                idx === 1 ? 'border-b-2 border-dashed md:border-b-0 md:border-r-2' :
                idx === 2 ? 'border-r-2 border-dashed' : ''
              }`}
            >
              {/* Draw a red ink sketch circle around index 2 value (Production Apps) */}
              {idx === 2 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
                  <svg width="85" height="85" viewBox="0 0 100 100" className="text-red-500 rotate-[-12deg]">
                    <path d="M 50,15 C 20,15 15,45 15,55 C 15,70 30,85 55,85 C 80,85 85,60 85,45 C 85,30 65,18 45,20 C 35,22 22,32 25,48" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <span className="text-3xl sm:text-4xl font-bold text-[#1A1A1A] heading-display tracking-wide">{stat.value}</span>
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mt-2 font-mono">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
 
      {/* Endless Horizontal Loop Ticker Marquee: Ruler Divider */}
      <div className="w-[calc(100%+3rem)] -mx-6 bg-white border-y-2 border-[#1A1A1A] py-4 overflow-hidden select-none whitespace-nowrap flex relative z-10 mt-16 shadow-[0_2px_4px_rgba(0,0,0,0.03)]">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF8F5] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF8F5] to-transparent z-20 pointer-events-none"></div>
        
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-12 text-[#1A1A1A] font-bold text-2xl sm:text-3xl heading-display tracking-wider uppercase">
              <span>{item}</span>
              <span className="text-red-500 text-sm font-sans tracking-normal select-none font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>
 
    </section>
  );
}

