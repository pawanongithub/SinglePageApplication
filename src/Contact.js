import React from 'react'
import './Contact.css';
export default function Contact() {
  return (
    <div>
      <form>
        <label for="fname">
          <b>First name:</b>
        </label><br></br>
        <input type="text" id="fname" /><br />

        <label for="lname">
          <b>Last name:</b>
        </label><br></br>
        <input type="text" id="fname" /><br />

        <label for="pno">
          <b>Phone Number:</b>
        </label><br />
        <input type="number" id="pno" /><br />

        <label for="message"><b>Enter your message:</b></label><br />
        <textarea id="message" name="message"></textarea><br />
        <button>SUBMIT</button>



      </form>
    </div>
  )
}
