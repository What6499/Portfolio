import React, { useState } from "react";
import { motion } from "motion/react";
const Navigation = () => {
  const [buttons, setButtons] = useState(["Projects", "Skills", "Contacts"]);

  // On click, move clicked button to front
  const handleClick = (index) => {
    if (index === 0) return; // already at front, do nothing
    const newButtons = [...buttons];
    const [clicked] = newButtons.splice(index, 1); // remove clicked
    newButtons.unshift(clicked); // add to front
    setButtons(newButtons);
  };

  return (
    <nav className="flex items-center  justify-center space-x-4 text-[#1B1B1B] font-semibold text-lg">
      <motion.span
        initial={{ x: -40 }}
        animate={{ x: 0 }}
        className="px-3 py-1.5 bg-[#1B1B1B] text-white rounded-xl"
      >
        My
      </motion.span>
      <span>-</span>
      {buttons.map((btn, i) => (
        <motion.button
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          layout
          key={btn}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 btn  rounded-xl ${
            buttons[0] === btn ? "bg-[#1B1B1B] text-white" : "bg-[#fef5ed] "
          }`}
        >
          {btn}
        </motion.button>
      ))}
    </nav>
  );
};

export default Navigation;
