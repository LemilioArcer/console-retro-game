import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import GameScreen from './components/GameScreen';
import useFetch from './hooks/useFetch';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);

  const [pokemones, setPokemones] = useState([]);
  
  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));
    Promise.all(plist).then((values) => {
      setPokemones(values);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  const [position, setPosition] = useState(1);
  const [myPokeSelection, setMyPokeSelection] = useState([]);
  const [pcPokeSelection, setPcPokeSelection] = useState([]);

  const handleDirection = (direction) => {
    if (direction === 'right' && position + 1 < 101) {
      setPosition((prev) => prev + 1);
    } else if(direction === 'left' && position - 1 > 0){
      setPosition((prev) => prev - 1);
    } else if(direction === 'down' && position + 4 < 101){
      setPosition((prev) => prev + 4);
    }else if(direction === 'up' && position - 4 > 0){
      setPosition((prev) => prev - 4);
    }else{
      setPosition(1);
    }
  };

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const computerSelection = () => {
    const rnd = getRandomInt(1, 100);
    const pc = pokemones.filter((p) => p.id === rnd);
    setPcPokeSelection(pc);
  }

  const handleSelection = () => {
    const selectPokemon = pokemones.filter((p) => p.id === position)
    setMyPokeSelection(selectPokemon);
    computerSelection();
  }

  const handleBack = () => {
    setMyPokeSelection([]);
    setPcPokeSelection([]);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#C9D7DB]">
      <h1 className="text-4xl font-bold mb-6 text-black tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        Switch 2 Pokedex
      </h1>

      <div className="flex items-center">
        <LeftControl handleDirection={handleDirection} />
        
        {myPokeSelection.length > 0 && pcPokeSelection.length > 0 ? (
          <GameScreen myPokeSelection={myPokeSelection} pcPokeSelection={pcPokeSelection}/>
        ) : (
          <Screen pokemones={pokemones} position={position} />
        )}

        <RightControl handleSelection={handleSelection} handleBack={handleBack} />
      </div>

      <p className="mt-4 text-sm font-bold text-gray-700 uppercase tracking-widest">
        Arce's Version
      </p>
    </div>
  );
}

export default App;