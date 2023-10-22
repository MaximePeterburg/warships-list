import { useAtom } from 'jotai';
import { LEVELS_LIST, NATIONS_LIST, TYPES_LIST } from '../../data/FILTERS_DATA';
import { Vehicle } from '../__generated__/graphql';
import { activeFiltersAtom } from '../components/Filters';
import { filteredWarshipsAtom, warshipsAtom } from './WarshipsList';

export type Section = {
  name: string;
  title: string;
  options: {
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST | [];
    label?: string;
    icon?: string;
  }[];
};

type FilterProps = {
  sectionIdx: number;
  section: Section;
};

const Filter = ({ sectionIdx, section }: FilterProps) => {
  const [activeFilters, setActiveFilters] = useAtom(activeFiltersAtom);

  const [warships, setWarships] = useAtom(warshipsAtom);

  const [filteredWarships, setFilteredWarships] = useAtom(filteredWarshipsAtom);

  const activeFilterOptions = activeFilters.find(
    (activeFilter) => activeFilter.type === section.name
  )?.options;

  const onUpdateFilter = () => {
    const updatedFilteredWarships = warships
      .filter((warship: Vehicle) => {
        const options = activeFilters.find(
          (activeFilter) => activeFilter.type === 'level'
        )?.options;

        if (!options?.length) return true;
        return options.includes(warship.level);
      })
      .filter((warship: Vehicle) => {
        const options = activeFilters.find(
          (activeFilter) => activeFilter.type === 'type'
        )?.options;

        if (!options?.length) return true;
        return options.includes(warship.type?.name);
      })
      .filter((warship: Vehicle) => {
        const options = activeFilters.find(
          (activeFilter) => activeFilter.type === 'nation'
        )?.options;

        if (!options?.length) return true;
        return options.includes(warship.nation?.name);
      });
    setFilteredWarships(updatedFilteredWarships);
  };

  const isExisting = (value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST | []) => {
    return activeFilterOptions?.includes(value);
  };

  const updateFilter = (type: string) => {
    const updatedFilters = activeFilters.map((activeFilter) => {
      if (activeFilter.type == type) {
        activeFilter.options = activeFilterOptions;
      }
      return activeFilter;
    });
    setActiveFilters(updatedFilters);
  };
  const addOption = (
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST | [],
    type: string
  ) => {
    activeFilterOptions?.push(value);
    updateFilter(type);
  };

  const removeOption = (
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST | [],
    type: string
  ) => {
    const index = activeFilterOptions?.indexOf(value);
    activeFilterOptions?.splice(index, 1);
    updateFilter(type);
  };

  const onChangeFilter = (
    type: string,
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST | []
  ) => {
    if (isExisting(value)) {
      removeOption(value, type);
    } else {
      addOption(value, type);
    }
    onUpdateFilter();
  };

  return (
    <li className='px-1 pb-1 w-full flex justify-center bg-teal-800 text-gray-300'>
      <fieldset>
        <legend className='font-semibold py-2 text-center'>{section.title}</legend>
        <ul className={`grid ${section.options.length > 5 && 'grid-cols-2'}`}>
          {section.options.map((option, optionIdx) => (
            <li
              key={`${option.value}- -${optionIdx}`}
              className='flex items-center gap-1 py-1'>
              <input
                id={`${section.name}-${optionIdx}`}
                name={`${section.name}[]`}
                type='checkbox'
                className='h-7 w-7 accent-teal-950'
                onChange={() => onChangeFilter(section.name, option.value)}
                checked={isExisting(option.value)}
              />
              <label
                htmlFor={`${section.name}-${optionIdx}`}
                className='font-bolder select-none text-lg'>
                {option.icon ? (
                  <img
                    src={option.icon}
                    alt={`${option.label} icon`}
                    width={`${section.name === 'type' ? 28 : 44}`}
                    height='28'
                  />
                ) : (
                  option.label
                )}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </li>
  );
};

export default Filter;
