import React from "react";
import { Sidebar } from "./components";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  // console.log("Rendering APP");
  return (
    <ThemeProvider>
      <div style={{ display: "flex", height: "100vh" }}>
        {" "}
        {/* corrected '100lvh' to '100vh' */}
        <Sidebar />
        <main style={{ flex: 1, padding: "1rem", color: "#fff" }}>
          <h1>Main Content</h1>
          <p>This is the main area of the application.</p>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
