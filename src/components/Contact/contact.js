import React from 'react';
import './contact.css';
import linkedIn from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import email from '../../assets/envelope-solid.svg';

const Contact = () => {
 

  return (
    <section id="contactPage">
      <div id="contact">
        <div className="quote">
          <p className='quoteDesc'>CODING IS LOGIC</p>
        </div>
        <h2 className="contactTitle">Contact</h2>
        
        <div className="links">
            <a href="mailto:willy.pochot@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="email" className="link"/></a>
            <a href="https://www.linkedin.com/in/willy-pochot-a48678297/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="linkedin" className="link"/></a>
            <a href="https://github.com/WillHype" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="link" /></a>
          </div>
      </div>
    </section>
  );
}

export default Contact;
