import { Vehicle } from '../__generated__/graphql';
import { convertToRoman } from '../utils/convertToRoman.util';

type WarshipCardProps = {
  warship: Vehicle;
};

const WarshipCard = ({ warship }: WarshipCardProps) => {
  return (
    <li className='px-4 py-2 max-w-xs  h-min  bg-teal-800  relative '>
      <img src={warship.icons?.medium} width='288' height='170' alt={warship.title} />
      <header className='flex absolute top-2 '>
        <div className='relative'>
          <img
            className='opacity-60'
            height='72'
            width='117'
            src={warship.nation?.icons?.small}
            alt={warship.nation?.title}
          />
          <img
            className='absolute top-0 '
            src={warship.type?.icons?.default}
            alt={warship.type?.title}
          />
          <p className='absolute text-gray-100 top-0 left-7 font-semibold'>
            {convertToRoman(warship.level || 0)}
          </p>
        </div>
        <h2 className='text-2xl text-center text-gray-100 font-semibold'>
          {warship.title.toUpperCase()}
        </h2>
      </header>
      <details>
        <summary className='text-gray-100 list-none cursor-pointer underline'>
          Описание коробля
        </summary>
        <p className='italic text-gray-100'>{warship.description}</p>
      </details>
    </li>
  );
};

export default WarshipCard;
