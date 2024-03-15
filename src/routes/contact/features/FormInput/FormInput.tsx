import ErrorHandler from '../helpers/ErrorFeedback';
import { GenericState, ContactFormInputRefs } from '../Form';
function ContactFormInput({
  onInputChange,
  error,
  formData,
  ...rest
}: {
  onInputChange: (data: { id: string; value: string }) => void;
  error: GenericState;
  formData: GenericState;
} & ContactFormInputRefs) {
  const { firstName, lastName, email, telephone, subject, textArea } = formData;

  return (
    <>
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="flex flex-col grow  min-h-[6rem]">
          <label htmlFor="first-name">Fornavn</label>
          <input
            className="py-2 lg:py-3 rounded-sm pl-2 bg-bg-secondary-clr"
            type="text"
            id="firstName"
            name="firstName"
            ref={rest.firstNameRef}
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
            className="py-2 lg:py-3 rounded-sm pl-2 bg-bg-secondary-clr"
            type="text"
            id="lastName"
            name="lastName"
            ref={rest.lastNameRef}
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
          className="py-2 lg:py-3 rounded-sm pl-2 bg-bg-secondary-clr"
          type="email"
          id="email"
          name="email"
          ref={rest.emailRef}
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
          className="py-2 lg:py-3 rounded-sm pl-2 bg-bg-secondary-clr"
          type="tel"
          id="telephone"
          name="telephone"
          ref={rest.telephoneRef}
          placeholder="12345678"
          value={telephone}
          onChange={(e) =>
            onInputChange({ id: 'telephone', value: e.target.value })
          }
        />
        {error.telephone && ErrorHandler(error.telephone)}
      </div>

      <fieldset className="flex flex-col min-h-[6rem]  ">
        <legend>Emne</legend>
        <select
          aria-label="subject"
          value={subject}
          ref={rest.subjectRef}
          onChange={(e) =>
            onInputChange({ id: 'subject', value: e.target.value })
          }
          className="rounded-sm pl-2 py-2 lg:py-3 bg-bg-secondary-clr"
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
          className="pl-2 rounded-sm bg-bg-secondary-clr"
          name="message"
          id="message"
          cols={0}
          rows={5}
          ref={rest.textAreaRef}
          value={textArea}
          onChange={(e) =>
            onInputChange({ id: 'textArea', value: e.target.value })
          }
        ></textarea>
        {error.textArea && ErrorHandler(error.textArea)}
      </div>

      <button type="submit" className="py-2 lg:py-3 bg-blue-B400 text-white">
        Send
      </button>
    </>
  );
}
export default ContactFormInput;
