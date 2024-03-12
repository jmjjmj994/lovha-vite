import { useState } from 'react';
import emailjs from '@emailjs/browser';
const emailID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  subject: string;
  textArea: string;
};

function Form() {
  /*   const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [subject, setSubject] = useState('');
  const [textArea, setTextArea] = useState(''); */
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    subject: '',
    textArea: '',
  });

  function handleFormData({ id, value }: { id: string; value: string }) {
    setFormData((previous) => ({ ...previous, [id]: value }));
  }

  function validate() {
    const { firstName, lastName, email, telephone, subject, textArea } =
      formData;
    let isValid = false;
    if (firstName && lastName && email && telephone && subject && textArea)
      isValid = true;

    if (isValid) {
      return true;
    } else {
      return null;
    }
  }
  function sendEmail() {
    const template = {
      to_name: 'Lovha Studio',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      tel: formData.telephone,
      subject: formData.subject,
      message: formData.textArea,
    };
    console.log(template, 'template sent');
    emailjs
      .send(emailID, templateID, template, publicKey)
      .then((response) => {
        console.log('Email sent!', response);
        formData.firstName = ''
        formData.lastName = ''
        formData.email = ''
        formData.subject = ''
        formData.telephone = ''
        formData.textArea = ''
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
console.log(formData)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validated = validate();
    if (validated) sendEmail();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[20px] max-w-[50rem] w-full px-5 "
    >
      <h1 className="text-left">Kontakt Oss</h1>
      <ContactFormInput onInputChange={handleFormData} formData={formData} />
    </form>
  );
}

type ContactFormInputProps = {
  onInputChange: (data: { id: string; value: string }) => void;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  subject: string;
  textArea: string;
};

function ContactFormInput({ onInputChange, formData }) {
  const { firstName, lastName, email, telephone, subject, textArea } = formData;
  return (
    <>
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="flex flex-col grow">
          <label htmlFor="first-name">Fornavn</label>
          <input
            required
            className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Fornavn"
            value={firstName}
            onChange={(e) =>
              onInputChange({ id: 'firstName', value: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col grow">
          <label htmlFor="lastName">Etternavn</label>
          <input
            required
            className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Etternavn"
            value={lastName}
            onChange={(e) =>
              onInputChange({ id: 'lastName', value: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">E-postadresse</label>
        <input
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Ugyldig e-postadresse"
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="email"
          id="email"
          name="email"
          placeholder="kontakt@lovhastudio.com"
          value={email}
          onChange={(e) =>
            onInputChange({ id: 'email', value: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="telephone">Telefon</label>
        <input
          required
          pattern="[0-9+-. ]+"
          maxLength={8}
          title="Ugyldig telefon"
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="12345678"
          value={telephone}
          onChange={(e) =>
            onInputChange({ id: 'telephone', value: e.target.value })
          }
        />
      </div>

      <fieldset className="flex flex-col ">
        <legend>Emne</legend>
        <select
          aria-label="subject"
          required
          value={subject}
          onChange={(e) =>
            onInputChange({ id: 'subject', value: e.target.value })
          }
          className="rounded-sm pl-2 py-2 lg:py-3"
          name=""
          id=""
        >
          <option value="">- Velg -</option>
          <option value="freelance">3D - Freelance</option>
          <option value="samarbeid">Samarbeid</option>
          <option value="beta-testing">Beta-testing</option>
          <option value="jobb">Jobb i Lovha</option>
          <option value="annet">Annet</option>
        </select>
      </fieldset>
      <div className="flex flex-col">
        <label htmlFor="message">Melding</label>
        <textarea
          required
          maxLength={250}
          className="pl-2 rounded-sm bg-gray-200"
          name="message"
          id="message"
          cols={0}
          rows={5}
          value={textArea}
          onChange={(e) =>
            onInputChange({ id: 'textArea', value: e.target.value })
          }
        ></textarea>
      </div>

      <button type="submit" className="py-2 lg:py-3 bg-black text-white">
        Send
      </button>
    </>
  );
}

export default Form;
