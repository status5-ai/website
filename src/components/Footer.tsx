import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#eaeaeaff] text-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-4">Kontakt</h3>
            <p className="text-gray-600">Adrian Holick & Bela Bohlender</p>
            <a
              href="mailto:info@status5.ai"
              className="text-[#c00000] hover:text-red-400 transition-colors"
            >
              info@status5.ai
            </a>
          </div>
          <div className="text-right">
            <div className="text-3xl mb-2">
              <span className="font-extrabold text-[#c00000]">Status5</span>
              <span className="text-[#c00000]">.ai</span>
            </div>
            <a href='/impressum.html' className="mb-2 block text-sm text-[#c00000]">Impressum</a>
            <p className="text-sm text-gray-600">© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
