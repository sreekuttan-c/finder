import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";

const App = () => {
  const location = useLocation();

  const isOwnerPath = location.pathname.includes("owner");

  useEffect(() => {
    // Load the fonts used across Home / Features / HowItWorks
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,560;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);

    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.fontFamily = "'Inter', system-ui, sans-serif";

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      {!isOwnerPath && <Navbar />}

      {/* Pages */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Features Page */}
        <Route path="/features" element={<Features />} />

        {/* How It Works Page */}
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </div>
  );
};

export default App;
