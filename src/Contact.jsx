import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0ou379h', 'template_zzjya8j', form.current, 'O8X9yIvWLHHcB3a7o')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
      <div className='page'>
        <div className='contact'>
        <h2>get in touch</h2>
        <p>contact me</p>
        </div>
        <div className='talk'>
        <h4>talk to me</h4>
        <div>
            <h5>email</h5>
            <p>mandliyarajendra0000@gmail.com</p>
        </div>
        <div>
            <h5>whatsapp</h5>
            <p>7898757473</p>
        </div>
        <div>
            <h5>instagram</h5>
            <p>@rajendramandliya11</p>
        </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div className='talk'>
        <h4>send me mail</h4>
        <input type="text" name='name' placeholder='your name' />
        <input type="email" name='email' placeholder='insert your email' />
        <input className='msg' name='message' type="text" placeholder='write your msg' />
        <button type="submit" className='btn'>send message <i class="uil uil-message"></i></button>
        </div>
        </form>
     
        </div>  

  )
}

export default Contact