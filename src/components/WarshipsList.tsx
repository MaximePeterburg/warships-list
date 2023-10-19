import { useQuery } from '@apollo/client';
import { Vehicle } from '../__generated__/graphql';
import { GET_WARSHIPS } from '../queries/queries';
import WarshipCard from './WarshipCard';

const WarshipsList = () => {
  const { loading, error, data: warshipList } = useQuery(GET_WARSHIPS);
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка : {error.message}</p>;
  return (
    <ul className='flex flex-col items-center gap-3 '>
      {warshipList.vehicles.map((warship: Vehicle) => (
        <WarshipCard warship={warship} key={warship.title} />
      ))}
    </ul>
  );
};

export default WarshipsList;
