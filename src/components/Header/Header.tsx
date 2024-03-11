import Navbar from '../Navbar';
import useToggler from '../../hooks/toggler/useToggler';
function Header() {
  const [active, handleToggler] = useToggler();
  return (
    <header>
      <div className="header-wrapper wrapper h-full bg-blue-500 flex justify-between items-center">
        <h1>Logo</h1>
        <Navbar active={active} handleToggler={handleToggler} />
        <button
          aria-label="open"
          className="lg:hidden"
          onClick={() => handleToggler()}
        >
          menu
        </button>
      </div>
    </header>
  );
}
export default Header;
