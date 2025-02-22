import { useEffect } from "react";
import UseLocalStorage from "@components/options/useLocalStorage";

const UseToggleOptions = () => {
  const [isDarkMode, setIsDarkMode] = UseLocalStorage("dark-mode", false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default UseToggleOptions;
