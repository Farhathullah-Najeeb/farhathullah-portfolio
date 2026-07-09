import { motion } from 'framer-motion';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

export default function Projects() {
  // Completed projects only
  const completedProjects = projects.filter(project => project.status !== "in-progress");

  const getProjectImage = (name) => {
    switch (name) {
      case "GoldVault+":
        return "/goldvault_mockup.png";
      case "RingMe":
        return "/ringme_mockup.png";
      case "Finance Finzoa":
        return "/finzoa_mockup.png";
      case "Urban Aana":
        return "/urbanaana_mockup.jpg";
      case "Velocity Homes":
        return "/velocity_mockup.png";
      case "Sana N Portfolio":
        return "/sanan_mockup.png";
      case "VILA":
        return "/vila_mockup.png";
      case "Zealosh":
        return "/zealosh_mockup.png";
      case "E-Wallet":
        return "/ewallet_mockup.png";
      default:
        return null;
    }
  };

  // Identify mobile apps and non-clickable projects
  const nonClickableProjects = ["Zealosh", "VILA", "E-Wallet"];
  const mobileApps = ["GoldVault+", "RingMe"];

  const getMobileLinks = (name) => {
    if (name === "GoldVault+") {
      return {
        ios: "https://apps.apple.com/in/app/goldvault/id6755378043",
        android: "https://play.google.com/store/apps/details?id=com.pipstechnologies.goldvault&pcampaignid=web_share"
      };
    }
    if (name === "RingMe") {
      return {
        ios: "https://play.google.com/store/apps/details?id=com.ringmeonline.user&hl=en",
        android: "https://play.google.com/store/apps/details?id=com.ringmeonline.user&hl=en"
      };
    }
    return null;
  };

  return (
    <section id="projects" className="py-28 px-6 bg-transparent relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white heading-display tracking-tight">
              Featured Work
            </h2>
          </div>
          
          <a 
            href="https://github.com/Farhathullah-Najeeb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-wider transition-colors duration-300 group hover-target"
          >
            Explore All Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Dynamic Stacking Project Cards Stack */}
        <div className="relative mt-8 flex flex-col items-center">
          {completedProjects.map((project, idx) => {
            const projectImg = getProjectImage(project.name);
            const isClickable = !nonClickableProjects.includes(project.name);
            const isMobile = mobileApps.includes(project.name);
            const mobileLinks = getMobileLinks(project.name);
            const projectUrl = project.link || "https://github.com/Farhathullah-Najeeb";

            // Visual elements of the card (avoiding nested <a> tags)
            return (
              <div 
                key={project.id}
                className="sticky w-full max-w-4xl mx-auto mb-20 sm:mb-32 origin-top"
                style={{ 
                  top: `calc(100px + ${idx * 24}px)`,
                  perspective: "1200px" 
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={isClickable ? { y: -6, rotateX: 3, rotateY: -1.5, scale: 1.005 } : {}}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="group block relative flex flex-col md:flex-row h-auto overflow-hidden p-0 bg-[#16171a] border border-white/5 group-hover:border-white/15 transition-all duration-500 rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                    
                    {/* Left Side screenshot wrapper */}
                    <div className="w-full md:w-3/5 p-4 flex items-center justify-center shrink-0">
                      {isClickable ? (
                        <a 
                          href={projectUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="aspect-video w-full relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 shadow-inner shine-effect block hover-target"
                        >
                          {projectImg ? (
                            <img 
                              alt={project.name} 
                              className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 opacity-95 group-hover:opacity-100 w-full h-full"
                              src={projectImg}
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center p-8 text-center bg-dot-pattern w-full h-full">
                              <span className="text-4xl text-glow mb-2">💻</span>
                              <span className="text-sm font-bold tracking-widest text-white uppercase font-sans">{project.name}</span>
                            </div>
                          )}
                        </a>
                      ) : (
                        <div className="aspect-video w-full relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 shadow-inner select-none cursor-default">
                          <div className="flex flex-col items-center justify-center p-8 text-center bg-dot-pattern w-full h-full">
                            <span className="text-4xl text-glow mb-2">💻</span>
                            <span className="text-sm font-bold tracking-widest text-zinc-500 uppercase font-sans">{project.name}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Side details */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            {project.tags.join(" / ")}
                          </p>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-zinc-200 transition-colors duration-300 heading-display tracking-wide">
                            {isClickable ? (
                              <a 
                                href={projectUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover-target hover:underline decoration-white/20"
                              >
                                {project.name}
                              </a>
                            ) : (
                              <span className="cursor-default select-none">{project.name}</span>
                            )}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      {/* Footer buttons row (safely sibling links) */}
                      <div className="flex flex-wrap items-center justify-between pt-6 border-t border-white/5 mt-6 gap-4">
                        {isMobile && mobileLinks ? (
                          // Mobile download badges side-by-side
                          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                            <a 
                              href={mobileLinks.ios} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all hover-target shrink-0"
                            >
                              <FaApple className="h-4 w-4 text-zinc-300" />
                              App Store
                            </a>
                            <a 
                              href={mobileLinks.android} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all hover-target shrink-0"
                            >
                              <FaAndroid className="h-4 w-4 text-zinc-300" />
                              Google Play
                            </a>
                          </div>
                        ) : isClickable ? (
                          // Standard web link button
                          <a 
                            href={projectUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between w-full hover-target"
                          >
                            <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                              Launch Site
                            </span>
                            <div className="h-10 w-10 rounded-full border border-white/10 group-hover:border-white/30 bg-transparent flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#121316] transition-all duration-500 shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                              </svg>
                            </div>
                          </a>
                        ) : (
                          // Non-clickable case footer details
                          <div className="flex items-center justify-between w-full select-none cursor-default">
                            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                              Internal Release
                            </span>
                            <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02] text-zinc-500 font-bold uppercase tracking-wider">
                              Offline
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
