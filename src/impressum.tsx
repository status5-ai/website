import React from "react";
import ReactDOM from "react-dom/client";
import Impressum from "./components/Impressum";
import Footer from "./components/Footer";
import './index.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="font-montserrat overflow-hidden flex flex-col min-h-screen">
      <Impressum />
      <Footer />
    </div>
  </React.StrictMode>
);
