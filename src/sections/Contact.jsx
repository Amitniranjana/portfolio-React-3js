import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // Check for required env vars and gracefully fallback to mail client
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      showAlert({
        text: 'Email service not configured. Opening your mail client as a fallback.',
        type: 'danger',
      });

      // open mail client with prefilled subject/body
      const subject = encodeURIComponent(`Contact from portfolio: ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
      window.location.href = `mailto:yamitniranjan1234@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    setLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        to_name: 'Amit Niranjan',
        from_email: form.email,
        to_email: 'yamitniranjan1234@gmail.com',
        message: form.message,
      }, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        showAlert({
          text: 'Thank you for your message 😃',
          type: 'success',
        });

        setTimeout(() => {
          hideAlert();
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error('Email send error:', error);

        showAlert({
          text: "I didn't receive your message 😢",
          type: 'danger',
        });
      });
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="background" className="absolute inset-0 min-h-screen object-cover" />

        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-gray-700 mt-3 text-center">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="field-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                id="name"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="field-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                id="email"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="field-label">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="field-input"
                id="message"
                placeholder="Share your thoughts or inquiries..."
              />
            </div>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
