import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = ({ mode: initialMode }) => {
  const { theme } = useTheme();
  const [mode, setMode] = useState(initialMode || "full");
  const [showIcons, setShowIcons] = useState(true);
  const [lessThan768, setLessThan768] = useState(false);

  useEffect(() => {
    /*  const handleResize = () => {
      if (window.innerWidth < 768) {
        setMode("collapsed");
        setShowIcons(false);
      } else {
        setMode(initialMode || "full");
        setShowIcons(initialMode !== "icon");
      }
    }; */

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMode("collapsed");
        setShowIcons(false);
        setLessThan768(true);
        //console.log("768");
        //setCollapsed(true);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
        setMode("icon");
        setShowIcons(true);
        setLessThan768(false);
        // console.log("768 - 1279");
        //setCollapsed(false);
      } else {
        setMode("full");
        setShowIcons(false);
        setLessThan768(false);
        // console.log("1279+");
        //setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, [initialMode]);

  const toggleMode = () => {
    if (mode === "icon") {
      setMode("full");
      setShowIcons(false);
    } else {
      setMode("icon");
      setShowIcons(true);
    }
  };

  const toggleSidebar = () => {
    if (mode === "collapsed") {
      setMode("full");
    }

    if (mode === "full") {
      setMode("collapsed");
    }
  };

  if (mode === "collapsed") {
    return (
      <div className="hamburger-menu" onClick={toggleSidebar}>
        ☰
      </div>
    );
  }

  return (
    <div
      className={`sidebar ${mode}`}
      style={{ backgroundColor: theme.primary }}
    >
      {lessThan768 && (
        <div className="close-sidebar" onClick={toggleSidebar}>
          X
        </div>
      )}
      {mode === "full" && <div className="sidebar-logo">Logo</div>}

      <ul className="sidebar-menu">
        <li
          className="menu-item"
          style={{ "--hover-background": theme.primary }}
        >
          {showIcons && (
            <span role="img" aria-label="home">
              🏠
            </span>
          )}
          <span className="menu-text">Home</span>
        </li>
        <li
          className="menu-item"
          style={{ "--hover-background": theme.primary }}
        >
          {showIcons && (
            <span role="img" aria-label="about">
              ℹ️
            </span>
          )}
          <span className="menu-text">About</span>
        </li>
        <li
          className="menu-item"
          style={{ "--hover-background": theme.primary }}
        >
          {showIcons && (
            <span role="img" aria-label="contact">
              📞
            </span>
          )}
          <span className="menu-text">Contact</span>
        </li>
      </ul>
      {!lessThan768 && (
        <div className="sidebar-toggle" onClick={toggleMode}>
          {mode === "icon" ? "➡️" : "⬅️"}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
