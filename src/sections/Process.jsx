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
    <section className="py-28 px-6 bg-transparent relative border-t-2 border-dashed border-[#1A1A1A]/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase block mb-2 font-mono">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1A1A] heading-display tracking-tight">
            Development Process
          </h2>
          <div className="h-1 w-12 bg-[#1A1A1A] mx-auto rounded-full mt-4"></div>
        </div>

        {/* 5-Column Workflow steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-stretch">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="sketch-box bg-white p-5 rounded-xl space-y-4 text-center md:text-left z-10 flex flex-col justify-between h-full shadow-[3px_3px_0_0_#1A1A1A] hover:shadow-[5px_5px_0_0_#1A1A1A] wobble-hover scribble-hover"
            >
              <div className="space-y-3">
                {/* Step label header */}
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-xs font-bold tracking-wider text-red-500 font-mono">
                    {step.num}
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#1A1A1A] uppercase font-heading">
                    {step.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[11px] sm:text-xs text-zinc-700 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Step Button icon */}
              <div className="h-10 w-10 rounded-full bg-stone-50 border-2 border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] hover:bg-yellow-100 hover:text-black transition-all duration-300 mx-auto md:mx-0 shadow-[2px_2px_0_0_#1A1A1A] hover:shadow-[3px_3px_0_0_#1A1A1A] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_#1A1A1A] shrink-0 hover-target cursor-pointer">
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
