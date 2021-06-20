import "./contact.scss";


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
            <h1>Contact</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="name" />
                {errors.name?.type === 'required' && "First name is required"}

                <input {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder="email" />
                {errors.email?.type === 'required' && "Email is required"}

                <input {...register("subject", { required: true })} placeholder="subject" />
                {errors.subject?.type === 'required' && "Subject is required"}

                <textarea {...register("message", { required: true })} placeholder="message" />
                {errors.message?.type === 'required' && "Message is required"}

                <button type="submit" name="" id="">Send</button>
            </form>
            <div className="images">
                <img src="assets/linkedin.svg" alt="" />
                <img src="assets/github.svg" alt="" />
                <img src="assets/instagram.svg" alt="" />
                <img src="assets/facebook.svg" alt="" />
            </div>
        </div>
    )
}
