import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Logos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="partners" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl"
          >
            <span className="font-extrabold text-[#c00000]">S5</span>
            <span className="text-[#c00000]">.ai</span>
          </motion.div>
          <span className="text-4xl text-gray">×</span>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="/hessen_ideen.png"
            alt="Hessen Ideen Logo"
            className="h-16 md:h-20"
          />
        </div>
      </div>
    </section>
  );
}
