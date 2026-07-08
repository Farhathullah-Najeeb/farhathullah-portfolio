import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

export default function Projects() {
  // Completed projects only
  const completedProjects = projects.filter(project => project.status !== "in-progress");

  const getProjectImage = (name) => {
    switch (name) {
      case "GoldVault+":
        return "/goldvault_mockup.png";
      case "Finance Finzoa":
        return "/finzoa_mockup.png";
      case "Urban Aana":
        return "/urbanaana_mockup.png";
      case "E-Wallet":
        return "/project-ewallet.png";
      case "Zealosh":
        return "/project-zealosh.png";
      default:
        return null;
    }
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
            <h2 className="text-3xl sm:text-5xl font-normal text-white uppercase heading-display tracking-tight">
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

            return (
              <div 
                key={project.id}
                className="sticky w-full max-w-4xl mx-auto mb-20 sm:mb-32 origin-top"
                style={{ 
                  top: `calc(100px + ${idx * 24}px)`,
                  perspective: "1000px" 
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a 
                    href={project.link || "https://github.com/Farhathullah-Najeeb"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block hover-target"
                  >
                    <div className="flex flex-col md:flex-row h-auto overflow-hidden p-0 bg-[#16171a] border border-white/5 hover:border-white/15 transition-all duration-500 rounded-[2rem] shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                      
                      {/* Left Side screenshot */}
                      <div className="w-full md:w-3/5 p-4 flex items-center justify-center shrink-0">
                        <div className="aspect-video w-full relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 shadow-inner">
                          {projectImg ? (
                            <img 
                              alt={project.name} 
                              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 opacity-95 group-hover:opacity-100 w-full h-full"
                              src={projectImg}
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center p-8 text-center bg-dot-pattern w-full h-full">
                              <span className="text-4xl text-glow mb-2">💻</span>
                              <span className="text-sm font-bold tracking-widest text-white uppercase font-sans">{project.name}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Side details */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                              {project.tags.join(" / ")}
                            </p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors duration-300 uppercase heading-display tracking-wide">
                              {project.name}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                            {project.desc}
                          </p>
                        </div>

                        {/* Footer launch button */}
                        <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
                          <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                            Launch Site
                          </span>
                          <div className="h-10 w-10 rounded-full border border-white/10 group-hover:border-white/30 bg-transparent flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#121316] transition-all duration-500 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-4 w-4">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>

                    </div>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
