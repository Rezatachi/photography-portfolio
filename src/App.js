import React from "react";
import Nav from "./components/Nav";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Page Sections
import AboutSection from "./pages/AboutSection";
import OurWork from "./pages/OurWorkSection";
import ContactUs from "./pages/ContactSection";
import MovieDetail from "./pages/MovieDetail";
import ScrollTop from "./components/ScrollTop";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// ANIMATE PRESCENE ALLOWED COMPONETS TO ANIMATE OUT WHEN THEY ARE REMOVED FROM THE REACT TREE.
function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        {/* exitBeforeEnter is kind oflike async */}
        {/* On switch, you need to add a key for framer motion */}
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
