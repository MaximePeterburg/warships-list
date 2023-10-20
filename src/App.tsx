import './App.css';
import Filters from './components/Filters';
import WarshipsList from './components/WarshipsList';

function App() {
  return (
    <main className='flex flex-col gap-4'>
      <Filters />
      <WarshipsList />
    </main>
  );
}

export default App;
