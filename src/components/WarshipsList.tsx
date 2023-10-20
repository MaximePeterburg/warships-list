import { useQuery } from '@apollo/client';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { Vehicle } from '../__generated__/graphql';
import { GET_WARSHIPS } from '../queries/queries';
import WarshipCard from './WarshipCard';

export enum LEVELS_LIST {
  I = 1,
  II = 2,
  III = 3,
  IV = 4,
  V = 5,
  VI = 6,
  VII = 7,
  VIII = 8,
  IX = 9,
  X = 10
}
export enum NATIONS_LIST {
  JAPAN = 'japan',
  USA = 'usa',
  USSR = 'ussr',
  GERMANY = 'germany',
  UK = 'uk',
  FRANCE = 'france',
  PAN_ASIA = 'pan_asia',
  ITALY = 'italy',
  COMMONWEALTH = 'commonwealth',
  PAN_AMERICA = 'pan_america',
  EUROPE = 'europe',
  NETHERLANDS = 'netherlands',
  SPAIN = 'spain'
}
export enum TYPES_LIST {
  SUBMARINE = 'submarine',
  DESTROYER = 'destroyer',
  CRUISER = 'cruiser',
  BATTLESHIP = 'battleship',
  AIRCARRIER = 'aircarrier'
}

export const levelFilterAtom = atom(0);
export const typeFilterAtom = atom('');
export const nationFilterAtom = atom('');

const WarshipsList = () => {
  const [levelFilter, setLevelFilter] = useAtom(levelFilterAtom);
  const [typeFilter, setTypeFilter] = useAtom(typeFilterAtom);
  const [nationFilter, setNationFilter] = useAtom(nationFilterAtom);

  const { loading, error, data: warshipList } = useQuery(GET_WARSHIPS);

  const filteredWarships = warshipList?.vehicles.filter((warship: Vehicle) => {
    return (
      (levelFilter === 0 || warship.level === levelFilter) &&
      (typeFilter === null ||
        typeFilter === '' ||
        warship.type?.name?.includes(typeFilter)) &&
      (nationFilter === null ||
        nationFilter === '' ||
        warship.nation?.name?.includes(nationFilter))
    );
  });
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка : {error.message}</p>;
  return (
    <ul className='grid gap-x-4 gap-y-4 grid-cols-fill-20 '>
      {filteredWarships.map((warship: Vehicle) => (
        <WarshipCard warship={warship} key={warship.title} />
      ))}
    </ul>
  );
};

export default WarshipsList;
