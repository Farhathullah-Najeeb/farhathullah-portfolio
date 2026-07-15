import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 250,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-28 px-6 bg-transparent relative border-t-2 border-dashed border-[#1A1A1A]/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase block mb-2 font-mono">
            History
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1A1A] heading-display tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-12 bg-[#1A1A1A] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Vertical Timeline Divider Line & Cards */}
        <div ref={containerRef} className="relative ml-4 space-y-12">
          {/* Faint wavy guide path */}
          <svg 
            className="absolute left-[-20px] top-0 bottom-0 w-[40px] h-full pointer-events-none opacity-20"
            viewBox="0 0 100 1000" 
            preserveAspectRatio="none"
            fill="none"
          >
            <path 
              d="M 50,0 C 40,50 60,100 50,150 C 40,200 60,250 50,300 C 40,350 60,400 50,450 C 40,500 60,550 50,600 C 40,650 60,700 50,750 C 40,800 60,850 50,900 C 40,950 60,1000 50,1000"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Active drawn wavy path (solid red ink!) */}
          <svg 
            className="absolute left-[-20px] top-0 bottom-0 w-[40px] h-full pointer-events-none"
            viewBox="0 0 100 1000" 
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path 
              d="M 50,0 C 40,50 60,100 50,150 C 40,200 60,250 50,300 C 40,350 60,400 50,450 C 40,500 60,550 50,600 C 40,650 60,700 50,750 C 40,800 60,850 50,900 C 40,950 60,1000 50,1000"
              stroke="#dc2626"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: scaleY }}
            />
          </svg>
          {experience.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0.1, x: -25, scale: 0.94, rotate: idx % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: idx % 2 === 0 ? -0.8 : 0.8 }}
              viewport={{ once: false, margin: "-10% 0px -15% 0px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative pl-8 group"
            >
              {/* Timeline dot brief indicator */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] group-hover:bg-yellow-100 transition-all duration-300">
                <FiBriefcase className="h-2.5 w-2.5" />
              </span>

              {/* Card wrapper */}
              <div className="sketch-box bg-white p-6 rounded-xl shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-[7px_7px_0_0_#1A1A1A] wobble-hover scribble-hover curled-corner">
                
                {/* Job Title and Date Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-[#1A1A1A] heading-display uppercase tracking-wider">
                      {job.role}
                    </h3>
                    <p className="text-sm font-bold text-zinc-600">
                      {job.company}
                    </p>
                  </div>
                  
                  {/* Period tag */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700 bg-stone-50 border-2 border-[#1A1A1A] px-3 py-1 rounded-lg w-fit shrink-0 shadow-[2px_2px_0_0_#1A1A1A] font-mono">
                    <FiCalendar className="h-3.5 w-3.5" />
                    {job.period}
                  </div>
                </div>

                {/* Short job location descriptor */}
                <p className="text-xs sm:text-xs text-zinc-500 mb-4 leading-relaxed font-bold font-mono">
                  {job.location}
                </p>

                {/* Points list */}
                <ul className="space-y-2">
                  {job.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                      <span className="mr-2 text-red-500 font-bold select-none">•</span>
                      <span className="flex-1 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
