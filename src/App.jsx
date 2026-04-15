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
  const [position, setPosition] = useState(1);
  const [myPokeSelection, setMyPokeSelection] = useState([]);
  const [pcPokeSelection, setPcPokeSelection] = useState([]);

  const [myHP, setMyHP] = useState(100);
  const [pcHP, setPcHP] = useState(100);

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  const handleAttack = (movimiento) => {
  if (!movimiento || myHP <= 0 || pcHP <= 0) return;
  const miDanio = movimiento.attack;
  const vidaResultantePC = Math.max(0, pcHP - miDanio);
  setPcHP(vidaResultantePC);

  if (vidaResultantePC > 0) {
    setTimeout(() => {
      const pcMovs = pcPokeSelection[0].moves;
      const pcDanio = pcMovs[Math.floor(Math.random() * pcMovs.length)].attack;
      setMyHP((prev) => Math.max(0, prev - pcDanio));
    }, 1000);
  }
};

  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));

    Promise.all(plist).then((values) => {
      const saniData = values?.map((e) => {
        return {
          name: e.name,
          id: e.id,
          types: e.types,
          moves: e.moves.map((m) => {
            return {
              ...m,
              attack: getRandomInt(20, 98),
            };
          }),
          sprites: e.sprites,
        };
      });

      setPokemones(saniData);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);

  const handleDirection = (direction) => {
    if (direction === 'right' && position + 1 < 101) {
      setPosition((prev) => prev + 1);
    } else if (direction === 'left' && position - 1 > 0) {
      setPosition((prev) => prev - 1);
    } else if (direction === 'down' && position + 4 < 101) {
      setPosition((prev) => prev + 4);
    } else if (direction === 'up' && position - 4 > 0) {
      setPosition((prev) => prev - 4);
    } else {
      setPosition(1);
    }
  };

  const computerSelection = () => {
    const rnd = getRandomInt(1, 100);
    const pc = pokemones.filter((p) => p.id === rnd);
    setPcPokeSelection(pc);
  };

  const handleSelection = () => {
    const selectPokemon = pokemones.filter((p) => p.id === position);
    setMyPokeSelection(selectPokemon);
    computerSelection();

    setMyHP(100);
    setPcHP(100);
  };

  const handleBack = () => {
    setMyPokeSelection([]);
    setPcPokeSelection([]);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#C9D7DB] overflow-auto">
      <h1 className="text-4xl font-bold mb-6 text-black tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        Switch 2 Pokedex
      </h1>

      <div className="flex items-center">
        <LeftControl handleDirection={handleDirection} />
        
        {myPokeSelection.length > 0 && pcPokeSelection.length > 0 ? (
          <GameScreen 
            myPokeSelection={myPokeSelection} 
            pcPokeSelection={pcPokeSelection}
            myHP={myHP}
            pcHP={pcHP}
            handleAttack={handleAttack}
          />
        ) : (
          <Screen pokemones={pokemones} position={position} />
        )}

        <RightControl 
          handleSelection={handleSelection} 
          handleBack={handleBack} 
          handleAttack={handleAttack}
        />
      </div>

      <p className="mt-4 text-sm font-bold text-gray-700 uppercase tracking-widest">
        Arce's Version
      </p>
    </div>
  );
}

export default App;