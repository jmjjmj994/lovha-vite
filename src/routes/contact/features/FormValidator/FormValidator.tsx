function Validate(
  formData,
  setError,
  firstNameRef,
  lastNameRef,
  emailRef,
  subjectRef,
  telephoneRef,
  textAreaRef
) {
  console.log(formData, firstNameRef);
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
    inputError.firstName = 'First name is required';
    firstNameRef.current.style = 'outline: 1px solid red';
  } else {
    firstNameRef.current.style = 'outline:1px solid green';
  }

  if (lastName.trim() === '') {
    inputError.lastName = 'Last name is required';
    lastNameRef.current.style = 'outline: 1px solid red';
  } else {
    lastNameRef.current.style = 'outline:1px solid green';
  }

  if (!emailRegex.test(email)) {
    inputError.email = 'Invalid email address';
    emailRef.current.style = 'outline: 1px solid red';
  } else {
    emailRef.current.style = 'outline:1px solid green';
  }

  if (!telephoneRegex.test(telephone)) {
    inputError.telephone = 'Invalid telephone number';
    telephoneRef.current.style = 'outline: 1px solid red';
  } else {
    telephoneRef.current.style = 'outline:1px solid green';
  }

  if (subject.trim() === '') {
    inputError.subject = 'Subject is required';
    subjectRef.current.style = 'outline: 1px solid red';
  } else {
    subjectRef.current.style = 'outline:1px solid green';
  }

  if (textArea.trim() === '') {
    inputError.textArea = 'Message is required';
    textAreaRef.current.style = 'outline: 1px solid red';
  } else {
    textAreaRef.current.style = 'outline:1px solid green';
  }

  setError(inputError);

  return Object.values(inputError).every((error) => error === '');
}
export default Validate;
