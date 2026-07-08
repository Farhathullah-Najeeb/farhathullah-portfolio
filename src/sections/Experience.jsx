import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-transparent relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-2">
            History
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-white uppercase heading-display tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-12 bg-zinc-700 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Vertical Timeline Divider Line & Cards */}
        <div className="relative border-l border-white/5 ml-4 space-y-12">
          {experience.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 group"
            >
              {/* Timeline dot brief indicator */}
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/5 bg-[#121316] text-zinc-500 group-hover:border-white/20 group-hover:text-white transition-all duration-300">
                <FiBriefcase className="h-2.5 w-2.5" />
              </span>

              {/* Card wrapper */}
              <div className="premium-card bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 group-hover:border-white/10 p-6 transition-all duration-500 rounded-2xl">
                
                {/* Job Title and Date Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors duration-300 uppercase tracking-wider">
                      {job.role}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  
                  {/* Period tag */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 bg-white/5 border border-white/5 px-3 py-1 rounded-full w-fit shrink-0">
                    <FiCalendar className="h-3.5 w-3.5" />
                    {job.period}
                  </div>
                </div>

                {/* Short job location descriptor */}
                <p className="text-xs sm:text-sm text-zinc-400 mb-4 leading-relaxed font-medium">
                  {job.location}
                </p>

                {/* Points list */}
                <ul className="space-y-2">
                  {job.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                      <span className="mr-2 text-zinc-600 select-none">•</span>
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
