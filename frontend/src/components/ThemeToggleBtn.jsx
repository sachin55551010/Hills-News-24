import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
export const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <div className="cursor-pointer">
      {/* theme switch icon */}
      <div onClick={handleToggle} className="flex h-fit w-fit" role="button">
        {theme === "light" ? (
          <Moon className="text-foreground" />
        ) : (
          <Sun className="text-foreground" />
        )}
      </div>
    </div>
  );
};
