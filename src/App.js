import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Page Sections
import AboutSection from "./pages/AboutSection";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutSection />
    </div>
  );
}

export default App;
