import { useRef, useState } from 'react';
import ErrorHandler from '../helpers/ErrorFeedback';
import Validate from '../FormValidator/FormValidator';
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
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telephoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    subject: '',
    textArea: '',
  });
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    subject: '',
    textArea: '',
  });

  function handleFormData({ id, value }: { id: string; value: string }) {
    setFormData((previous) => ({ ...previous, [id]: value }));
    setError((previous) => ({ ...previous, [id]: '' }));
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
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          telephone: '',
          subject: '',
          textArea: '',
        });
        firstNameRef.current.style = 'outline:none';
        lastNameRef.current.style = 'outline:none';
        emailRef.current.style = 'outline:none';
        telephoneRef.current.style = 'outline:none';
        subjectRef.current.style = 'outline:none';
        textAreaRef.current.style = 'outline:none';
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validated = Validate(
      formData,
      setError,
      firstNameRef,
      lastNameRef,
      emailRef,
      telephoneRef,
      subjectRef,
      textAreaRef
    );
    console.log(validated);
    if (validated) sendEmail();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[15px] max-w-[50rem] w-full px-5 "
    >
      <h1 className="text-left">Kontakt Oss</h1>
      <ContactFormInput
        onInputChange={handleFormData}
        formData={formData}
        error={error}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        telephoneRef={telephoneRef}
        subjectRef={subjectRef}
        textAreaRef={textAreaRef}
      />
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

function ContactFormInput({ onInputChange, error, formData, ...refs }) {
  const { firstName, lastName, email, telephone, subject, textArea } = formData;

  return (
    <>
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="flex flex-col grow  min-h-[6rem]">
          <label htmlFor="first-name">Fornavn</label>
          <input
            className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
            type="text"
            id="firstName"
            name="firstName"
            ref={refs.firstNameRef}
            placeholder="Fornavn"
            value={firstName}
            onChange={(e) =>
              onInputChange({ id: 'firstName', value: e.target.value })
            }
          />
          {error.firstName && ErrorHandler(error.firstName)}
        </div>

        <div className="flex flex-col grow min-h-[6rem]">
          <label htmlFor="lastName">Etternavn</label>
          <input
            className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
            type="text"
            id="lastName"
            name="lastName"
            ref={refs.lastNameRef}
            placeholder="Etternavn"
            value={lastName}
            onChange={(e) =>
              onInputChange({ id: 'lastName', value: e.target.value })
            }
          />
          {error.lastName && ErrorHandler(error.lastName)}
        </div>
      </div>
      <div className="flex flex-col min-h-[6rem]">
        <label htmlFor="email">E-postadresse</label>
        <input
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="email"
          id="email"
          name="email"
          ref={refs.emailRef}
          placeholder="kontakt@lovhastudio.com"
          value={email}
          onChange={(e) =>
            onInputChange({ id: 'email', value: e.target.value })
          }
        />
        {error.email && ErrorHandler(error.email)}
      </div>
      <div className="flex flex-col min-h-[6rem] ">
        <label htmlFor="telephone">Telefon</label>
        <input
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="tel"
          id="telephone"
          name="telephone"
          ref={refs.telephoneRef}
          placeholder="12345678"
          value={telephone}
          onChange={(e) =>
            onInputChange({ id: 'telephone', value: e.target.value })
          }
        />
        {error.telephone && ErrorHandler(error.telephone)}
      </div>

      <fieldset className="flex flex-col min-h-[6rem] ">
        <legend>Emne</legend>
        <select
          aria-label="subject"
          value={subject}
          ref={refs.subjectRef}
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
        {error.subject && ErrorHandler(error.subject)}
      </fieldset>
      <div className="flex flex-col min-h-[12rem] 0">
        <label htmlFor="message">Melding</label>
        <textarea
          maxLength={250}
          className="pl-2 rounded-sm bg-gray-200"
          name="message"
          id="message"
          cols={0}
          rows={5}
          ref={refs.textAreaRef}
          value={textArea}
          onChange={(e) =>
            onInputChange({ id: 'textArea', value: e.target.value })
          }
        ></textarea>
        {error.textArea && ErrorHandler(error.textArea)}
      </div>

      <button type="submit" className="py-2 lg:py-3 bg-black text-white">
        Send
      </button>
    </>
  );
}

export default Form;
