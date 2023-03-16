import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a front-end developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you! <br /> email - ar98483@fhss.sjp.ac.lk </p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+94714905164");
          }}
        >Say Hello</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>Wathsala Rajapaksha</span></p>
      </Container>
    </div>
  )
}

export default Contactpage