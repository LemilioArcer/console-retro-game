import React from 'react';

const Stats = ({ actual }) => {
  if (!actual || actual.length === 0) return null;

  const p = actual[0];

  return (
    <div className="flex justify-center items-center">
      
      <div className="w-[350px] bg-black text-white p-3 border-2 border-[#660000]">

        <h2 className="font-bold mb-2 text-center">
          #{p?.id} {p?.name}
        </h2>

        <div className="flex justify-around mb-2">
          <img src={p?.sprites?.front_default} className="w-12 h-12" />
          <img src={p?.sprites?.back_default} className="w-12 h-12" />
        </div>

        {p?.moves?.slice(0, 10).map((m, i) => (
          <div key={i} className="flex justify-between text-xs">
            <span>{m?.move?.name}</span>
            <span>{m?.attack}</span>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Stats;