import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

import logo from "../assets/logo.jpg";
// Links
import { Links } from "../utils/links";
import { useEffect, useState } from "react";

function Header({ language, setLanguage }) {
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

  const handleLanguageChange = (e) => {
    localStorage.setItem("language", e.target.value);
    setLanguage(e.target.value);
    setOpenMenu(false);
  };

  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass =
      scrollTop >= 50 ? "shadow-md backdrop-blur-[20px] z-10" : "";
    setSticky(stickyClass);
  };

  const location = useLocation();

  return (
    <>
      <header
        className={
          `py-5 w-full  top-0  left-0 px-3 md:px-10 ${
            location.pathname === "/" ? "fixed" : "sticky"
          }` +
          " " +
          sticky
        }
        id="header"
      >
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <Link to="/">
              <img
                className="w-16 rounded-full shadow-md"
                src={logo}
                alt="logo"
              />
            </Link>
            <div className="md:flex hidden items-center gap-5 md:gap-10">
              <div className="flex items-center gap-2 lg:gap-6 ">
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

              <select
                value={language}
                className="dark:bg-transparent"
                onChange={handleLanguageChange}
              >
                <option value="uz">uz</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
              </select>
            </div>
            <button className="text-3xl text-black flex items-center md:hidden  dark:text-white bg-[#ffffff29] rounded px-1 py-1">
              <ion-icon
                name="menu"
                onClick={() => setOpenMenu(true)}
              ></ion-icon>
            </button>
          </nav>
          {/* menu */}
          <div
            className={`fixed top-0 z-20 left-0 w-[50%] bg-white min-h-screen  transition-w  ease-in-out  duration-500 md:hidden dark:bg-slate-700  dark:text-white ${
              openMenu
                ? "w-[70%] h-[100vh]"
                : "w-0 opacity-0 pointer-events-none"
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
      <Outlet />
    </>
  );
}
export default Header;
