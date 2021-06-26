import "./skills.scss";
import { useState } from "react"



export default function Skills() {

    const [skill, setSkill] = useState("");





    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skill-icons">
                <img src="assets/js.svg" alt="" onMouseEnter={() => setSkill("Java Script")} onMouseLeave={() => setSkill("")}/>
                <img src="assets/react.svg" alt="" onMouseEnter={() => setSkill("React")} onMouseLeave={() => setSkill("")}/>
                <img src="assets/redux.svg" alt="" onMouseEnter={() => setSkill("Redux")} onMouseLeave={() => setSkill("")}/>
                <img src="assets/css.svg" alt="" onMouseEnter={() => setSkill("CSS")} onMouseLeave={() => setSkill("")}/>
                {/* <img src="assets/styled-components.png" alt="" /> */}
                <img src="assets/node-js.svg" alt="" onMouseEnter={() => setSkill("Node.js")} onMouseLeave={() => setSkill("")}/>
                <img src="assets/git.svg" alt="" onMouseEnter={() => setSkill("Git")} onMouseLeave={() => setSkill("")}/>
                <img src="assets/ts.svg" alt="" onMouseEnter={() => setSkill("Type Script")} onMouseLeave={() => setSkill("")}/>
            </div>
            <p>{skill}</p>
        </div>
    )
}
