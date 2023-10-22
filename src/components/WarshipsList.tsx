import { useQuery } from '@apollo/client';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { Vehicle } from '../__generated__/graphql';
import { GET_WARSHIPS } from '../queries/queries';
import WarshipCard from './WarshipCard';

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

  if (loading)
    return (
      <div className=' h-10 w-full flex justify-center items-center'>
        <div className='inline-block w-10 h-10 border-2 border-gray-300 rounded-full border-t-teal-800 animate-spin' />
      </div>
    );
  if (error)
    return <p className='mx-auto text-gray-300 font-bold'>Ошибка : {error.message}</p>;
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
