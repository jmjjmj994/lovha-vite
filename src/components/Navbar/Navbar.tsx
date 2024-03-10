type NavbarProps = {
  active: boolean;
  handleToggler: () => void;
};

function Navbar({ active, handleToggler }: NavbarProps) {
  return (
    <nav>
      <button onClick={() => handleToggler()}>close</button>
    </nav>
  );
}
export default Navbar;
