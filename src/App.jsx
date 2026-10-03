import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: -50, filter: 'blur(12px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: "power4.out" }
    )
    .fromTo(statsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: "power3.out" },
      "-=0.7"
    );

    gsap.to(visualRef.current, {
      scale: 1.6,
      y: 160,
      rotationX: 20,
      rotation: 8,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToStatsRef = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#030305] text-white mesh-bg selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative h-screen flex flex-col justify-between items-center p-8 md:p-12 select-none overflow-hidden"
      >
        {/* Top Headline */}
        <div className="text-center mt-6 z-10">
          <h1 
            ref={headlineRef} 
            className="text-3xl md:text-6xl font-black tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 opacity-0 drop-shadow-sm"
          >
            WELCOMEITZFIZZ
          </h1>
          <p className="text-xs md:text-sm text-gray-400 tracking-[0.4em] mt-3 uppercase font-medium">Scroll-Driven Cinematic Experience</p>
        </div>

        {/* Center Visual Element */}
        <div 
          ref={visualRef} 
          className="relative w-72 h-44 md:w-96 md:h-60 bg-gradient-to-br from-blue-600/80 via-indigo-600/60 to-purple-900/70 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_70px_rgba(37,99,235,0.4)] flex items-center justify-center transform scale-90 z-10 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10 pointer-events-none"></div>
          <span className="text-xl md:text-2xl font-black tracking-wider drop-shadow-md text-white/90 group-hover:scale-105 transition-transform duration-300">Visual Object</span>
        </div>

        {/* Bottom Impact Metrics / Statistics */}
        <div className="grid grid-cols-3 gap-4 md:gap-16 mb-4 w-full max-w-4xl text-center z-10">
          <div ref={addToStatsRef} className="opacity-0 bg-white/[0.02] border border-white/10 p-4 md:p-5 rounded-2xl backdrop-blur-xl shadow-xl hover:border-blue-500/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">98%</h3>
            <p className="text-[10px] md:text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">Satisfaction</p>
          </div>
          <div ref={addToStatsRef} className="opacity-0 bg-white/[0.02] border border-white/10 p-4 md:p-5 rounded-2xl backdrop-blur-xl shadow-xl hover:border-blue-500/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">4.9</h3>
            <p className="text-[10px] md:text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">Rating</p>
          </div>
          <div ref= {addToStatsRef} className="opacity-0 bg-white/[0.02] border border-white/10 p-4 md:p-5 rounded-2xl backdrop-blur-xl shadow-xl hover:border-blue-500/40 transition-colors duration-300">
            <h3 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">24/7</h3>
            <p className="text-[10px] md:text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">Support</p>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="h-screen bg-[#020203] flex flex-col items-center justify-center border-t border-white/5 relative">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
          Explore Next Sections
        </h2>
        <p className="text-gray-500 mt-3 text-xs md:text-sm tracking-[0.2em] uppercase">Designed for Recruiter Evaluation</p>
      </section>
    </div>
  );
}