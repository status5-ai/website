import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logos from "./components/Logos";
import Problem from "./components/Problem";
import Solutions from "./components/Solutions";
import "./index.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import Newsletter from "./components/Newsletter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="font-montserrat overflow-hidden">
      <Header />
      <main>
        <Problem />
        <Solutions />
        <Logos />
        <Newsletter />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
