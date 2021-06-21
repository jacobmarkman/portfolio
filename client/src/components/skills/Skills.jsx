import "./skills.scss";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skill-icons">
                <img src="assets/js.svg" alt="" />
                <img src="assets/react.svg" alt="" />
                <img src="assets/redux.svg" alt="" />
                <img src="assets/css.svg" alt="" />
                {/* <img src="assets/styled-components.png" alt="" /> */}
                <img src="assets/node-js.svg" alt="" />
                <img src="assets/git.svg" alt="" />
                <img src="assets/ts.svg" alt="" />
            </div>
        </div>
    )
}
