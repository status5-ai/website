import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Problem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="problem" ref={ref} className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-[#c00000] text-center mb-16"
      >
        Das Problem
      </motion.h2>
      <div className="relative">
        <img
          src="/problem.jpg"
          alt="Problem Hintergrund"
          className="-z-10 absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-24 py-12 container w-full mx-auto px-6"
        >
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-extrabold text-gray-800 mb-2">
              Informationsverlust
            </h3>
            <p>
              Durch manuelle Funkspruchauswertung gehen wichtige Details
              verloren
            </p>
          </div>

          <div className="bg-white bg-opacity-90 p-6 md:col-start-2 row-start-2 rounded-lg shadow-lg">
            <h3 className="text-xl font-extrabold text-gray-800 mb-2">
              Zeitverzögerung
            </h3>
            <p>Kritische Verzögerungen bei der Informationsverarbeitung</p>
          </div>

          <div className="bg-white bg-opacity-90 p-6 col-start-1 row-start-3 rounded-lg shadow-lg md:mb-32">
            <h3 className="text-xl font-extrabold text-gray-800 mb-2">
              Unübersichtlichkeit
            </h3>
            <p>Komplexe Einsatzinformationen sind schwer zu überblicken</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
