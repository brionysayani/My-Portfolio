import React from 'react';

const highlights = [
  '2026 B.Tech graduate from Nirma University',
  'Former AI Automation Intern at Fortiv Solutions',
  'Remote internship · January 2026 to June 2026',
  'Building with LLMs, AI agents, voice AI, Python, and automation',
];

const Marquee = () => {
  return (
    <div className="bg-custom-yellow border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10">
      <div className="animate-marquee inline-block font-sans font-bold text-xl uppercase tracking-wide">
        {highlights.map((highlight) => (
          <span key={highlight} className="mx-4">{highlight} • </span>
        ))}
      </div>

      <div className="animate-marquee inline-block font-sans font-bold text-xl uppercase tracking-wide absolute top-3 left-0" aria-hidden="true">
        {highlights.map((highlight) => (
          <span key={highlight} className="mx-4">{highlight} • </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
