import { useAtom } from 'jotai';
import { ChangeEvent } from 'react';
import { LEVELS, NATIONS, WARSHIP_TYPES } from '../../data/FILTER_DATA';
import { convertToRoman } from '../utils/convertToRoman.util';
import { levelFilterAtom, nationFilterAtom, typeFilterAtom } from './WarshipsList';
const Filters = () => {
  const [levelFilter, setLevelFilter] = useAtom(levelFilterAtom);
  const [typeFilter, setTypeFilter] = useAtom(typeFilterAtom);
  const [nationFilter, setNationFilter] = useAtom(nationFilterAtom);

  const handleLevelChange = (e: ChangeEvent<HTMLInputElement>, level: number) =>
    setLevelFilter(level);

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>, type: string) =>
    setTypeFilter(type);

  const handleNationChange = (e: ChangeEvent<HTMLInputElement>, nation: string) =>
    setNationFilter(nation);

  return (
    <div className='max-w-xl mx-auto bg-teal-800 text-gray-300 '>
      <h2 className='font-semibold border-b border-teal-900 px-3 py-1'>Фильтры</h2>
      <div className='flex'>
        <div className='px-1 pb-1'>
          <h3 className='font-semibold text-center py-3'>Уровень</h3>
          <ul className='grid gap-y-2 grid-cols-2'>
            {LEVELS.map((level) => (
              <li key={level} className='flex items-center gap-x-1'>
                <input
                  onChange={(e) => handleLevelChange(e, level)}
                  className='h-7 w-7'
                  type='checkbox'
                  id={convertToRoman(level)}
                />
                <label
                  htmlFor={convertToRoman(level)}
                  className='font-bolder select-none text-lg'>
                  {convertToRoman(level)}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col  border-x border-teal-900 px-1 pb-1'>
          <h3 className='font-semibold text-center py-3'>Класс</h3>
          <ul className='gap-y-2 grid'>
            {WARSHIP_TYPES.map((type) => (
              <li key={type.title} className='flex items-center gap-x-1'>
                <input
                  onChange={(e) => handleTypeChange(e, type.title)}
                  className='h-7 w-7'
                  type='checkbox'
                  id={type.title}
                />
                <label htmlFor={type.title} className='font-bolder select-none'>
                  <img
                    src={type.icon}
                    alt={`${type.title} type`}
                    width='27'
                    height='27'
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className='px-1 pb-1'>
          <h3 className='font-semibold text-center py-3'>Нация</h3>
          <ul className='grid gap-y-2 grid-cols-2'>
            {NATIONS.map((nation) => (
              <li key={nation.title} className='flex items-center gap-x-1'>
                <input
                  onChange={(e) => handleNationChange(e, nation.title)}
                  className='h-7 w-7'
                  type='checkbox'
                  id={nation.title}
                />
                <label htmlFor={nation.title} className='font-bolder select-none px-1'>
                  <img width='44' height='27' src={nation.icon} alt={`${nation.title}`} />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
