import React from 'react';

const Stats = ({ actual }) => {
    if (!actual || actual.length === 0) return null;

    const pokemon = actual[0];

    return (
        <div className="w-[450px] bg-white text-gray-800 p-2 border-x-4 border-b-4 border-gray-300 shadow-sm">
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-1 bg-gray-50 px-1">
                <h2 className="uppercase font-black text-sm">
                    <span className="text-gray-400 mr-2">#{pokemon.id}</span>
                    {pokemon.name}
                </h2>
                <div className="flex gap-1">
                    {pokemon.types?.map((t, i) => (
                        <span key={i} className="text-[9px] bg-blue-500 text-white px-2 py-0.5 rounded-full uppercase font-bold">
                            {t.type.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex justify-around my-2 py-1 border border-gray-100 rounded-lg bg-white">
                <div className="text-center">
                    <img src={pokemon.sprites?.front_default} className="w-16 h-16" alt="front" />
                    <p className="text-[8px] text-gray-400 uppercase font-bold">Frente</p>
                </div>
                <div className="text-center">
                    <img src={pokemon.sprites?.back_default} className="w-16 h-16" alt="back" />
                    <p className="text-[8px] text-gray-400 uppercase font-bold">Espalda</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 px-1">
                {pokemon.moves?.slice(0, 10).map((m, i) => (
                    <div key={i} className="flex justify-between text-[10px] uppercase border-b border-gray-100 py-1">
                        <span className="font-medium text-gray-600">{m.move.name.replace('-', ' ')}</span>
                        <span className="font-bold text-red-500">{m.attack}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;