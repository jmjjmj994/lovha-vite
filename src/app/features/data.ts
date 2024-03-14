import aboutImg from '../../assets/alle-mobile.webp';
export type AppLayoutData = {
  id: number;
  image: string;
  path: string;
  label: string;
  title: string;
  content: string;
};
export const AppData: AppLayoutData[] = [
  {
    id: 1,
    image: '#',
    path: '#',
    label: 'Les mer',
    title: 'Våre spill',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  {
    id: 2,
    image: '#',
    path: '#',
    label: 'Les mer',
    title: 'Prosjekter',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
  /*   {
    id: 3,
    image: '#',
    path: '#',
    label: 'Les mer',
    title: 'Samarbeid',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  }, */
  {
    id: 4,
    image: aboutImg,
    path: '#',
    label: 'Les mer',
    title: 'Om Lovha',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },

  {
    id: 5,
    image: '#',
    path: '#',
    label: 'Les mer',
    title: 'Kontakt',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  },
];
