import { team } from './data';

function Members() {
  return (
    <section>
      <h2>Vårt Team</h2>
      <div>
        <MembersCard />
      </div>
    </section>
  );
}

function MembersCard() {
  return (
    <>
      {team.map(({ id, role, name, image }) => (
        <p>{role}</p>
      ))}
    </>
  );
}

export default Members;
