import React, { Fragment, useState, useEffect } from "react";
import { createContext } from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  Services,
  Skills,
  Testimonials,
} from "./components";

export const ThemeContext = createContext(null);

const App = () => {
  const store = document.querySelector(":root");

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    var value = getComputedStyle(store);
    const lightColor = value.getPropertyValue("--color-light");
    console.log(lightColor);
    if (theme === "light") {
      setTheme("dark");
      if (lightColor === "rgba(255, 255, 255, 0.6)") {
        store.style.setProperty("--color-light", "black");
      }
    } else {
      setTheme("light");
    }
  };


  const toggleThemes = () => {
    
  }

  function changeStyles() {
    store.style.setProperty("--color-light", "black");
  }

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.body.className = theme;
  //   // changeStyles();
  // }, [theme]);

  return (
    <Fragment>
      {/* <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="App" id="light"> */}
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Skills />
          <Testimonials />
          <Contact />
          <Footer />
        {/* </div>
      </ThemeContext.Provider> */}
    </Fragment>
  );
};

export default App;
