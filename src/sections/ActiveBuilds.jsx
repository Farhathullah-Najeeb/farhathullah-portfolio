import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

export default function ActiveBuilds() {
  const activeBuilds = projects.filter(project => project.status === "in-progress");

  if (activeBuilds.length === 0) return null;

  return (
    <section id="in-progress" className="py-28 px-6 bg-transparent relative border-t-2 border-dashed border-[#1A1A1A]/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase block mb-2 font-mono">
            Active Builds
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1A1A] heading-display tracking-tight">
            In-Progress Work
          </h2>
          <p className="text-xs sm:text-sm text-zinc-700 max-w-lg mt-2">
            These are active client projects or modules currently under development with live demo previews.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeBuilds.map((project, idx) => {
            const cardVarClass = idx % 3 === 0 ? 'sketch-card-var-1' : idx % 3 === 1 ? 'sketch-card-var-2' : 'sketch-card-var-3';
            return (
              <div key={project.id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <a 
                    className="group block h-full hover-target" 
                    href={project.github} 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <div className={`flex flex-col h-full overflow-hidden p-0 pb-6 relative sketch-card-base ${cardVarClass} spiral-bound-top wobble-hover scribble-hover blueprint-grid-hover`}>
                    
                    {/* Top image aspect preview */}
                    <div className="p-4 pb-0 relative z-10">
                      <div className="aspect-video w-full relative overflow-hidden rounded-xl border-2 border-[#1A1A1A]/80 bg-stone-50 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-center p-4">
                          <span className="text-4xl mb-2">⚙️</span>
                          <span className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase font-mono">{project.name}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content details */}
                    <div className="p-6 flex flex-col justify-between flex-grow relative z-10">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest truncate max-w-[150px] font-mono">
                              {project.tags.join(" / ")}
                            </span>
                            <span className="text-[9px] px-2.5 py-0.5 rounded-lg border-2 border-[#1A1A1A] bg-yellow-100 text-[#1A1A1A] font-bold uppercase tracking-wider flex-shrink-0 font-mono shadow-[1px_1px_0_0_#1A1A1A]">
                              BUILDING
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:underline uppercase tracking-wide font-heading mt-1">
                            {project.name}
                          </h3>
                        </div>
                        <p className="text-xs text-zinc-700 font-medium leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      {/* Launch preview button */}
                      <div className="flex items-center justify-between pt-6 border-t-2 border-dashed border-[#1A1A1A]/10 mt-6">
                        <span className="text-xs font-bold text-zinc-600 group-hover:text-black uppercase tracking-wider font-mono">
                          PREVIEW BUILD
                        </span>
                        <div className="h-10 w-10 rounded-full border-2 border-[#1A1A1A] bg-stone-50 group-hover:bg-yellow-100 flex items-center justify-center text-[#1A1A1A] transition-all duration-300 shrink-0">
                          <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
