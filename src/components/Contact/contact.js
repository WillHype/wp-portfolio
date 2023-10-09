import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import linkedIn from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const Contact = () => {
  const [buttonText, setButtonText] = useState("Envoyer");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleClick = () => {
    // Vérifie si le formulaire est valide avant de changer le texte du bouton
    if (isFormValid) {
      setButtonText("Merci !");
      setButtonClicked(true);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x13eiht', 'template_pvu3vuq', form.current, '3zu_-sOztWJ5CoxuR')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const validateForm = () => {
    // Récupérer les valeurs des champs du formulaire
    const name = form.current.querySelector('.name').value.trim();
    const email = form.current.querySelector('.email').value.trim();
    const message = form.current.querySelector('.msg').value.trim();
  
    // Vérifier si les champs sont vides
    if (name === '' || email === '' || message === '') {
      setIsFormValid(false);
    } else {
      // Vérifier si l'email est valide en utilisant une expression régulière
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        setIsFormValid(false);
      } else {
        setIsFormValid(true);
      }
    }
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <div className="quote">
          <p className='quoteDesc'>CODING IS LOGIC</p>
        </div>
        <h2 className="contactTitle">Contact</h2>
        <span className="contactDesc">Veuillez remplir le formulaire ci-dessous pour échanger sur les opportunités.</span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Nom" name='your_name' required />
          <input type="email" className="email" placeholder="Votre Email" name='your_email' required />
          <textarea className="msg" name="message" placeholder="Votre message" rows="5" required></textarea>
          <button
            onClick={handleClick}
            type="submit"
            value='Send'
            className={`submitBtn ${buttonClicked ? 'clicked' : ''}`}
          >
            {buttonText}
          </button>
        </form>
        <div className="links">
            <a href="https://fr.linkedin.com/"><img src={linkedIn} alt="linkedin" className="link"/></a>
            <a href="https://github.com/WillHype"><img src={github} alt="github" className="link" /></a>
          </div>
      </div>
    </section>
  );
}

export default Contact;
