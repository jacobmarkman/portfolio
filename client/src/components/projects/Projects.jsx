import "./projects.scss"
import { useState } from "react";

export default function Projects() {

    const [selected, setSelected] = useState("featured")

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="container">
                <div className="item">
                    <a href="https://github.com/jacobmarkman/tic-tac-toe"></a>
                    <img src="./assets/down.png" alt="" />
                    <h3>Tic Tac Toe</h3>
                </div>
                <div className="item">
                    <img src="./assets/down.png" alt="" />
                    <h3>Project 2</h3>
                </div>
                <div className="item">
                    <img src="./assets/down.png" alt="" />
                    <h3>Project 3</h3>
                </div>
            </div>
        </div>
    )
}
