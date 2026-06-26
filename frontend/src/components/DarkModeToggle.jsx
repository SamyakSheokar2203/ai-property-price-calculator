import {
  Moon,
  Sun,
} from "lucide-react";

export default function DarkModeToggle({
  darkMode,
  setDarkMode,
}) {
  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="
      fixed
      top-5
      right-5
      rounded-full
      p-3
      shadow-xl
      z-50
      bg-white
      dark:bg-slate-800
      text-slate-900
      dark:text-white
      border
    "
    >
      {darkMode ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}
