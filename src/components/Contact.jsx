import { useState } from "react";
import emailjs from "@emailjs/browser";

import { socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";

const EMAIL_ADDRESS = "maherturki25@gmail.com";
const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = ({ sectionId }) => {
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus(
        "The message form is not configured yet. You can email me directly using the address on this page."
      );
      return;
    }

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      );
      setForm(initialForm);
      setStatus("Thanks — your message has been sent.");
    } catch (error) {
      console.error("EmailJS message could not be sent:", error);
      setStatus("Your message could not be sent. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className='contact-panel'>
      <div className='contact-intro'>
        <p className='section-kicker'>Contact</p>
        <h2 className='contact-title' id={`${sectionId}-heading`}>
          Let&apos;s build something intelligent.
        </h2>
        <p className='contact-copy'>
          I&apos;m interested in discussing AI engineering opportunities,
          innovative products, and challenging software projects.
        </p>

        <div className='contact-methods'>
          <a className='contact-method' href={`mailto:${EMAIL_ADDRESS}`}>
            <span className='contact-method-icon' aria-hidden='true'>
              @
            </span>
            <span>{EMAIL_ADDRESS}</span>
          </a>
          {socialLinks.map((link) => (
            <a
              className='contact-method'
              href={link.url}
              key={link.name}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='contact-method-icon' aria-hidden='true'>
                in
              </span>
              <span>{link.name}</span>
              <span aria-hidden='true'>↗</span>
            </a>
          ))}
        </div>
      </div>

      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='contact-name'>Name</label>
          <input
            id='contact-name'
            name='name'
            type='text'
            autoComplete='name'
            value={form.name}
            onChange={handleChange}
            placeholder='Your name'
            maxLength={120}
            required
          />
        </div>
        <div className='form-field'>
          <label htmlFor='contact-email'>Email</label>
          <input
            id='contact-email'
            name='email'
            type='email'
            autoComplete='email'
            value={form.email}
            onChange={handleChange}
            placeholder='you@example.com'
            maxLength={254}
            required
          />
        </div>
        <div className='form-field form-field--full'>
          <label htmlFor='contact-subject'>Subject</label>
          <input
            id='contact-subject'
            name='subject'
            type='text'
            value={form.subject}
            onChange={handleChange}
            placeholder='What would you like to discuss?'
            maxLength={160}
            required
          />
        </div>
        <div className='form-field form-field--full'>
          <label htmlFor='contact-message'>Message</label>
          <textarea
            id='contact-message'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Tell me a little about it...'
            rows={5}
            maxLength={5000}
            required
          />
        </div>
        <button
          className='button-primary contact-submit'
          type='submit'
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send message"}
          <span aria-hidden='true'>↗</span>
        </button>
        <p className='contact-status' role='status' aria-live='polite'>
          {status}
        </p>
      </form>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
