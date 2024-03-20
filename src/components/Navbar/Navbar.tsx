import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import navbarLinks from './NavbarLinks';

type NavbarProps = {
  active: boolean;
  handleToggler: () => void;
};

function Navbar({ active, handleToggler }: NavbarProps) {
  function close() {
    handleToggler();
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && active) {
        close();
      }
    }

    if (active) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  console.log(active);

  return (
    <nav
      className={`bg-bg-secondary-clr z-[2]  fixed flex flex-col  right-0 top-0 w-full h-full lg:static lg:w-auto lg:flex-row lg:h-auto ${
        active ? 'translate-x-0' : 'translate-x-full'
      }
      lg:translate-x-0
      `}
    >
      <div className="flex flex-col justify-center h-[5rem] lg:hidden bg-blue-500">
        <button
          aria-label="close"
          className="self-end"
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="h-full w-full flex flex-col  pl-20 pt-20 lg:pl-0 lg:pt-0 lg:flex-row  lg:justify-center lg:gap-[30px]">
        {navbarLinks.map(({ id, label, path}) => (
          <li className={`text-xl mt-12 lg:mt-0 lg:text-sm   font-mono `} key={id}>
            <Link
            
              to={path}
              onClick={() => close()}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
