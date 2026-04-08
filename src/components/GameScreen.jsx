import React from 'react'

function GameScreen({ myPokeSelection, pcPokeSelection }) {
  return (
    <>
      <div className="w-[450px] h-[200px] border-4 border-solid bg-[#660000] flex flex-col items-center justify-center">
        
        <h1 className='mb-4 text-xl font-extrabold uppercase text-white'>
          Pokemon Battle
        </h1>

        <div className='flex items-center gap-10'>
          {myPokeSelection?.map((pokemon, index) => (
            <div key={index} className="flex flex-col items-center justify-center border-2 border-black bg-white w-24 h-24 shadow-md rounded-lg">
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-16 h-16" 
              />
              <p className="text-[10px] text-black uppercase font-bold">{pokemon.name}</p>
            </div>
          ))}

          <h2 className="font-black text-3xl text-white italic">VS</h2>

          {pcPokeSelection?.map((pokemon, index) => (
            <div key={index} className="flex flex-col items-center justify-center border-2 border-black bg-white w-24 h-24 shadow-md rounded-lg">
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-16 h-16"
              />
              <p className="text-[10px] text-black uppercase font-bold">{pokemon.name}</p>
            </div>
          ))}
        </div>
        
      </div>
    </>
  )
}

export default GameScreen