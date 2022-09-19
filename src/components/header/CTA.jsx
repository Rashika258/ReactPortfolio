import React from 'react';
import { useState } from 'react';
import CV from "../../assets/cv.pdf";

const CTA = () => {

    const [theme, setTheme] = useState("");

    return (
      <div className="cta">
            <a href={CV} download className='btn'>Resume</a>
            <a href='#contact' className='btn btn-primary'>Let's talk</a>
      </div>
   
  )
}

export default CTA