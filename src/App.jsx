import React from "react";
import ReactDOM from "react-dom";
import { Sidebar } from "./components";
import "./index.css";
import logo from "../src/assets/LOGO.svg";
import { ThemeProvider } from "./context/ThemeContext";
import SettingsComponent from "./components/settings/Settings";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: "flex", height: "100lvh" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "1rem", color: "#fff" }}>
          {" "}
          {/* Ensure text color contrasts with sidebar */}
          <h1>Main Content</h1>
          <p>This is the main area of the application.</p>
        </main>
        {/* <SettingsComponent /> */}
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
