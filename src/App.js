import React from "react";
import Nav from "./components/Nav";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Page Sections
import AboutSection from "./pages/AboutSection";
import OurWork from "./pages/OurWorkSection";
import ContactUs from "./pages/ContactSection";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <AboutSection />
        </Route>
        <Route exact path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/work/:id">
          {/* Basically any kind of text with the ID, will bring us the movie id detail */}
          <MovieDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
