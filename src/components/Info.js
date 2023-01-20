import React from "react";
import yad from "../Image/yad.jpg"
import About from './About'
import Interest from "./Interest";
import Footer from "./Footer";
export default function Info() {
    return (
        <div className="main">
            <div className="info_about_interest"> 
                <img src={yad} alt ="yadesa berchu"></img>
                <h1>Yadesa Berchu</h1>
                <h2>Frontend Developer</h2>
                <h3>OBN media company</h3>
                <button className="btn_email">
                    <p>Email</p>
                </button>
                <button className="btn_linkedin">
                    <p>Linkedin</p>
                </button>
            <About />
            <Interest />
            
        </div>
        <Footer />
        </div>
        
    )
}