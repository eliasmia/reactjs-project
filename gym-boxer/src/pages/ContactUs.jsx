const ContactUs = () => {
  return (
    <section className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>

        <form>
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;