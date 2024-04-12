import React from "react";
import { useTheme } from "../../context/ThemeContext";

const SettingsComponent = () => {
  const { updateTheme } = useTheme();

  const changeTheme = () => {
    updateTheme({ primary: "#00695c", secondary: "#ff1744" });
  };

  return <button onClick={changeTheme}>Change Theme</button>;
};

export default SettingsComponent;
