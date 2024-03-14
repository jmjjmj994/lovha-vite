import imgJørgen from '../../../assets/jørgen.jpg';
import imgKaeo from '../../../assets/kaeo.jpg';
import imgMorten from '../../../assets/morten.jpg';
import imgTobias from '../../../assets/tobias.jpg';

type Team = {
  id: number;
  role: string;
  name: string;
  image: string;
};

export const about = [{}];

export const team: Team[] = [
  {
    id: 1,
    role: 'Daglig leder og programmerer',
    name: 'Kaeophailin Lueangphinyo',
    image: imgKaeo,
  },
  {
    id: 2,
    role: 'Nest leder og 3D modellerer',
    name: 'Jørgen Villanueva',
    image: imgJørgen,
  },
  {
    id: 3,
    role: 'Programmerer og 3D modellerer',
    name: 'Morten Hermansen',
    image: imgMorten,
  },
  { id: 4, role: '3D modellerer', name: 'Tobias Ormset', image: imgTobias },
];
