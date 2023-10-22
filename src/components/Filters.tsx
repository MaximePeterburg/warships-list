import { atom, useAtom } from 'jotai';
import {
  FILTERS_DATA,
  LEVELS_LIST,
  NATIONS_LIST,
  TYPES_LIST
} from '../../data/FILTERS_DATA';
import Filter from './Filter';
import { filteredWarshipsAtom, pageCounterAtom, warshipsAtom } from './WarshipsList';

export const activeFiltersAtom = atom<
  {
    type: string;
    options: TYPES_LIST[] | NATIONS_LIST[] | LEVELS_LIST[] | [];
  }[]
>([
  { type: 'level', options: [] },
  { type: 'type', options: [] },
  { type: 'nation', options: [] }
]);
const Filters = () => {
  const [warships, setWarships] = useAtom(warshipsAtom);
  const [activeFilters, setActiveFilters] = useAtom(activeFiltersAtom);
  const [counter, setCounter] = useAtom(pageCounterAtom);

  const [filteredWarships, setFilteredWarships] = useAtom(filteredWarshipsAtom);
  const reset = () => {
    setCounter(10);
    setFilteredWarships(warships);
    setActiveFilters([
      { type: 'level', options: [] },
      { type: 'type', options: [] },
      { type: 'nation', options: [] }
    ]);
  };
  return (
    <form className='flex flex-col gap-0.5  items-center'>
      <div className='py-2 px-4 max-w-lg w-full flex bg-teal-800 gap-4'>
        <h2 className='font-bold  text-gray-400 '>Фильры</h2>
        <p
          onClick={reset}
          className='cursor-pointer font-medium text-gray-300 hover:text-gray-100'>
          Сбросить все
        </p>
      </div>
      <ul className='flex gap-0.5 max-w-lg w-full'>
        {FILTERS_DATA.map((section, sectionIdx) => (
          <Filter key={section.name} section={section} sectionIdx={sectionIdx} />
        ))}
      </ul>
    </form>
  );
};

export default Filters;
