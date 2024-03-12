import { useRef, useState } from 'react';

import ContactFormInput from '../FormInput/FormInput';
import Validate from '../Validator/FormValidator';
import emailjs from '@emailjs/browser';
const emailID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export interface InputError {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  subject: string;
  textArea: string;
}
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  subject: string;
  textArea: string;
}

export interface ContactFormInputRefs {
  firstNameRef: React.RefObject<HTMLInputElement>;
  lastNameRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  telephoneRef: React.RefObject<HTMLInputElement>;
  subjectRef: React.RefObject<HTMLSelectElement>;
  textAreaRef: React.RefObject<CustomHTMLTextAreaElement>;
}
export interface CustomHTMLTextAreaElement extends HTMLTextAreaElement {
  cols?: number;
  rows?: number;
}

function Form() {
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const telephoneRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLSelectElement | null>(null);
  const textAreaRef = useRef<CustomHTMLTextAreaElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    subject: '',
    textArea: '',
  });
  const [error, setError] = useState<InputError>({
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
        if (firstNameRef.current) firstNameRef.current.style.outline = 'none';
        if (lastNameRef.current) lastNameRef.current.style.outline = 'none';
        if (emailRef.current) emailRef.current.style.outline = 'none';
        if (subjectRef.current) subjectRef.current.style.outline = 'none';
        if (textAreaRef.current) textAreaRef.current.style.outline = 'none';
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

export default Form;
