function Form() {
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
      <div className="flex flex-col">
        <label htmlFor="fullt-navn">Fullt navn</label>
        <input
          className="py-2 lg:py-3 rounded-sm pl-2 bg-gray-200"
          type="text"
          id="fullt-navn"
          name="fullt-navn"
          placeholder="Fullt Navn"
        />
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
