import "./contact.scss";

import React from 'react';
import { useForm } from "react-hook-form";


// const onSubmit = (data) => {
//     name: string;
//     console.log(data);
// }



export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>
        console.log(data);


    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
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
    )
}
