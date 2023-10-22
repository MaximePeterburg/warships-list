import { useQuery } from '@apollo/client';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';
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
  X = 10,
  XI = 11
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
export const warshipsAtom = atom<Vehicle[]>([]);
export const filteredWarshipsAtom = atom<Vehicle[]>([]);
export const pageCounterAtom = atom(10);
const WarshipsList = () => {
  const { loading, error, data: warshipList } = useQuery(GET_WARSHIPS);

  const [counter, setCounter] = useAtom(pageCounterAtom);

  const handleClick = () => {
    setCounter(counter + 10);
  };

  const [filteredWarships, setFilteredWarships] = useAtom(filteredWarshipsAtom);

  const [warships, setWarships] = useAtom(warshipsAtom);

  useEffect(() => {
    setWarships(warshipList?.vehicles);
    setFilteredWarships(warshipList?.vehicles);
  }, [warshipList]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка : {error.message}</p>;
  return (
    <>
      <ul className='grid gap-x-4 gap-y-4 grid-cols-fill-20 '>
        {filteredWarships?.slice(0, counter).map((warship: Vehicle) => (
          <WarshipCard warship={warship} key={warship.title} />
        ))}
      </ul>
      {filteredWarships?.length > counter && (
        <button
          className='text-gray-300 mx-auto w-fit px-2 py-1  border rounded-md'
          onClick={handleClick}>
          Показать еще
        </button>
      )}
    </>
  );
};

export default WarshipsList;
