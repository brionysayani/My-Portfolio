import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFlagCheckered, FaPeopleGroup } from 'react-icons/fa6';
import { FaExternalLinkAlt, FaHandHoldingHeart, FaPlay, FaUtensils } from 'react-icons/fa';

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const BeyondCode: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="w-[95%] md:w-[85%] lg:w-[75%] relative bg-custom-purple border-4 border-l-0 border-black shadow-neo"
    >
      <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-6">
        <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">
          Beyond Code
        </h2>
        <button
          onClick={onToggle}
          className="bg-white text-black px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-10 pb-10">
              <article className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-neo">
                <img
                  src="/hyrox-volunteer.png"
                  alt="Briony volunteering with the HYROX podium finisher team"
                  className="w-full aspect-[3/2] object-cover border-b-4 border-black"
                />

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="bg-custom-yellow px-4 py-2 border-2 border-black rounded-full font-mono font-bold text-sm">
                      HYROX VOLUNTEER
                    </span>
                    <span className="bg-custom-green px-4 py-2 border-2 border-black rounded-full font-mono font-bold text-sm">
                      PODIUM FINISHER TEAM
                    </span>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-3xl font-shrikhand">HYROX</h3>
                      <p className="font-bold text-lg mt-1">World Series of Fitness Racing</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://hyrox.co.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 border-2 border-black font-bold w-fit hover:text-custom-yellow transition-colors"
                      >
                        Official Website <FaExternalLinkAlt className="text-xs" />
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1y29olwb9dLXmFkRy3xQ3L7NbcbMkvAVc/view"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-custom-red text-white px-4 py-2 border-2 border-black font-bold w-fit hover:bg-black transition-colors"
                      >
                        View Experience <FaPlay className="text-xs" />
                      </a>
                    </div>
                  </div>
                  <p className="font-medium text-lg leading-relaxed mb-6">
                    Volunteering at HYROX taught me how to manage responsibilities live and coordinate on the spot in a fast-paced event environment. As part of the podium finisher team, I helped keep the finish-area experience organized and handed flags to podium finishers.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-custom-blue border-2 border-black rounded-xl p-4">
                      <FaPeopleGroup className="text-2xl mt-1 flex-shrink-0" />
                      <p className="font-bold">Coordinated with the team and adapted to live event needs on the spot.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-custom-pink border-2 border-black rounded-xl p-4">
                      <FaFlagCheckered className="text-2xl mt-1 flex-shrink-0" />
                      <p className="font-bold">Managed flag handovers for podium finishers at the finish area.</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-neo mt-10">
                <img
                  src="/vaatsalyadham-community-service.png"
                  alt="Briony serving meals and spending time with residents at Vaatsalyadham Old Age Home"
                  className="w-full aspect-[4/3] object-cover border-b-4 border-black"
                />

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="bg-custom-pink px-4 py-2 border-2 border-black rounded-full font-mono font-bold text-sm">
                      COMMUNITY SERVICE
                    </span>
                    <span className="bg-custom-blue px-4 py-2 border-2 border-black rounded-full font-mono font-bold text-sm">
                      VASAI
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-3xl font-shrikhand">Vaatsalyadham Old Age Home</h3>
                    <a
                      href="https://vatsalyadham.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 border-2 border-black font-bold w-fit hover:text-custom-yellow transition-colors"
                    >
                      Visit Website <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>

                  <p className="font-medium text-lg leading-relaxed mb-6">
                    As part of my college community service, I volunteered at Vaatsalyadham Old Age Home in Vasai. I helped serve meals and spent meaningful time with residents—an experience that strengthened my empathy, patience, and sense of responsibility toward the community.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-custom-yellow border-2 border-black rounded-xl p-4">
                      <FaUtensils className="text-2xl mt-1 flex-shrink-0" />
                      <p className="font-bold">Supported residents during mealtimes by helping serve food.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-custom-green border-2 border-black rounded-xl p-4">
                      <FaHandHoldingHeart className="text-2xl mt-1 flex-shrink-0" />
                      <p className="font-bold">Connected with residents through attentive and compassionate interaction.</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default BeyondCode;
