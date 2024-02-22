
import {NavLink, Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg";
// Links
import { Links } from "../utils/links";
import { useEffect, useState } from "react";

function Header({language, onLanguage}) {
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
  onLanguage(e.target.value);
};

  return (
    <>
      <header className="py-5">
        <div className="xl:container mx-auto px-10">
          <nav className="flex items-center justify-between">
            <Link to="/">
              <img className="w-16 rounded-full shadow-md" src={logo} alt="logo" />
            </Link>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-6">
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
                <option value="uz">uz</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
              </select>
            </div>
            <button className="text-3xl text-black flex items-center pt-1 md:hidden dark:text-white">
              <ion-icon
                name={openMenu ? "close" : "menu"}
                onClick={() => setOpenMenu(!openMenu)}
              ></ion-icon>
            </button>
          </div>
        </nav>
        {openMenu && (
          <div className="fixed top-0 left-0 w-[50%] bg-white min-h-screen backdrop-blur-md">
            <div>
              <div className="bg-white py-1 px-2 rounded cursor-pointer dark:bg-transparent ">
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
                  <Link to={link.to} key={link.id} className="text-black block">
                    {link.content[language]}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
    <Outlet/>
   </>
  )
}

export default Header;
