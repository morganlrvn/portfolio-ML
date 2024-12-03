import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';


const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending data:", formData);

    emailjs
      .send(
        'service_9r195lm',      // Ton service ID
        'template_031ye6q',     // Ton template ID
        formData,               // Données du formulaire
        'aagj_VmQIgFebK_Yy'     // Ton user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message envoyé avec succès !');

          // Réinitialiser le formulaire après l'envoi
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          alert('Une erreur est survenue. Veuillez réessayer.');
        }
      );
  };

  return (
    <div id="contact" className="section titre-section">
      <h3>{t('title-contact')}</h3>
      <form onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">{t('contact-name')}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">{t('contact-mail')}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">{t('contact-message')}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">{t('title-send')}</button>
      </form>
    </div>
  );
};

export default ContactForm;
