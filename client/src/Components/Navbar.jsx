import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const element = document.querySelector("html");
    element.classList.remove("light", "dark");
    if (darkMode) {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className={`sticky top-0 z-50 md:h-[72px] h-[65px] md:px-[35px] px-[15px] shadow-custom backdrop-blur-md flex justify-end ${
        darkMode ? "bg-[#21242bc5]" : "bg-[#ffffffd0]"
      }`}
    >
      <button
        className={`p-5 rounded-full text-lg font-semibold ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun size={26} /> : <FaMoon size={26} />}
      </button>
    </nav>
  );
}
