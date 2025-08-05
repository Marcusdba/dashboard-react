import React, { useEffect, useState } from "react";

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="btn btn-outline-light"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ToggleTheme;
