import Navbar from '../Navbar';
import useToggler from '../../hooks/toggler/useToggler';
function Header() {
  const [active, handleToggler] = useToggler();
  return (
    <header>
      <div className='header-wrapper wrapper'>
      <h1>Logo</h1>
      <Navbar active={active} handleToggler={handleToggler} />
      <button onClick={() => handleToggler()}>menu</button>
      </div>
    </header>
  );
}
export default Header;
