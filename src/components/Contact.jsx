import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus(
        "The contact form is not configured yet. Please contact me through LinkedIn."
      );
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      );
      setForm(initialForm);
      setStatus("Thank you. Your message has been sent.");
    } catch (error) {
      console.error("EmailJS message could not be sent:", error);
      setStatus("Your message could not be sent. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] rounded-2xl bg-black-100 p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your name</span>
            <input
              type='text'
              name='name'
              autoComplete='name'
              value={form.name}
              onChange={handleChange}
              required
              maxLength={120}
              placeholder='Your name'
              className='rounded-lg bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus-visible:ring-2 focus-visible:ring-[#915EFF]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your email</span>
            <input
              type='email'
              name='email'
              autoComplete='email'
              value={form.email}
              onChange={handleChange}
              required
              maxLength={254}
              placeholder='you@example.com'
              className='rounded-lg bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus-visible:ring-2 focus-visible:ring-[#915EFF]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Subject</span>
            <input
              type='text'
              name='subject'
              value={form.subject}
              onChange={handleChange}
              required
              maxLength={160}
              placeholder='What is this about?'
              className='rounded-lg bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus-visible:ring-2 focus-visible:ring-[#915EFF]'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-white'>Your message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              required
              maxLength={5000}
              placeholder='Write your message'
              className='rounded-lg bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary focus-visible:ring-2 focus-visible:ring-[#915EFF]'
            />
          </label>

          <p role='status' aria-live='polite' className='text-secondary'>
            {status}
          </p>
          <button
            type='submit'
            disabled={loading}
            className='w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-[#915EFF]'
          >
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
