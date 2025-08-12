import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
const Navigation = () => {
  const [buttons, setButtons] = useState(["Projects", "Skills", "Contacts"]);
  const location = useLocation();
  // On click, move clicked button to front
  const handleClick = (index) => {
    const navEl = document.getElementById("navigation");
    if (index === 0) return;
    const rect = navEl.getBoundingClientRect();
    const newButtons = [...buttons];
    const [clicked] = newButtons.splice(index, 1); // remove clicked
    newButtons.unshift(clicked); // add to front
    setButtons(newButtons);
    console.log(Math.abs(rect.top));
    if (Math.abs(rect.top) < 200) return;
    navEl.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      id="navigation"
      className="flex  py-8 items-center  justify-center space-x-4 text-[#1B1B1B] font-semibold text-lg"
    >
      <motion.span
        initial={{ x: -40 }}
        animate={{ x: 0 }}
        className="px-3 py-1.5 bg-[#1B1B1B] text-white rounded-xl"
      >
        My
      </motion.span>
      <span>-</span>
      {buttons.map((btn, i) => (
        <motion.div key={btn} layout>
          <Link to={btn}>
            <motion.button
              initial={{ x: 40 }}
              animate={{ x: 0 }}
              onClick={() => handleClick(i)}
              className={`px-3 py-1 btn  rounded-xl ${
                buttons[0] === btn ? "bg-[#1B1B1B] text-white" : "bg-[#fef5ed] "
              }`}
            >
              {btn}
            </motion.button>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};

export default Navigation;
