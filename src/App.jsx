import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Career from "./pages/Career.jsx";
import Blog from "./pages/Blog.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import ServicesPage from "./pages/ServicesPage.jsx";

//animation
import AOS from "aos";
import "aos/dist/aos.css";

import "react-lazy-load-image-component/src/effects/blur.css";

function App() {
  // animation library
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // language
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");

  const [language, setLanguage] = useState(localStorage.getItem("language"));

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="about"
          element={<About language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="services"
          element={
            <ServicesPage language={language} setLanguage={setLanguage} />
          }
        />
        <Route
          path="portfolio"
          element={<Portfolio language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="career"
          element={<Career language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="blog"
          element={<Blog language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="portfolio"
          element={<Blog language={language} setLanguage={setLanguage} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
