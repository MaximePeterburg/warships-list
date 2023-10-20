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
import { LEVELS_LIST, NATIONS_LIST, TYPES_LIST } from '../src/components/WarshipsList';

export const LEVELS = [
  LEVELS_LIST.I,
  LEVELS_LIST.VI,
  LEVELS_LIST.II,
  LEVELS_LIST.VII,
  LEVELS_LIST.III,
  LEVELS_LIST.VIII,
  LEVELS_LIST.IV,
  LEVELS_LIST.IX,
  LEVELS_LIST.V,
  LEVELS_LIST.X
];

export const WARSHIP_TYPES = [
  { title: TYPES_LIST.SUBMARINE, icon: submarine },
  { title: TYPES_LIST.DESTROYER, icon: destroyer },
  { title: TYPES_LIST.CRUISER, icon: cruiser },
  { title: TYPES_LIST.BATTLESHIP, icon: battleship },
  { title: TYPES_LIST.AIRCARRIER, icon: aircarrier }
];

export const NATIONS = [
  { title: NATIONS_LIST.JAPAN, icon: japan },
  { title: NATIONS_LIST.USA, icon: usa },
  { title: NATIONS_LIST.USSR, icon: ussr },
  { title: NATIONS_LIST.GERMANY, icon: germany },
  { title: NATIONS_LIST.UK, icon: uk },
  { title: NATIONS_LIST.FRANCE, icon: france },
  { title: NATIONS_LIST.ITALY, icon: italy },
  { title: NATIONS_LIST.PAN_ASIA, icon: panAsia },
  { title: NATIONS_LIST.EUROPE, icon: europe },
  { title: NATIONS_LIST.NETHERLANDS, icon: netherlands },
  { title: NATIONS_LIST.COMMONWEALTH, icon: commonwealth },
  { title: NATIONS_LIST.PAN_AMERICA, icon: panAmerica },
  { title: NATIONS_LIST.SPAIN, icon: spain }
];
