import { useState } from 'react';
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[20px] max-w-[50rem] w-full px-5 "
    >
      <h1 className="text-left">Kontakt Oss</h1>
      <ContactFormInput />
    </form>
  );
}

function ContactFormInput() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="flex flex-col grow">
          <label htmlFor="fornavn">Fornavn</label>
          <input
            className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
            type="text"
            id="fornavn"
            name="fornavn"
            placeholder="Fornavn"
          />
        </div>

        <div className="flex flex-col grow">
          <label htmlFor="etternavn">Etternavn</label>
          <input
            className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
            type="text"
            id="etternavn"
            name="etternavn"
            placeholder="Etternavn"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="e-postadresse">E-postadresse</label>
        <input
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="text"
          id="e-postadresse"
          name="e-postadresse"
          placeholder="kontakt@lovhastudio.com"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="telefon">Telefon</label>
        <input
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="text"
          id="telefon"
          name="telefon"
          placeholder="+47 488 88 888"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="emne">Emne</label>

        <input
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="text"
          id="emne"
          name="emne"
          placeholder="Hva gjelder det?"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="melding">Melding</label>

        <textarea
          className="pl-2 rounded-sm bg-gray-200"
          name="melding"
          id="melding"
          cols={0}
          rows={5}
        ></textarea>
      </div>

      <button className="py-2 lg:py-3 bg-black text-white">Send</button>
    </>
  );
}

export default Form;
