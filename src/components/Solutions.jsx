import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const solutions = [
  {
    title: 'Transkriptions Service',
    description: 'Automatische Transkription der Funksprüchen',
    image: '/transkription.png',
  },
  {
    title: 'Einsatz-Analyse Service',
    description: 'KI-gestützte Analyse der Einsatzinformationen',
    image: '/einsatz-analyse.jpg',
  },
  {
    title: '3D Visualisierungs Modul',
    description:
      'Übersichtliche Darstellung aller mittels 3D Karten af Mobil Geräten, PCs, und AR Brillen.',
    image: '/3d-vis.png',
  },
];

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="solutions" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[#c00000] text-center mb-16"
        >
          Unsere Lösungen
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="flex flex-col items-center w-full">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className={`h-48 object-contain ${
                    index == 1 ? 'shadow-lg' : ''
                  }`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-gray-800 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          {['Ergänzend', 'Anwenderfreundlich', 'Entlastend'].map((benefit) => (
            <span
              key={benefit}
              className="bg-[#c00000] text-white px-6 py-2 rounded-full font-extrabold"
            >
              {benefit}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
