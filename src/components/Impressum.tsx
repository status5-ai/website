import { motion } from "framer-motion";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative flex-grow bg-gray-50 overflow-hidden">
      <nav className="fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-3xl">
              <span className="font-extrabold text-[#c00000]">Status5</span>
              <span className="text-[#c00000]">.ai</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="mt-16 container mx-auto p-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h1 className="text-xl mt-2 mb-1 font-bold">Impressum</h1>

          <p>
            Bela Bohlender
            <br />
            Donaustr. 7<br />
            63571 Gelnhausen
          </p>

          <h2 className="text-lg mt-2 mb-1 font-bold">Kontakt</h2>
          <p>
            Telefon: +4915732314992
            <br />
            E-Mail: info@status5.ai
          </p>
        </motion.div>
      </div>
    </header>
  );
}
