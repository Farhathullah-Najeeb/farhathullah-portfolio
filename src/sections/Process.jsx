import { motion } from 'framer-motion';
import { FiSearch, FiTarget, FiPenTool, FiCode } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

export default function Process() {
  const steps = [
    {
      num: "01",
      label: "Analyze",
      desc: "Scoping mobile app parameters, user flows, database architecture, and payment details in detail.",
      icon: <FiSearch className="h-4.5 w-4.5" />
    },
    {
      num: "02",
      label: "Architect",
      desc: "Designing BLoC/Riverpod states, local SQLite/Hive database sync, and native iOS/Android bridge layers.",
      icon: <FiTarget className="h-4.5 w-4.5" />
    },
    {
      num: "03",
      label: "Construct",
      desc: "Coding custom Dart features, responsive widgets, animation components, and fintech libraries.",
      icon: <FiPenTool className="h-4.5 w-4.5" />
    },
    {
      num: "04",
      label: "Integrate",
      desc: "Integrating payment gateways (Stripe, Razorpay), custom REST APIs, and real-time WebSockets.",
      icon: <FiCode className="h-4.5 w-4.5" />
    },
    {
      num: "05",
      label: "Deploy",
      desc: "Managing Fastlane triggers, testing via TestFlight, and publishing live to Google Play & App Store.",
      icon: <FaRocket className="h-4.5 w-4.5" />
    }
  ];

  return (
    <section className="py-28 px-6 bg-transparent relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase block mb-2">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-white uppercase heading-display tracking-tight">
            Development Process
          </h2>
          <div className="h-1 w-12 bg-zinc-700 mx-auto rounded-full mt-4"></div>
        </div>

        {/* 5-Column Workflow steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-4 text-center md:text-left z-10"
            >
              {/* Step label header */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-xs font-bold tracking-wider text-zinc-500 font-mono">
                  {step.num}
                </span>
                <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  {step.label}
                </span>
              </div>

              {/* Description */}
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-medium">
                {step.desc}
              </p>

              {/* Step Button icon */}
              <div className="h-11 w-11 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all duration-300 mx-auto md:mx-0 hover-target">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
