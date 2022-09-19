import React from 'react';
import CTA from './CTA';
import "./header.css";
import ME from "../../assets/me.png";


const Header = () => {
  return (
    <header>
          <div className="container header__container">
              <h5>Hello I'm</h5>
              <h1>Rashika Suresh</h1>
              <h5 className="text-light">
                  FullStack Developer

              </h5>
              <CTA />

              <div className='me'>
                  <img src={ME} alt="" />
              </div>

      </div>
    </header>
  )
}

export default Header
