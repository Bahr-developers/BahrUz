import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";

// Links
import { Links } from "../utils/links";

function Header() {
  // theme
  const getTheme = localStorage.getItem("theme");
  const [mode, setMode] = useState(getTheme || "light");
  const element = document.documentElement;

  // Hamburger menu
  const [openMenu, setOpenMenu] = useState(false);

  // mode
  useEffect(() => {
    switch (mode) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  }, [mode]);

  // language
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");
  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const handleLanguageChange = (e) => {
    console.log(e);
    localStorage.setItem("language", e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <header className="py-5">
      <div className="xl:container mx-auto px-10">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <img className="w-16 rounded-full" src={logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-4 md:gap-10">
            <div className=" items-center gap-6 hidden md:flex">
              {Links.map((link) => {
                return (
                  <NavLink
                    key={link.id}
                    to={link.to}
                    className="py-1 px-2 hover:bg-slate-400 rounded hover:text-white"
                  >
                    <b>{link.content[language]}</b>
                  </NavLink>
                );
              })}
            </div>
            <button
              className="pt-2 text-xl"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              <ion-icon
                name={`${mode === "light" ? "sunny" : "moon"}`}
              ></ion-icon>
            </button>
            <div className="bg-white py-1 px-2 rounded cursor-pointer dark:bg-transparent hidden md:block">
              <select
                onChange={handleLanguageChange}
                className="bg-transparent w-full outline-none cursor-pointer"
                value={language}
              >
                <option value="uz">uz</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
              </select>
            </div>
            <button className="text-3xl text-black flex items-center  md:hidden dark:text-white bg-[#ffffff29] rounded px-1 py-1">
              <ion-icon
                name="menu"
                onClick={() => setOpenMenu(true)}
              ></ion-icon>
            </button>
          </div>
        </nav>
        {/* menu */}
        <div
          className={`fixed top-0 left-0 w-[50%] bg-white min-h-screen  transition-w  ease-in-out  duration-500 md:hidden dark:bg-slate-700  dark:text-white ${
            openMenu ? "w-full" : "w-0 opacity-0 pointer-events-none"
          }`}
        >
          <button className="text-3xl flex items-center absolute top-2 right-2  bg-slate-400 dark:text-white rounded px-1 py-1 text-white ">
            <ion-icon
              name="close"
              onClick={() => setOpenMenu(false)}
            ></ion-icon>
          </button>
          <div>
            <div className="py-1 px-2 rounded cursor-pointer dark:bg-slate-500 mt-16 max-w-[120px] mx-6 bg-slate-400 text-white">
              <select
                onChange={handleLanguageChange}
                className="bg-transparent w-full outline-none cursor-pointer"
                value={language}
              >
                <option value="uz">uz</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
              </select>
            </div>
            {Links.map((link) => {
              return (
                <Link
                  to={link.to}
                  key={link.id}
                  className="text-black block dark:text-white px-6 py-4"
                  onClick={() => setOpenMenu(false)}
                >
                  {link.content[language]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
