import "./projects.scss"
import React, { useState } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Projects() {

    const [selected, setSelected] = useState("featured")

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="container">
                <div className="img-size">
                    <a href="https://github.com/jacobmarkman/tic-tac-toe" target="_blank">
                        <GitHubIcon style={{ color: 'black' }} />
                    </a>
                    <div className="item">
                        <h3>Simple Tic-Tac-Toe Game
                            <br /><br />
                            <h5>(HTML, CSS, JavaScript)</h5>
                        </h3>
                        <a href="https://jacob-markman-tic-tac-toe.netlify.app" target="_blank" and rel="noopener noreferrer">
                            <img src="./assets/ticcolored.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="img-size">
                    <a href="https://github.com/jacobmarkman/e_commerce" target="_blank">
                        <GitHubIcon style={{ color: 'black' }} />
                    </a>
                    <div className="item">
                        <h3>E-Commerce Music DAW Shop <br /><br />
                            <h5>(React, Commerce.js, Material UI)</h5>
                        </h3>
                        <a href="https://commercejs-my-store-project.netlify.app/" target="_blank" and rel="noopener noreferrer">
                            <img src="./assets/commerce-project.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="img-size">
                    <a href="https://github.com/jacobmarkman/memories_project" target="_blank">
                        <GitHubIcon style={{ color: 'black' }} />
                    </a>

                    <div className="item noitem">
                        <h3>Memories Social Media App
                            <br /><br />
                            <h5>(React, Redux, Node/Express/Mongoose, Material UI, MongoDB)</h5>
                        </h3>
                        <a href="https://memories-app-jacob-markman.netlify.app/" target="_blank" and rel="noopener noreferrer">
                            <img src="./assets/memories.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="blink">
                <img src="assets/down.png" alt="" />
            </div>
        </div>

    )
}
