import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import Header from './components/Header';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import Logos from './components/Logos';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="font-montserrat">
      <Header />
      <main>
        <Problem />
        <Solutions />
        <Logos />
      </main>
      <Footer />
    </div>
  );
}

export default App;