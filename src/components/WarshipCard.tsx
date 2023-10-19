import { Vehicle } from '../__generated__/graphql';
import { convertToRoman } from '../utils/convertToRoman.util';

type WarshipCardProps = {
  warship: Vehicle;
};

const WarshipCard = ({ warship }: WarshipCardProps) => {
  const {
    description,
    icons: { medium: vehicleIconURL },
    title,
    type: {
      title: typeTitle,
      icons: { default: typeIconURL }
    },
    nation: {
      icons: { small: nationIconURL },
      name: nationName
    },
    level
  } = warship;
  return (
    <li className='px-4 py-2 max-w-sm bg-slate-800 relative'>
      <img src={vehicleIconURL} alt={title} />
      <header className='flex absolute top-2 w-full'>
        <div className='relative'>
          <img className='opacity-60' src={nationIconURL} alt={nationName} />
          <img className='absolute top-0 ' src={typeIconURL} alt={typeTitle} />
          <p className='absolute text-gray-100 top-0 left-7 font-semibold'>
            {convertToRoman(level || 0)}
          </p>
        </div>
        <h2 className='text-2xl mx-auto text-gray-100 font-semibold'>
          {title.toUpperCase()}
        </h2>
      </header>
      <details>
        <summary className='text-gray-100'>Описание коробля</summary>
        <p className='italic text-gray-100'>{description}</p>
      </details>
    </li>
  );
};

export default WarshipCard;
