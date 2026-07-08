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
            className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase"
          >
            Senior Flutter Development
          </motion.span>

          {/* Heading stacked titles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-8xl md:text-9xl font-normal leading-[0.85] text-white uppercase heading-display tracking-tight">
              Senior Flutter
            </h1>
            <h1 className="text-5xl sm:text-8xl md:text-9xl font-normal leading-[0.85] text-white uppercase heading-display tracking-tight">
              Developer
            </h1>
          </motion.div>

          {/* Description biography */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-lg text-sm sm:text-base text-zinc-400 font-medium leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          {/* Dual Action CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a href="#projects">
              <button class="inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer btn-silver text-xs uppercase tracking-wider h-12 px-6 gap-2 rounded-full hover-target">
                View My Work
                <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </button>
            </a>
            <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer">
              <button class="inline-flex items-center justify-center font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer bg-transparent text-white border border-white/15 hover:bg-white/5 hover:border-white/25 text-xs uppercase tracking-wider h-12 px-6 gap-2 rounded-full hover-target">
                Contact Me
                <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Aspect Portrait image rotations & glows */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[190px] -translate-x-1/2 -translate-y-1/2 lg:translate-x-1/2 lg:translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/[0.02] pointer-events-none z-0"></div>
          
          {/* Rotating star decoration */}
          <div className="absolute -top-4 right-12 z-20 text-white/20 animate-spin-slow pointer-events-none hidden sm:block">
            <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20">
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"></path>
            </svg>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none z-0"></div>
          
          {/* Image Container Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[380px] aspect-[4/5] sm:h-[440px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-zinc-950 z-10"
          >
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-0 pointer-events-none"></div>
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-white/[0.04] blur-3xl z-0 pointer-events-none"></div>
            
            {/* Drifting frames inside the card */}
            <div className="absolute top-[22%] left-[5%] w-[90%] h-[55%] border border-white/10 bg-white/[0.01] rounded-3xl rotate-[15deg] transform origin-center z-0 pointer-events-none"></div>
            <div className="absolute top-[18%] left-[5%] w-[90%] h-[55%] border border-white/[0.03] bg-white/[0.005] rounded-3xl -rotate-[10deg] transform origin-center z-0 pointer-events-none"></div>
            
            <img 
              alt={`${personal.name} - Portrait`} 
              className="object-cover object-center filter grayscale opacity-95 hover:grayscale-0 hover:opacity-100 transition-all duration-700 z-10 w-full h-full"
              src={personal.heroImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = personal.aboutImage;
              }}
            />
          </motion.div>
        </div>

      </div>

      {/* Stats container block */}
      <div className="max-w-6xl mx-auto w-full mt-16 border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {statsData.map((stat, idx) => (
            <div 
              key={idx} 
              className={`py-8 px-4 flex flex-col justify-center border-white/5 ${
                idx === 0 ? 'border-b border-r md:border-b-0' :
                idx === 1 ? 'border-b md:border-b-0 md:border-r' :
                idx === 2 ? 'border-r' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl font-normal text-white heading-display tracking-wide">{stat.value}</span>
              <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Endless Horizontal Loop Ticker Marquee */}
      <div className="w-full bg-[#18191b]/20 border-y border-white/5 py-4 overflow-hidden select-none whitespace-nowrap flex relative z-10 mt-16">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#121316] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#121316] to-transparent z-20 pointer-events-none"></div>
        
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span key={idx} className="flex items-center gap-12 text-white font-normal text-2xl sm:text-3xl heading-display tracking-wider uppercase">
              <span>{item}</span>
              <span className="text-zinc-600 text-sm font-sans tracking-normal select-none">✦</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
