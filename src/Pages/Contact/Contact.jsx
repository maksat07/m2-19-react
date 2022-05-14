import React from 'react';
import "./contact.scss";

export default function Contact() {
  return (
   <section className='contact'>
       <h1> OurContacts </h1>
       <div className="container contacts-container">
         <div className="contact__col">
           <form>
             <label>
               Your Name
               <input type="text" name="" id="" placeholder='John Doe' />
             </label>
             <div className="contact__error">
               <p></p>
             </div>
             <label>
               Your Email
               <input type="text" name="" id="" placeholder='john@company.com' />
             </label>
             <div className="contact__error">
               <p></p>
             </div>
             <label>
               Your Message
               <textarea name="" id="" cols="30" rows="10">
                 
               </textarea>
             </label>
             <div className="contact__error">
               <p></p>
             </div>
           </form>
         </div>
       </div>
   </section>
  )
}
