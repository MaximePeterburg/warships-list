import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { LEVELS, NATIONS, WARSHIP_TYPES } from '../../data/FILTER_DATA';
import { convertToRoman } from '../utils/convertToRoman.util';
import { filteredWarshipsAtom, warshipsAtom } from './WarshipsList';
const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [warshipItems] = useAtom(warshipsAtom);
  const [filteredWarships, setFilteredWarships] = useAtom(filteredWarshipsAtom);

  const handleFilterChange = (selectedFilter) => {
    if (!selectedFilters.includes(selectedFilter)) {
      setSelectedFilters([...selectedFilters, selectedFilter]);
      return;
    }
    if (selectedFilters.includes(selectedFilter)) {
      const filters = selectedFilters.filter((filter) => filter !== selectedFilter);
      setSelectedFilters(filters);
    }
    console.log('inside handle change filter', selectedFilters);
  };
  useEffect(() => {
    filterWarships();
  }, [selectedFilters]);
  const filterWarships = () => {
    if (!(selectedFilters.length > 0)) setFilteredWarships([...warshipItems]);
    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters.map((selectedFilter) => {
        const temp = warshipItems?.filter((warship) => {
          const {
            level,
            type: { name: typeName },
            nation: { name: nationName }
          } = warship;
          return (
            level === selectedFilter ||
            typeName === selectedFilter ||
            nationName === selectedFilter
          );
        });
        console.log('temp', temp);

        return temp;
      });
      console.log('tempItems', tempItems);
      console.log('flat', tempItems.flat());

      setFilteredWarships(tempItems.flat());
    }
  };
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
                  className='h-7 w-7'
                  type='checkbox'
                  onChange={() => handleFilterChange(level)}
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
                  className='h-7 w-7'
                  type='checkbox'
                  onChange={() => handleFilterChange(type.title)}
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
                  className='h-7 w-7'
                  type='checkbox'
                  onChange={() => handleFilterChange(nation.title)}
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
