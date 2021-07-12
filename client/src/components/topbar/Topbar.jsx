import "./topbar.scss";
// import { Person, Mail } from "@material-ui/icons";
import React from 'react';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Jacob Markman</a>
                    <div className="images">
                        <a href="https://www.linkedin.com/in/jacobgiliovmarkman/" target="_blank" and rel="noopener noreferrer">
                            <img src="assets/linkedin.svg" alt="" />
                        </a>
                        <a href="https://github.com/jacobmarkman" target="_blank" and rel="noopener noreferrer">
                            <img src="assets/github.svg" alt="" />
                        </a>
                        <a href="https://www.instagram.com/jacobmarkman/" target="_blank" and rel="noopener noreferrer">
                            <img src="assets/instagram.svg" alt="" />
                        </a>
                        <a href="https://www.facebook.com/yashaman/" target="_blank" and rel="noopener noreferrer">
                            <img src="assets/facebook.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
