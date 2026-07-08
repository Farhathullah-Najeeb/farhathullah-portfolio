import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ActiveBuilds from './sections/ActiveBuilds';
import Experience from './sections/Experience';
import Process from './sections/Process';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './styles/globals.css';

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
      cursor.style.transform = 'translate(-50%, -50%) scale(2.0)';
      cursor.style.background = 'rgba(255, 255, 255, 0.4)';
    };
    const onLeave = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.0)';
      cursor.style.background = '#ffffff';
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
    <div className="min-h-full flex flex-col bg-[#121316] text-[#f4f4f5] font-sans selection:bg-white/10 selection:text-white antialiased relative">
      {/* Custom Cursor */}
      <div id="cursor" />

      {/* Navigation header */}
      <Navbar />

      {/* Main sections container */}
      <main className="flex-grow relative z-10 overflow-x-hidden">
        
        {/* Background blobs & drifting glassmorphic panels */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Pulsing blur spheres */}
          <div className="absolute top-[5%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-indigo-500/[0.035] blur-[80px] sm:blur-[120px] animate-blob-1"></div>
          <div className="absolute top-[35%] right-[-15%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-teal-500/[0.03] blur-[100px] sm:blur-[150px] animate-blob-2"></div>
          <div className="absolute top-[70%] left-[-5%] w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full bg-violet-500/[0.035] blur-[90px] sm:blur-[130px] animate-blob-3"></div>
          
          {/* Drifting glassmorphic panels */}
          <div className="absolute top-[8%] left-[-10%] w-[380px] sm:w-[480px] h-[250px] sm:h-[300px] border border-white/[0.1] bg-white/[0.02] rounded-[3rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] animate-drift-1 backdrop-blur-[3px]"></div>
          <div className="absolute top-[26%] right-[-12%] w-[420px] sm:w-[520px] h-[300px] sm:h-[350px] border border-white/[0.09] bg-white/[0.015] rounded-[3rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] animate-drift-2 backdrop-blur-[3px]"></div>
          <div className="absolute top-[48%] left-[-15%] w-[480px] sm:w-[620px] h-[280px] sm:h-[320px] border border-white/[0.08] bg-white/[0.012] rounded-[3.5rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] animate-drift-3 backdrop-blur-[2px]"></div>
          <div className="absolute top-[68%] right-[-10%] w-[400px] sm:w-[500px] h-[280px] sm:h-[320px] border border-white/[0.1] bg-white/[0.02] rounded-[2.5rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] animate-drift-4 backdrop-blur-[3px]"></div>
          <div className="absolute top-[86%] left-[5%] w-[450px] sm:w-[580px] h-[320px] sm:h-[360px] border border-white/[0.08] bg-white/[0.01] rounded-[3.5rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] animate-drift-5 backdrop-blur-[2px]"></div>
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
