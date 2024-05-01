import React from "react";
import { motion } from "framer-motion";

const Button = ({ content }) => {
  return (
    <motion.button
      className="px-6 py-3 rounded-md relative radial-gradient border border-slate-600 mt-2"
      initial={{ "--x": "100%", scale: 1.05 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: { type: "spring", stiffness: 10, damping: 5, mass: 0.1 },
      }}
    >
      <span className="text-neutral-100 tracking-wide font-semibold uppercase block relative linear-mask">
        {content}
      </span>
    </motion.button>
  );
};

export default Button;
