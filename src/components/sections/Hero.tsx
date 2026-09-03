import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaEnvelope, FaTwitter } from 'react-icons/fa';
import ContactModal from '../ui/ContactModal';
import MiniTerminal from '../ui/MiniTerminal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">


      <div className="w-full md:w-1/3 bg-white border-2 border-b-4 border-r-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden">

        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200/50 w-20 h-6 rotate-[-5deg] border border-gray-400"></div>


        <div className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 flex items-center justify-center text-4xl overflow-hidden">
          <span className="font-shrikhand text-5xl" aria-label="Briony Sayani initials">BS</span>

        </div>

        <h1 className="text-4xl font-shrikhand mb-1">BRIONY SAYANI</h1>
        <div className="bg-black text-white px-3 py-1 font-mono text-sm rounded-md mb-4 rotate-1">
          AI_AUTOMATION_ENGINEER()
        </div>

        <div className="w-full space-y-3 text-left font-bold text-sm font-mono border-t-2 border-black pt-4">
          <div>
            <span className="bg-custom-yellow px-1 border border-black mr-2">[LOCATION]</span>
            BENGALURU, INDIA
          </div>
          <div>
            <span className="bg-custom-green px-1 border border-black mr-2">[STATUS]</span>
            2026 GRADUATE
          </div>
          <div>
            <span className="bg-custom-blue px-1 border border-black mr-2">[MISSION]</span>
            Build. Automate. Innovate.
          </div>
        </div>


        <div className="w-full flex flex-col gap-3 mt-6">
          <a
            href="mailto:brionysayani51@gmail.com?subject=Resume%20Request"
            className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaDownload /> REQUEST_RESUME
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-custom-red text-white w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaEnvelope /> CONTACT ME
          </button>
        </div>


        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center">
          <a href="mailto:brionysayani51@gmail.com" aria-label="Email Briony" className="hover:scale-110 transition-transform text-red-500"><FaEnvelope /></a>
          <a href="https://github.com/brionysayani" target="_blank" rel="noreferrer" aria-label="Briony's GitHub" className="hover:scale-110 transition-transform"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/briony-sayani" target="_blank" rel="noreferrer" aria-label="Briony's LinkedIn" className="hover:scale-110 transition-transform text-blue-700"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/briony51/" target="_blank" rel="noreferrer" aria-label="Briony's LeetCode" className="hover:scale-110 transition-transform text-orange-600"><FaCode /></a>
          <a href="https://x.com/brionysayani" target="_blank" rel="noreferrer" aria-label="Briony's X profile" className="hover:scale-110 transition-transform text-black"><FaTwitter /></a>
        </div>
      </div>


      <div className="w-full md:w-2/3 flex flex-col gap-6" id="about">

        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-2 border-b-4 border-r-4 border-black shadow-neo">
          <h2 className="text-4xl font-shrikhand mb-6">Hi people!</h2>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I'm Briony, a <span className="font-bold bg-white px-1 border border-black">2026 B.Tech graduate in Electronics &amp; Instrumentation Engineering from Nirma University</span> and a former <span className="font-bold bg-white px-1 border border-black">AI Automation Intern at Fortiv Solutions</span>.
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I'm excited to connect with people building thoughtful software, AI products, and practical automation solutions.
          </p>
          <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm ">
            🚀 Open to Software Engineering and Research opportunities
          </div>
        </div>

        <MiniTerminal />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default Hero;
