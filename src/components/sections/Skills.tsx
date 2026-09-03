import React from 'react';

const SkillCategory = ({ title, skills, color }: { title: string, skills: string[], color: string }) => (
  <div className={`bg-white border-4 border-black p-5 rounded-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}>
    <h3 className={`font-shrikhand text-xl mb-3 ${color} inline-block px-2 border-2 border-black rounded-md `}>
        {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full border-2 border-black text-sm font-bold hover:bg-custom-green">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-4 max-w-7xl mx-auto bg-custom-pink border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo ">
        <h2 className="text-3xl font-shrikhand">SKILLS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory 
            title="Languages" 
            color="bg-custom-pink"
            skills={['Python', 'C++']} 
        />
        <SkillCategory 
            title="AI & Automation" 
            color="bg-custom-blue"
            skills={['LLMs', 'AI Agents', 'Voice AI', 'Prompt Engineering', 'TinyML']} 
        />
        <SkillCategory 
            title="Platforms & Integrations" 
            color="bg-custom-green"
            skills={['Retell AI', 'Vapi', 'Whisper', 'Gemini 2.0 Flash', 'Third-party APIs']} 
        />
        <SkillCategory 
            title="Automation Tools" 
            color="bg-custom-yellow"
            skills={['n8n', 'MCP', 'Webhooks', 'Gmail', 'Google Sheets']} 
        />
        <SkillCategory 
            title="Core Concepts" 
            color="bg-purple-300"
            skills={['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks']} 
        />
        <SkillCategory 
            title="Strengths" 
            color="bg-custom-red"
            skills={['Logical Thinking', 'Problem Solving', 'Team Collaboration', 'Communication', 'Quick Learner']} 
        />

      </div>
    </section>
  );
};

export default Skills;
