import commonwealth from '../src/assets/flags/commonwealth.png';
import europe from '../src/assets/flags/europe.png';
import france from '../src/assets/flags/france.png';
import germany from '../src/assets/flags/germany.png';
import italy from '../src/assets/flags/italy.png';
import japan from '../src/assets/flags/japan.png';
import netherlands from '../src/assets/flags/netherlands.png';
import panAmerica from '../src/assets/flags/panAmerica.png';
import panAsia from '../src/assets/flags/panAsia.png';
import spain from '../src/assets/flags/spain.png';
import uk from '../src/assets/flags/uk.png';
import usa from '../src/assets/flags/usa.png';
import ussr from '../src/assets/flags/ussr.png';
import aircarrier from '../src/assets/typeIcons/aircarrier.png';
import battleship from '../src/assets/typeIcons/battleship.png';
import cruiser from '../src/assets/typeIcons/cruiser.png';
import destroyer from '../src/assets/typeIcons/destroyer.png';
import submarine from '../src/assets/typeIcons/submarine.png';
import { convertToRoman } from '../src/utils/convertToRoman.util';

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

export const FILTERS_DATA = [
  {
    name: 'level',
    title: 'Уровень',
    options: [
      { value: LEVELS_LIST.I, label: convertToRoman(LEVELS_LIST.I) },
      { value: LEVELS_LIST.VII, label: convertToRoman(LEVELS_LIST.VII) },
      { value: LEVELS_LIST.II, label: convertToRoman(LEVELS_LIST.II) },
      { value: LEVELS_LIST.VIII, label: convertToRoman(LEVELS_LIST.VIII) },
      { value: LEVELS_LIST.III, label: convertToRoman(LEVELS_LIST.III) },
      { value: LEVELS_LIST.IX, label: convertToRoman(LEVELS_LIST.IX) },
      { value: LEVELS_LIST.IV, label: convertToRoman(LEVELS_LIST.IV) },
      { value: LEVELS_LIST.X, label: convertToRoman(LEVELS_LIST.X) },
      { value: LEVELS_LIST.V, label: convertToRoman(LEVELS_LIST.V) },
      { value: LEVELS_LIST.XI, label: convertToRoman(LEVELS_LIST.XI) },
      { value: LEVELS_LIST.VI, label: convertToRoman(LEVELS_LIST.VI) }
    ]
  },
  {
    name: 'type',
    title: 'Класс',
    options: [
      { value: TYPES_LIST.SUBMARINE, icon: submarine },
      { value: TYPES_LIST.DESTROYER, icon: destroyer },
      { value: TYPES_LIST.CRUISER, icon: cruiser },
      { value: TYPES_LIST.BATTLESHIP, icon: battleship },
      { value: TYPES_LIST.AIRCARRIER, icon: aircarrier }
    ]
  },
  {
    name: 'nation',
    title: 'Нация',
    options: [
      { value: NATIONS_LIST.JAPAN, icon: japan },
      { value: NATIONS_LIST.PAN_ASIA, icon: panAsia },
      { value: NATIONS_LIST.USA, icon: usa },
      { value: NATIONS_LIST.EUROPE, icon: europe },
      { value: NATIONS_LIST.USSR, icon: ussr },
      { value: NATIONS_LIST.NETHERLANDS, icon: netherlands },
      { value: NATIONS_LIST.GERMANY, icon: germany },
      { value: NATIONS_LIST.COMMONWEALTH, icon: commonwealth },
      { value: NATIONS_LIST.UK, icon: uk },
      { value: NATIONS_LIST.PAN_AMERICA, icon: panAmerica },
      { value: NATIONS_LIST.FRANCE, icon: france },
      { value: NATIONS_LIST.SPAIN, icon: spain },
      { value: NATIONS_LIST.ITALY, icon: italy }
    ]
  }
];
