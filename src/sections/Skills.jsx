import { motion } from 'framer-motion';
import { 
  FiSmartphone, FiCode, FiActivity, 
  FiLayers, FiDatabase, FiAward, 
  FiCpu, FiTrendingUp, FiCheckCircle
} from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { skills, education, certifications } from '../data/portfolioData';

export default function Skills() {
  const capabilityBlocks = [
    {
      title: "Mobile Development",
      desc: "Architecting high-performance cross-platform Flutter applications using Dart, Swift, and Kotlin integrations.",
      icon: <FiSmartphone className="h-5 w-5" />
    },
    {
      title: "State Management",
      desc: "Structuring clean, testable application state layers using BloC, Provider, Riverpod, and GetX frameworks.",
      icon: <FiLayers className="h-5 w-5" />
    },
    {
      title: "Database Design",
      desc: "Configuring robust secure offline databases, sync pipelines, and schemas with SQLite, Hive, and Isar.",
      icon: <FiDatabase className="h-5 w-5" />
    },
    {
      title: "Fintech & APIs",
      desc: "Integrating payment processors (Stripe, Razorpay, NomuPay) and custom RESTful/GraphQL communication endpoints.",
      icon: <FiCpu className="h-5 w-5" />
    },
    {
      title: "Performance tuning",
      desc: "Diagnosing garbage collection, layout shifts, frame rendering speeds, and memory allocations.",
      icon: <FiTrendingUp className="h-5 w-5" />
    },
    {
      title: "Store Deployments",
      desc: "Managing App Store Connect, Google Play Console release triggers, certificates, and fastlane pipelines.",
      icon: <FiCheckCircle className="h-5 w-5" />
    }
  ];

  // Flattened tools tags
  const allTechTags = Array.from(new Set(skills.flatMap(s => s.tags)));

  return (
    <section id="about" className="py-28 px-6 bg-transparent relative border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Main Grid for Capabilities & Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Core Capabilities */}
          <div id="capabilities" className="lg:col-span-7 space-y-12">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                Skills
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white heading-display tracking-tight">
                Core Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {capabilityBlocks.map((cap, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="space-y-3"
                >
                  <div className="h-10 w-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white">
                    {cap.icon}
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Tools & Technologies */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase">
                Tools & Technologies
              </h3>
              <div className="premium-card bg-white/[0.01] border border-white/5 rounded-2xl p-6">
                <div className="flex flex-wrap gap-2.5">
                  {allTechTags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center rounded-full px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider transition-all duration-300 border border-white/5 bg-white/5 text-zinc-300 hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full Width Certifications & Education Section */}
        <div className="space-y-6 pt-10 border-t border-white/5">
          <h3 className="text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase">
            Certifications & Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Education */}
            {education.map((edu, idx) => (
              <div key={idx} className="premium-card bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex items-start gap-4 h-full">
                <div className="h-9 w-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <FaGraduationCap className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-zinc-400">
                    {edu.institution} • {edu.year}
                  </p>
                </div>
              </div>
            ))}

            {/* Certifications */}
            {certifications.map((cert, idx) => (
              <div key={idx} className="premium-card bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex items-start gap-4 h-full">
                <div className="h-9 w-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <FiAward className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-zinc-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
