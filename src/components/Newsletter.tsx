import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Newsleter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="newsletter" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl flex-grow basis-0 flex items-center justify-center"
          >
            Sign up for Our Newsleter
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="w-full flex-grow basis-0"
          >
            <form
              method="post"
              action="https://listmonk.status5.ai/subscription/form"
            >
              <div className="flex flex-col gap-4">
                <input type="hidden" name="nonce" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail"
                  className="bg-gray-50 px-4 py-2 shadow rounded focus:outline-[#c00000]"
                />

                <input
                  id="9d6b9"
                  type="checkbox"
                  className="hidden"
                  name="l"
                  checked
                  readOnly
                  value="9d6b90ea-f0f7-4d35-861d-7cc93b7761fa"
                />
                <div className="gap-4 flex flex-col sm:flex-row w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name (optional)"
                    className="bg-gray-50 px-4 py-2 shadow rounded flex-grow focus:outline-[#c00000]"
                  />

                  <button
                    type="submit"
                    className="shadow text-white px-4 py-2 rounded hover:text-black hover:bg-white bg-[#c00000] transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
