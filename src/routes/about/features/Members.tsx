import { team } from './data';

function Members() {
  return (
    <section className="bg-purple-500">
      <h2>Vårt Team</h2>
      <div className="flex justify-center md:justify-between flex-wrap ">
        <MembersCard />
      </div>
    </section>
  );
}

function MembersCard() {
  return (
    <>
      {team.map(({ id, role, firstName, lastName, image }) => (
        <article key={id} className="bg-orange-500">
          <img
            className="rounded-full h-[10rem] w-[10rem] object-cover aspect-square m-auto"
            src={image}
            alt={`image of ${name}`}
          />
          <div>
            <p className="small-text text-center">{role}</p>
            <h3 className="text-center ">
              <span className="block">{firstName}</span>
              <span className="block">{lastName}</span>
            </h3>
          </div>
        </article>
      ))}
    </>
  );
}

export default Members;
