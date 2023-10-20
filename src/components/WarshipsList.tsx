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
export const filteredWarshipsAtom = atom<Vehicle[] | null>([]);
export const warshipsAtom = atom<Vehicle[] | null>([]);

const WarshipsList = () => {
  const [warshipItems, setWarshipsItems] = useAtom(warshipsAtom);

  const [filteredWarships, setFilteredWarships] = useAtom(filteredWarshipsAtom);

  const { loading, error, data: warshipList } = useQuery(GET_WARSHIPS);
  useEffect(() => {
    setFilteredWarships(warshipList?.vehicles);
    setWarshipsItems(warshipList?.vehicles);
  }, [warshipList]);
  console.log('inside list', filteredWarships);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка : {error.message}</p>;
  return (
    <ul className='grid gap-x-4 gap-y-4 grid-cols-fill-20 '>
      {filteredWarships?.map((warship: Vehicle) => (
        <WarshipCard warship={warship} key={warship.title} />
      ))}
    </ul>
  );
};

export default WarshipsList;
