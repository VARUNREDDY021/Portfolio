import React,{useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact=()=>{
 const form = useRef();
 const sendEmail=(e)=>{
     e.preventDefault();
         emailjs.sendForm('service_j6jiaoa','template_6w6s2hi', form.current ,'L-4MoO0HzYxNii-Bx');
         setChange(true)
        }
        const[change,setChange]=useState(false)
        

    return(
        <div className='contact-form'>
            <div className='contact-left'>
                <span>CONTACT</span>
            </div>
            <div className='contact-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='username' className='user' placeholder='Name' required/>
                    <input type='email' name='user_email' className='user' placeholder='Email' required/>
                    <textarea name="message" className='user' placeholder='Message' required/>
                 <button >
                 SEND
                    </button>   
            <p>{change ? <p>THANKYOU FOR CONTACTING ME</p> : <></>}</p>
                </form>
            </div>
        </div>
    )
}
export default Contact;

