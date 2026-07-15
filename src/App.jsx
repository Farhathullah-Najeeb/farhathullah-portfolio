import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SketchCanvas from './components/SketchCanvas';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ActiveBuilds from './sections/ActiveBuilds';
import Experience from './sections/Experience';
import Process from './sections/Process';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './styles/globals.css';

const sketchParticles = [
  { char: '✦', top: '3%', left: '10%', size: 'text-6xl text-zinc-400' },
  { char: '✦', top: '15%', left: '88%', size: 'text-5xl text-zinc-400' },
  { char: 'x', top: '10%', left: '50%', size: 'text-4xl text-zinc-300' },
  { char: '</>', top: '18%', left: '18%', size: 'text-5xl text-zinc-400/80 font-mono' },
  { char: 'o', top: '22%', left: '80%', size: 'text-4xl text-zinc-300' },
  { char: '✎', top: '26%', left: '8%', size: 'text-5xl text-zinc-400' },
  { char: '✦', top: '33%', left: '85%', size: 'text-6xl text-zinc-400' },
  { char: '{ }', top: '38%', left: '15%', size: 'text-5xl text-zinc-400/80 font-mono' },
  { char: '?', top: '44%', left: '82%', size: 'text-6xl text-red-500/40 font-bold' },
  { char: '+', top: '48%', left: '72%', size: 'text-4xl text-zinc-300' },
  { char: '✓', top: '53%', left: '8%', size: 'text-6xl text-green-600/40 font-bold' },
  { char: '✦', top: '59%', left: '92%', size: 'text-5xl text-zinc-400' },
  { char: '✗', top: '63%', left: '12%', size: 'text-6xl text-red-600/30 font-bold' },
  { char: '➔', top: '69%', left: '88%', size: 'text-5xl text-zinc-400' },
  { char: 'o', top: '74%', left: '22%', size: 'text-4xl text-zinc-300' },
  { char: '✏', top: '80%', left: '82%', size: 'text-5xl text-zinc-400' },
  { char: '✦', top: '87%', left: '6%', size: 'text-6xl text-zinc-400' },
  { char: 'x', top: '93%', left: '88%', size: 'text-4xl text-zinc-300' },
  { char: '★', top: '8%', left: '82%', size: 'text-5xl text-yellow-500/30' },
  { char: '✦', top: '28%', left: '94%', size: 'text-5xl text-zinc-400' },
  { char: '[ ]', top: '48%', left: '5%', size: 'text-5xl text-zinc-400/80 font-mono' },
  { char: '!', top: '56%', left: '85%', size: 'text-7xl text-zinc-400/70 font-bold' },
  { char: '★', top: '67%', left: '18%', size: 'text-5xl text-yellow-500/30' },
  { char: '✦', top: '78%', left: '94%', size: 'text-5xl text-zinc-400' },
  { char: '✎', top: '91%', left: '18%', size: 'text-5xl text-zinc-400' },
];

export default function App() {
  useEffect(() => {
    // Custom cursor movement
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', move);

    // Hover scale effects
    const hoverElements = document.querySelectorAll('.hover-target, a, button, input, textarea, select');
    const onEnter = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
      cursor.style.background = 'rgba(26, 26, 26, 0.1)';
      cursor.style.borderColor = '#1A1A1A';
    };
    const onLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.0)';
      cursor.style.background = 'transparent';
      cursor.style.borderColor = '#1A1A1A';
    };

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1A1A1A] font-sans selection:bg-yellow-200 selection:text-[#1A1A1A] antialiased relative graph-paper">
      {/* Interactive Sketch Canvas Overlay */}
      <SketchCanvas />

      {/* Custom Cursor */}
      <div id="cursor" />

      {/* Navigation header */}
      <Navbar />

      {/* Main sections container */}
      <main className="flex-grow relative z-10 overflow-x-hidden">
        
        {/* Background drifting paper sheets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Drifting sketch sheets */}
          <div className="absolute top-[8%] left-[-10%] w-[380px] sm:w-[480px] h-[250px] sm:h-[300px] border-2 border-[#1A1A1A] bg-white rounded-[1.5rem] shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] animate-drift-1 opacity-20"></div>
          <div className="absolute top-[26%] right-[-12%] w-[420px] sm:w-[520px] h-[300px] sm:h-[350px] border-2 border-[#1A1A1A] bg-[#FEFDB8] rounded-[1.5rem] shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] animate-drift-2 opacity-20"></div>
          <div className="absolute top-[48%] left-[-15%] w-[480px] sm:w-[620px] h-[280px] sm:h-[320px] border-2 border-[#1A1A1A] bg-[#E0F2FE] rounded-[2rem] shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] animate-drift-3 opacity-20"></div>
          <div className="absolute top-[68%] right-[-10%] w-[400px] sm:w-[500px] h-[280px] sm:h-[320px] border-2 border-[#1A1A1A] bg-[#FFE4E6] rounded-[1.5rem] shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] animate-drift-4 opacity-20"></div>
          <div className="absolute top-[86%] left-[5%] w-[450px] sm:w-[580px] h-[320px] sm:h-[360px] border-2 border-[#1A1A1A] bg-white rounded-[2rem] shadow-[4px_4px_0_0_rgba(26,26,26,0.15)] animate-drift-5 opacity-20"></div>
          
          {/* Sketchy floating particles */}
          {sketchParticles.map((p, idx) => (
            <motion.span
              key={idx}
              animate={{
                y: [0, -30, 0],
                x: [0, idx % 2 === 0 ? 20 : -20, 0],
                rotate: [0, idx % 2 === 0 ? 360 : -360]
              }}
              transition={{
                duration: 9 + (idx % 6) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (idx % 4) * 0.4
              }}
              className={`absolute pointer-events-none opacity-45 font-sans font-bold select-none ${p.size}`}
              style={{ top: p.top, left: p.left }}
            >
              {p.char}
            </motion.span>
          ))}
        </div>

        {/* Sections in exact order */}
        <Hero />
        <Skills />
        <Projects />
        <ActiveBuilds />
        <Experience />
        <Process />
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
