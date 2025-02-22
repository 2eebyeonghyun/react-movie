import { useState } from "react";

const UseLocalStorage = (key, val) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : val;
    } catch (error) {
      return val;
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));

    document.documentElement.setAttribute(
      "data-theme",
      value ? "dark" : "light"
    );
  };

  return [storedValue, setValue];
};

export default UseLocalStorage;
