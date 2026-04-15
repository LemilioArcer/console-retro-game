import React from 'react'
import Stats from './Stats';

const Screen = ({ pokemones, position }) => {
  const seleccionado = pokemones?.filter((p) => p.id === position);

  return (
    <div className="relative flex flex-col items-center">
      
      <div className="w-[450px] h-[200px] overflow-y-auto border-4 border-solid bg-[#F0F1F3]">
        <div className="grid grid-cols-4 justify-items-center gap-2 p-2">
          {pokemones?.map((pokemon, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-[#D1D5DB] bg-white w-20 h-20 rounded-lg shadow-sm"
              style={{ 
                color: position === pokemon.id ? "red" : "black",
                border: position === pokemon.id ? "2px solid red" : "1px solid #D1D5DB"
              }}
            >
              <p className="text-[10px] text-center uppercase font-bold">
                {pokemon.name}
              </p>
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-12 h-12"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[210px] left-0 w-full z-50">
        <Stats actual={seleccionado} />
      </div>
      
    </div>
  );
};

export default Screen;