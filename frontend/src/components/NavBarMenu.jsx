import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { ThemeToggleBtn } from "./ThemeToggleBtn";
import { NavLink } from "react-router-dom";

export const NavBarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsMenuBtn = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <motion.div
      layout
      className="bg-base-100 p-2 overflow-hidden relative shadow-[0px_1px_5px_rgba(0,0,0,.5)]"
    >
      <motion.div className="lg:hidden cursor-pointer" layout="position">
        {!isMenuOpen ? (
          <TiThMenu size={24} onClick={handleIsMenuBtn} />
        ) : (
          <X size={24} strokeWidth={4} onClick={handleIsMenuBtn} />
        )}
      </motion.div>

      {isMenuOpen && (
        <motion.ul
          onClick={() => setIsMenuOpen(false)}
          className="flex flex-col gap-4 lg:hidden mt-4"
          layout="position"
        >
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="/contact" className="">
            Contact
          </NavLink>
          <NavLink to="/about" className="">
            About
          </NavLink>
        </motion.ul>
      )}

      <ul className="hidden lg:flex lg:justify-end lg:gap-4 lg:items-center lg:pr-15">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/contact" className="">
          Contact
        </NavLink>
        <NavLink to="/about" className="">
          About
        </NavLink>
      </ul>

      {/* ✅ Prevent layout stretching */}
      <motion.div layout="position" className="absolute right-5 top-2">
        <ThemeToggleBtn />
      </motion.div>
    </motion.div>
  );
};
