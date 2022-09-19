import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Services, Skills, Testimonials } from './components';



const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <Fragment>
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
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
    </Fragment>
  );
}

export default App
