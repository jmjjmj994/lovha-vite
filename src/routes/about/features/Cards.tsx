import { team } from './data';
import { FaArtstation, FaLinkedinIn } from 'react-icons/fa';
function Members() {
  return (
    <section>
      <h2>Vårt Team</h2>
      <div className="flex justify-center md:justify-between flex-wrap gap-[5px]">
        <MembersCard />
      </div>
    </section>
  );
}

function MembersCard() {
  return (
    <>
      {team.map(({ id, role, firstName, lastName, image }) => (
        <article key={id} className="bg-bg-secondary-clr py-5 px-5">
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
          <div className="flex justify-center gap-[15px]">
            <a href="">
              {' '}
              <FaArtstation />
            </a>
            <a href="">
              {' '}
              <FaLinkedinIn />
            </a>
          </div>
        </article>
      ))}
    </>
  );
}

export default Members;
