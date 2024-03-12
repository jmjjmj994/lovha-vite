type NavbarLinks = {
  id: number;
  label: string;
  path: string;
};
const navbarLinks: NavbarLinks[] = [
  { id: 1, label: 'Hjem', path: '/' },
  { id: 2, label: 'Spill', path: '#' },
  { id: 3, label: 'Prosjekter', path: '#' },
  { id: 4, label: 'Om oss', path: '#' },
  { id: 5, label: 'Kontakt', path: '/contact' },
];

export default navbarLinks;
