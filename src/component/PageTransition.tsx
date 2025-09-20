import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const urlLocation = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* <motion.div
        key={urlLocation.pathname}
        className="absolute top-0 w-full  bg-orange-400"
        initial={{ height: "100%" }}
        animate={{ height: "0%" }}
        exit={{ height: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      ></motion.div> */}
      <motion.div
        key={urlLocation.pathname}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
