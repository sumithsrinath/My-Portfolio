import "./FooterStyles.css";

import React from 'react'
import { FaHome,FaPhone,FaMailBulk,FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer"> 
    <div className="footer-container">
        <div className="left">
            <div className="location">
               <FaHome size={20} style={{color:"#fff",
            marginRight:"2rem"}}/> 

            <div>
                <p>Elpitiya,Galle</p>
                <p>Sri Lanka</p>
            </div>
            </div>

            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff",
                marginRight:"2rem"}}/>
                076-4524691
                </h4>
            

            </div>
        

        <div className="email">
        <h4>
                <FaMailBulk size={20} style={{color:"#fff",
                marginRight:"2rem"}}/>
                sumi1999srinath@gmail.com
                </h4>

        </div>
        </div>


        <div className="right">
            <h4>
                About  me
            </h4>

            <p>This is me Sumith Srinath.Undergradute of
                University of Sri Jayewardenepura.I'm enthusiastic to work with react.
            </p>

            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",
                marginRight:"1rem"}}/>

            <FaLinkedin size={30} style={{color:"#fff",
                marginRight:"1rem"}}/>     


            <FaGithub size={30} style={{color:"#fff",
                marginRight:"1rem"}}/>              
            </div>


        </div>

    </div>
      
    </div>
  )
}

export default Footer
