import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

export default function ActiveBuilds() {
  const activeBuilds = projects.filter(project => project.status === "in-progress");

  if (activeBuilds.length === 0) return null;

  return (
    <section id="in-progress" className="py-28 px-6 bg-transparent relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-2">
            Active Builds
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white heading-display tracking-tight">
            In-Progress Work
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mt-2">
            These are active client projects or modules currently under development with live demo previews.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeBuilds.map((project, idx) => (
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
                  <div className="flex flex-col h-full overflow-hidden p-0 bg-[#16171a] border border-white/5 hover:border-white/15 transition-all duration-500 rounded-[2rem] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative">
                    
                    {/* Top image aspect preview */}
                    <div className="p-4 pb-0">
                      <div className="aspect-video w-full relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 shadow-md flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-center p-4">
                          <span className="text-4xl text-glow mb-2">⚙️</span>
                          <span className="text-xs font-bold tracking-widest text-white uppercase font-sans">{project.name}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content details */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest truncate max-w-[150px]">
                              {project.tags.join(" / ")}
                            </span>
                            <span className="text-[9px] px-2.5 py-0.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 font-bold uppercase tracking-wider flex-shrink-0">
                              BUILDING
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors duration-300 uppercase tracking-wide font-sans mt-1">
                            {project.name}
                          </h3>
                        </div>
                        <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      {/* Launch preview button */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
                        <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                          PREVIEW BUILD
                        </span>
                        <div className="h-10 w-10 rounded-full border border-white/10 group-hover:border-white/30 bg-transparent flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#121316] transition-all duration-500 shrink-0">
                          <svg className="lucide lucide-arrow-up-right h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
          ))}
        </div>

      </div>
    </section>
  );
}
