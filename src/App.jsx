// import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Career from "./pages/Career.jsx";
import Blog from "./pages/Blog.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
    
//   )
// );

function App() {
  // language
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");
  const [language, setLanguage] = useState(localStorage.getItem("language"));



  return (
    <>
    <Routes>
    <Route path="/" element={<Home language={language} onLanguage={setLanguage} />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="career" element={<Career />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}

export default App;
