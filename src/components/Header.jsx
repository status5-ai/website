import { motion } from 'framer-motion';

export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen bg-[#eaeaeaff] overflow-hidden">
      <img
        className="absolute w-full h-full object-cover scale-110 blur-sm"
        src="/bg.jpg"
      />

      <img
        className="absolute lg:left-auto left-[50%] lg:transform-none -translate-x-[50%] lg:bottom-16 bottom-4 lg:right-16 md:w-[18rem] w-[16rem]"
        src="/3d-vis.png"
      />

      <nav className="fixed top-0 w-full z-50 bg-white/95 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl">
              <span className="font-extrabold text-[#c00000]">Status5</span>
              <span className="text-[#c00000]">.ai</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('problem')}
                className="text-gray-600 hover:text-[#c00000] transition-colors"
              >
                Problem
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-gray-600 hover:text-[#c00000] transition-colors"
              >
                Lösungen
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-[#c00000] transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative container mx-auto px-6 h-screen flex items-center -translate-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
            KI im Einsatz
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Wir unterstützen Einsatzkräfte durch KI-basierte Transkription,
            Analyse, und Darstellung von Einsatzinformationen aus Funksprüchen.
          </p>
        </motion.div>
      </div>
    </header>
  );
}
