import "./projects.scss"
import { useState } from "react";

export default function Projects() {

    const [selected, setSelected] = useState("featured")

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="container">
                <div className="item">
                    <a href="https://github.com/jacobmarkman/tic-tac-toe" target="_blank" and rel="noopener noreferrer">
                        <img src="./assets/tictactoe.png" alt="" />
                    </a>
                    <h3>Tic Tac Toe</h3>
                </div>
                <div className="item noitem">
                    <h3>In Progress...</h3>
                </div>
                <div className="item noitem">
                    <h3>In Progress...</h3>
                </div>
            </div>
        </div>
    )
}
