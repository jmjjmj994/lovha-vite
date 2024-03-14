import imgJørgen from '../../../assets/jørgen-tiny.webp';
import imgKaeo from '../../../assets/kaeo-tiny.webp';
import imgMorten from '../../../assets/morten-tiny.webp';
import imgTobias from '../../../assets/tobias-tiny.webp';

type Team = {
  id: number;
  role: string;
  firstName: string;
  lastName: string;
  image: string;
};

export const about = [{}];

export const team: Team[] = [
  {
    id: 1,
    role: 'Daglig leder og programmerer',
    firstName: 'Kaeophailin',
    lastName: 'Lueangphinyo',
    image: imgKaeo,
  },
  {
    id: 2,
    role: 'Nest leder og 3D modellerer',
    firstName: 'Jørgen',
    lastName: 'Villanueva',
    image: imgJørgen,
  },
  {
    id: 3,
    role: 'Programmerer og 3D modellerer',
    firstName: 'Morten',
    lastName: 'Hermansen',
    image: imgMorten,
  },
  { id: 4, role: '3D modellerer', firstName:'Tobias',
  lastName:'Ormset', image: imgTobias },
];
