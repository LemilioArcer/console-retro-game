import React from 'react'

function LeftControl({ handleDirection }) {
    return (
        <div className="w-[80px] h-[200px] border-4 border-solid bg-[#2F3A40] relative rounded-l-lg border-black shadow-lg">
            
            <div className="absolute top-3 left-[50px] w-4 h-1 bg-[#1A2226] rounded-sm shadow-sm"></div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-[#6FE7E1] bg-[#1A2226] rounded-full shadow-inner flex items-center justify-center">
                <div className="w-10 h-10 bg-[#2C2C2C] rounded-full shadow-md border border-black/20"></div>
            </div>

            <div 
                onClick={() => handleDirection('up')}
                className="absolute top-[90px] left-1/2 -translate-x-1/2 w-5 h-5 bg-[#2C2C2C] border-2 border-[#1A2226] rounded-full shadow-inner cursor-pointer active:bg-[#444] flex items-center justify-center text-[8px] text-black font-bold"
            >
                ▲
            </div>

            <div 
                onClick={() => handleDirection('down')}
                className="absolute top-[120px] left-1/2 -translate-x-1/2 w-5 h-5 bg-[#2C2C2C] border-2 border-[#1A2226] rounded-full shadow-inner cursor-pointer active:bg-[#444] flex items-center justify-center text-[8px] text-black font-bold"
            >
                ▼
            </div>

            <div 
                onClick={() => handleDirection('left')}
                className="absolute top-[105px] left-[10px] w-5 h-5 bg-[#2C2C2C] border-2 border-[#1A2226] rounded-full shadow-inner cursor-pointer active:bg-[#444] flex items-center justify-center text-[8px] text-black font-bold"
            >
                ◄
            </div>

            <div 
                onClick={() => handleDirection('right')}
                className="absolute top-[105px] right-[10px] w-5 h-5 bg-[#2C2C2C] border-2 border-[#1A2226] rounded-full shadow-inner cursor-pointer active:bg-[#444] flex items-center justify-center text-[8px] text-black font-bold"
            >
                ►
            </div>

            <div className="absolute bottom-2 right-3 w-4 h-4 bg-[#2C2C2C] border-2 border-[#1A2226] rounded-sm shadow-inner flex items-center justify-center">
                <div className="w-2 h-2 border border-[#1A2226] rounded-full bg-[#1A2226]"></div>
            </div>

        </div>
    )
}

export default LeftControl