import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">

            <img className="into-img" src={IntroImg }
            alt="IntroImg" />

        </div>

        <div className="content">
            <p>Hi, I'm a undergraduate.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/Project" className="btn">
                    Projects
                </Link>

                <Link to="/Contact" className="btn-light">
                    Contact
                </Link>
            </div>

        </div>
      
    </div>
  )
}

export default HeroImg
