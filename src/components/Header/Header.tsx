import Navbar from '../Navbar';
import useToggler from '../../hooks/use-toggler';
import logo from '../../assets/logo/lova-logo-use.png';
function Header() {
  const [active, handleToggler] = useToggler();
  return (
    <header>
      <div className="header-wrapper block-wrapper h-full bg-bg-secondary-clr flex justify-between items-center">
        <div className="max-w-[7.5rem]  w-full h-auto ">
          <img className="" src={logo} alt="" />
        </div>
        <Navbar active={active} handleToggler={handleToggler} />
        <button
          aria-label="open"
          className="lg:hidden"
          onClick={() => handleToggler()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
export default Header;
