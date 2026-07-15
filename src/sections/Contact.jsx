import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiGithub, FiInstagram } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-transparent relative border-t-2 border-dashed border-[#1A1A1A]/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Card Shell */}
          <div className="sketch-box bg-white p-8 sm:p-12 md:p-16 rounded-2xl relative overflow-hidden shadow-[6px_6px_0_0_#1A1A1A] wobble-hover scribble-hover">
            
            {/* Background pattern inside the card */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
            
            {/* Coffee stain inside card */}
            <div className="coffee-stain top-[15%] right-[5%] opacity-40 sm:opacity-60"></div>
            
            {/* Drifting background stars inside the card */}
            <div className="absolute bottom-6 left-12 text-zinc-300 animate-spin-slow pointer-events-none hidden md:block">
              <svg fill="currentColor" height="40" viewBox="0 0 24 24" width="40">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"></path>
              </svg>
            </div>
            <div className="absolute top-8 right-24 text-zinc-300 animate-spin-slow pointer-events-none hidden md:block">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"></path>
              </svg>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-1">
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.0] text-[#1A1A1A] heading-display tracking-tight">
                    Let's Create
                  </h2>
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.0] text-[#1A1A1A] heading-display tracking-tight">
                    Something
                  </h2>
                  <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.0] text-[#1A1A1A] heading-display tracking-tight">
                    Extraordinary
                  </h2>
                </div>
                
                <p className="text-sm sm:text-base text-zinc-700 font-medium max-w-md">
                  I'm currently available for freelance projects, full-time opportunities, and collaborative mobile contracts.
                </p>

                <a className="inline-block pt-2" href={personal.whatsapp} target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer btn-sketch text-xs uppercase tracking-wider h-12 px-6 gap-2 rounded-xl hover-target">
                    Let's Work Together
                    <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </button>
                </a>
              </div>

              {/* Right Column: Contact Details */}
              <div className="lg:col-span-5 space-y-6 lg:pl-8 border-t lg:border-t-0 lg:border-l border-dashed border-[#1A1A1A]/20 pt-8 lg:pt-0">
                
                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-stone-50 border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] group-hover:bg-yellow-100 transition-colors duration-300 shadow-[2px_2px_0_0_#1A1A1A]">
                    <FiPhone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 block uppercase tracking-widest mb-0.5 font-mono">
                      Phone Number
                    </span>
                    <a className="text-sm font-bold text-[#1A1A1A] hover:underline decoration-zinc-400 transition-colors duration-300 hover-target" href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`}>
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-stone-50 border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] shadow-[2px_2px_0_0_#1A1A1A]">
                    <FiMapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 block uppercase tracking-widest mb-0.5 font-mono">
                      Current Location
                    </span>
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {personal.location}
                    </span>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-stone-50 border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] group-hover:bg-yellow-100 transition-colors duration-300 shadow-[2px_2px_0_0_#1A1A1A]">
                    <FiGithub className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 block uppercase tracking-widest mb-0.5 font-mono">
                      GitHub Profile
                    </span>
                    <a className="text-sm font-bold text-[#1A1A1A] hover:underline decoration-zinc-400 transition-colors duration-300 hover-target" href={personal.github} target="_blank" rel="noopener noreferrer">
                      github.com/Farhathullah-Najeeb
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-stone-50 border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] group-hover:bg-yellow-100 transition-colors duration-300 shadow-[2px_2px_0_0_#1A1A1A]">
                    <FiInstagram className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-zinc-500 block uppercase tracking-widest mb-0.5 font-mono">
                      Instagram Profile
                    </span>
                    <a className="text-sm font-bold text-[#1A1A1A] hover:underline decoration-zinc-400 transition-colors duration-300 hover-target" href={personal.instagram} target="_blank" rel="noopener noreferrer">
                      instagram.com/farhathullah_najeeb
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
