import ContactForm from './features/Form';
import { Helmet } from 'react-helmet-async';
function Contact() {
  return (
    <>
      <Helmet>
        <title>Lovha Studio | Kontakt</title>
        <meta name="description" content="Kontakt" />
      </Helmet>
      <div className="contact-wrapper wrapper  flex flex-col justify-center items-center min-h-[100vh]">
        <ContactForm />
      </div>
    </>
  );
}
export default Contact;
