import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import { Link, useLocation } from "react-router";
import { ArrowDown } from "lucide-react";

const Navigation = () => {
  const [buttons, setButtons] = useState(["Projects", "Skills", "Contacts"]);
  const location = useLocation();
  const [selected, setSelected] = useState("");
  useEffect(() => {
    const currentHash = location.hash.split("#")[1];
    if (!currentHash) return;

    setButtons((prevButtons) => {
      if (!prevButtons.includes(currentHash)) return prevButtons;

      const newButtons = [...prevButtons];
      const idx = newButtons.indexOf(currentHash);
      if (idx > 0) {
        newButtons.splice(idx, 1);
        newButtons.unshift(currentHash);
      }
      return newButtons;
    });

    setSelected(currentHash);
  }, [location.hash]);

  const handleClick = (index) => {
    const newButtons = [...buttons];
    const [clicked] = newButtons.splice(index, 1);
    newButtons.unshift(clicked);
    setButtons(newButtons);
    setSelected(newButtons[0]);

    setTimeout(() => {
      const navEl = document.getElementById("navigation");
      if (!navEl) return;
      const rect = navEl.getBoundingClientRect();
      if (Math.abs(rect.top) < 200) return;
      navEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <nav
        id="navigation"
        className=" relative flex pt-8 items-center justify-center space-x-4 text-[#1B1B1B] font-semibold text-lg"
      >
        {!selected && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2  text-black px-3 py-1 rounded  text-sm animate-bounce">
            Select an option to see details
            <ArrowDown className="mx-auto" />
          </div>
        )}
        <motion.span
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          className="px-3 py-1.5 bg-[#1B1B1B] text-white rounded-xl"
        >
          My
        </motion.span>
        <span>-</span>
        {buttons.map((btn, i) => (
          <motion.div key={btn} layout transition={{ duration: 0.2 }}>
            <Link to={`#${btn}`}>
              <motion.button
                initial={{ x: 40 }}
                animate={{ x: 0 }}
                onClick={() => handleClick(i, btn)}
                className={`px-3 py-1 btn rounded-xl ${
                  selected === btn ? "bg-[#1B1B1B] text-white" : "bg-[#fef5ed]"
                }`}
              >
                {btn}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Render based on selected */}
      <div className={buttons.includes(selected) ? "min-h-screen" : ""}>
        {selected === "Skills" && <Skills />}
        {selected === "Projects" && <Projects />}
        {selected === "Contacts" && <Contacts />}
      </div>
    </>
  );
};

export default Navigation;
