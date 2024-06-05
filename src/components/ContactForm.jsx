import React from 'react'
import "./ContactForm.css"
import Button from './Button'
import { LuMessagesSquare } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import contactImage from './CONTACT.png';
import { useState } from 'react';


const ContactForm = () => {
    // const[name,setNAme] = useState("Anshu");

    const viaCall = () => {
        console.log("I am from call");
        alert("Call received!");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // const nameValue = event.target[0].value;
        // setNAme(nameValue);
        // useState(event.target[0].value);
        console.log("Name: ",event.target[0].value);
        console.log("Email: ",event.target[1].value);
        console.log("Text: ",event.target[2].value);
        
        

    }


    return <section className= 'container'>

        <div className='contact_form'>
        <div className="top_btn">
        <Button
            text='VIA SUPPORT CHAT'
            icon = {<LuMessagesSquare fontSize="24px" />}
         />
         <Button
            onClick = {viaCall}
            text='VIA CALL'
            icon = {<IoCallOutline fontSize="24px" />}
         />
        </div>
        <Button
            isSecondary = {true}
            text='VIA MAIL'
            icon = {<IoMail fontSize="24px" />}
         />

         <form 
         onSubmit={onSubmit}
         >
            <div className="form_control">
                <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>

            <div className="form_control">
                <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            </div>

            <div className="form_control">
                <label htmlFor="text">text</label>
            <textarea name="text" rows="8"/>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "15px"
            }}>
            <Button
            text='SUBMIT BUTTON'
             />
            </div>
         </form>
         <div>{name}</div> 
         
         </div>
         <div className='contact_image'>
         <img src={contactImage} alt="contact image" />
            
         </div>
    </section>
}

export default ContactForm;