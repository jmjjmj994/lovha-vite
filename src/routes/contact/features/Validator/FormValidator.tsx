import { FormData, InputError, ContactFormInputRefs } from '../Form';

function Validate(
  formData: FormData,
  setError: (arg: InputError) => void,
  firstNameRef: React.RefObject<HTMLInputElement> | null,
  lastNameRef: HTMLInputElement | null,
  emailRef: HTMLInputElement | null,
  subjectRef: HTMLSelectElement | null,
  telephoneRef: HTMLInputElement | null,
  textAreaRef: HTMLTextAreaElement | null
) {
  const { firstName, lastName, email, telephone, subject, textArea } = formData;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telephoneRegex = /^\d{8}$/;
  const inputError = {
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    subject: '',
    textArea: '',
  };

  if (firstName.trim() === '') {
    inputError.firstName = 'Vennligst skriv ditt fornavn';
    firstNameRef.current.style = 'outline: 1px solid red';
  } else {
    firstNameRef.current.style = 'outline:1px solid green';
  }

  if (lastName.trim() === '') {
    inputError.lastName = 'Vennligst skriv ditt etternavn';
    lastNameRef.current.style = 'outline: 1px solid red';
  } else {
    lastNameRef.current.style = 'outline:1px solid green';
  }

  if (!emailRegex.test(email)) {
    inputError.email = 'Ugyldig e-postadresse';
    emailRef.current.style = 'outline: 1px solid red';
  } else {
    emailRef.current.style = 'outline:1px solid green';
  }

  if (!telephoneRegex.test(telephone)) {
    inputError.telephone = 'Ugyldig telefon nummer';
    telephoneRef.current.style = 'outline: 1px solid red';
  } else {
    telephoneRef.current.style = 'outline:1px solid green';
  }

  if (subject.trim() === '') {
    inputError.subject = 'Vennligst velg kategori';
    subjectRef.current.style = 'outline: 1px solid red';
  } else {
    subjectRef.current.style = 'outline:1px solid green';
  }

  if (textArea.trim() === '') {
    inputError.textArea = 'Vennligst skriv din melding';
    textAreaRef.current.style = 'outline: 1px solid red';
  } else {
    textAreaRef.current.style = 'outline:1px solid green';
  }

  setError(inputError);

  return Object.values(inputError).every((error) => error === '');
}
export default Validate;
