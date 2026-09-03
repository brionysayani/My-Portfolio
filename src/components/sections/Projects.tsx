import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  tools: string[];
  description: string[];
  link: string;
  liveLink?: string;
  color: string;
}

const ProjectCard = ({ title, tools, description, link, liveLink, color }: ProjectCardProps) => (
  <div className={`bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col`}>
    
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    
    <div className="mt-4 flex justify-between items-start mb-4 gap-2">
        <div>
            <h3 className="text-2xl font-shrikhand leading-tight">{title}</h3>
            {liveLink && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse inline-block mt-2">
                FEATURED
            </span>
            )}
        </div>
        <div className="flex gap-2 flex-shrink-0">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" className="bg-custom-green text-black border-2 border-black p-2 rounded-lg hover:bg-green-400 transition-colors" title="Live Demo">
                  <FaExternalLinkAlt />
              </a>
            )}
            <a href={link} target="_blank" rel="noreferrer" className="bg-black text-white border-2 border-black p-2 rounded-lg hover:bg-gray-800 transition-colors" title="Source Code">
                <FaGithub />
            </a>
        </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((t: string) => (
            <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">
                {t}
            </span>
        ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
        {description.map((point: string, i: number) => (
            <li key={i}>{point}</li>
        ))}
    </ul>
  </div>
);

const Projects = () => {
    const projects = [
      {
        title: "AI Recruitment Platform",
        color: "bg-custom-blue",
        tools: ["React", "TypeScript", "Python", "Supabase"],
        link: "https://github.com/brionysayani/AI_Recuritment_Platform",
        liveLink: "https://ai-recuritment-platform.vercel.app",
        description: [
          "Built an intelligent hiring management platform streamlining recruitment processes.",
          "Integrated AI-powered CV evaluation, candidate tracking, and project management."
        ]
      },
      {
        title: "LinkedIn Profile API",
        color: "bg-custom-green",
        tools: ["API", "Backend", "Data Processing"],
        link: "https://github.com/brionysayani/LinkedIn-Profile-API",
        liveLink: "https://linked-in-profile-api.vercel.app/",
        description: [
          "Created a backend API service for managing and accessing LinkedIn profile data.",
          "Designed efficient data structures for profile retrieval and processing."
        ]
      },
      {
        title: "Kharcha Tracker",
        color: "bg-custom-pink",
        tools: ["Python", "Jupyter Notebook", "Data Visualization"],
        link: "https://github.com/brionysayani/Kharcha-Tracker",
        description: [
          "Developed a Jupyter Notebook project to track and visualize monthly expenses.",
          "Implemented data processing and visualization logic using Python."
        ]
      },
      {
        title: "Algorithmic Trading Bot",
        color: "bg-custom-purple", 
        tools: ["Python", "Automation", "CCXT", "Crypto Markets"],
        link: "https://github.com/brionysayani", 
        description: [
          "Built an automated crypto trading bot using an SMA crossover strategy.",
          "Integrated the CCXT library for exchange connectivity and real-time market data handling."
        ]
      },
      {
        title: "CPU Scheduling Algorithm Simulator",
        color: "bg-custom-blue",
        tools: ["C++", "Operating Systems", "Algorithms"],
        link: "https://github.com/brionysayani", 
        description: [
          "Designed and implemented a simulator for CPU scheduling algorithms.",
          "Built a menu-driven interface for algorithm selection and user interaction.",
          "Calculated average turnaround time, waiting time, response time, and throughput."
        ]
      }
    ];

  return (
    <section id="projects" className="py-10 px-4 mx-auto max-w-7xl bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
            <h2 className="text-3xl font-shrikhand text-white">PROJECTS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
