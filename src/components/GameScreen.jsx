import React from 'react';

const GameScreen = ({ myPokeSelection, pcPokeSelection, myHP, pcHP, handleAttack, mensaje }) => { 
  const myPokemon = myPokeSelection[0];
  const pcPokemon = pcPokeSelection[0];

  return (
    <div className="w-[450px] h-[200px] bg-[#e8e8e8] border-4 border-black relative overflow-hidden font-sans">

      {pcHP === 0 && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-blue-500 text-white">
          <h2 className="text-6xl font-bold uppercase">¡GANASTE!</h2>
          <p className="text-xl mt-3 font-bold">{myPokemon?.name} es el vencedor</p>
        </div>
      )}

      {myHP === 0 && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-red-600 text-white">
          <h2 className="text-6xl font-bold uppercase">PERDISTE</h2>
          <p className="text-xl mt-3 font-bold">{pcPokemon?.name} te ha derrotado</p>
        </div>
      )}

      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <h2 className="text-xl font-black italic text-red-600 drop-shadow-[2px_2px_0_white] uppercase">
          vs
        </h2>
      </div>

      <div className="absolute top-1 left-1 bg-white border border-black px-2 py-1 w-[140px] z-10">
        <p className="text-[8px] font-bold uppercase">{pcPokemon?.name}</p>
        <div className="w-full h-1 bg-gray-300 mt-1">
          <div className="h-1 bg-green-500 transition-all duration-500" style={{ width: `${pcHP}%` }}></div>
        </div>
      </div>
      <div className="absolute top-6 right-6">
        <img src={pcPokemon?.sprites?.front_default} className="w-12 h-12" alt="pc" />
      </div>

      <div className="absolute bottom-14 left-6">
        <img src={myPokemon?.sprites?.back_default || myPokemon?.sprites?.front_default} className="w-12 h-12" alt="mio" />
      </div>
      <div className="absolute bottom-16 right-1 bg-white border border-black px-2 py-1 w-[150px] z-10">
        <p className="text-[8px] font-bold uppercase">{myPokemon?.name}</p>
        <div className="w-full h-1 bg-gray-300 mt-1">
          <div className="h-1 bg-green-500 transition-all duration-500" style={{ width: `${myHP}%` }}></div>
        </div>
      </div>

      {/* BOTONES DE ATAQUE JUGADOR */}
      {myHP > 0 && pcHP > 0 && (
        <div className="absolute bottom-0 left-0 w-full h-[50px] bg-white border-t-2 border-black grid grid-cols-2 z-20">
          {myPokemon?.moves?.slice(0, 4).map((m, index) => (
            <button
              key={index}
              onClick={() => handleAttack(m)}
              className="text-[9px] font-bold uppercase border-2 border-purple-600 ring-1 ring-black hover:bg-gray-100 active:bg-blue-100 transition-colors"
            >
              {m.move.name}
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default GameScreen;