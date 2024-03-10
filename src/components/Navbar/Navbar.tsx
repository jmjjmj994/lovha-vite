type NavbarProps = {
  active: boolean;
  handleToggler: () => void;
};

function Navbar({ active, handleToggler }: NavbarProps) {
  return (
    <nav>
      <div className="navbar-wrapper wrapper">
        <button onClick={() => handleToggler()}>close</button>
      </div>
    </nav>
  );
}
export default Navbar;
