import { useAtom } from 'jotai';
import { LEVELS_LIST, NATIONS_LIST, TYPES_LIST } from '../../data/FILTERS_DATA';
import { Vehicle } from '../__generated__/graphql';
import { activeFiltersAtom } from '../components/Filters';
import { filteredWarshipsAtom, warshipsAtom } from './WarshipsList';

export type Section = {
  name: string;
  title: string;
  options: {
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST;
    label?: string;
    icon?: string;
  }[];
};

type FilterProps = {
  section: Section;
};

const Filter = ({ section }: FilterProps) => {
  const [activeFilters, setActiveFilters] = useAtom(activeFiltersAtom);
  const [warships, setWarships] = useAtom(warshipsAtom);
  const [filteredWarships, setFilteredWarships] = useAtom(filteredWarshipsAtom);

  // Select relevant to the section filter options
  const activeFilterOptions = activeFilters.find(
    (activeFilter) => activeFilter.type === section.name
  )?.options;

  const handleUpdate = () => {
    //filter all warships list by active filters
    const updatedFilteredWarships = warships
      .filter((warship: Vehicle) => {
        // select active levels filter options
        const options = activeFilters.find(
          (activeFilter) => activeFilter.type === 'level'
        )?.options;

        // if none of the level options selected, return each warship of the list
        if (!options?.length) return true;

        // if selected options are selected, and the warship has level that is selected, then add warship to the updated list
        return options.includes(warship.level);
      })
      .filter((warship: Vehicle) => {
        // select active warship type filter options
        const options = activeFilters.find(
          (activeFilter) => activeFilter.type === 'type'
        )?.options;

        // if none of the warship type options selected, return each warship of the list
        if (!options?.length) return true;

        // if selected options are selected, and the warship has type that is selected, then add warship to the updated list
        return options.includes(warship.type?.name);
      })
      .filter((warship: Vehicle) => {
        // select active nations filter options
        const options = activeFilters.find(
          (activeFilter) => activeFilter.type === 'nation'
        )?.options;

        // if none of the warship nation options selected, return each warship of the list
        if (!options?.length) return true;

        // if selected options are selected, and the warship has nation that is selected, then add warship to the updated list
        return options.includes(warship.nation?.name);
      });
    // set state with newely updated warships
    setFilteredWarships(updatedFilteredWarships);
  };

  const isExistingActiveFilterOption = (
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST | []
  ) => activeFilterOptions?.includes(value);

  const updateFilter = (type: string) => {
    const updatedFilters = activeFilters.map((activeFilter) => {
      console.log(activeFilters);

      if (activeFilter.type == type) {
        activeFilter.options = activeFilterOptions;
      }
      return activeFilter;
    });

    setActiveFilters(updatedFilters);
  };

  // add filter to active filters list
  const addActiveFilterOption = (
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST,
    type: string
  ) => {
    activeFilterOptions?.push(value);
    updateFilter(type);
  };

  // remove filter from active filters list
  const removeActiveFilterOption = (
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST,
    type: string
  ) => {
    const index = activeFilterOptions?.indexOf(value);
    activeFilterOptions?.splice(index, 1);
    updateFilter(type);
  };

  const handleChange = (
    type: string,
    value: TYPES_LIST | NATIONS_LIST | LEVELS_LIST | []
  ) => {
    if (!isExistingActiveFilterOption(value)) {
      addActiveFilterOption(value, type);
      return;
    }
    if (isExistingActiveFilterOption(value)) {
      removeActiveFilterOption(value, type);
    }
    handleUpdate();
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
                onChange={() => handleChange(section.name, option.value)}
                checked={isExistingActiveFilterOption(option.value)}
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
                  <p>{option.label}</p>
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
