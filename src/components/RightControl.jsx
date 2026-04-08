import React from 'react'

function RightControl({ handleSelection, handleBack }) {
    return (
        <div className="w-[80px] h-[200px] border-4 border-solid bg-[#2F3A40] relative rounded-r-lg border-black shadow-lg">
            
            <div className="absolute top-0 left-1 text-2xl font-bold text-[#1A2226] leading-none">+</div>

            <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-5 h-5 bg-[#2C2C2C] border border-[#1A2226] rounded-full shadow-inner flex items-center justify-center text-[10px] text-white font-bold">
                X
            </div>

            <div 
                onClick={handleBack}
                className="absolute top-[50px] left-1/2 -translate-x-1/2 w-5 h-5 bg-[#2C2C2C] border border-[#1A2226] rounded-full shadow-inner flex items-center justify-center text-[10px] text-white font-bold cursor-pointer active:bg-[#444]"
            >
                B
            </div>

            <div className="absolute top-[35px] left-[10px] w-5 h-5 bg-[#2C2C2C] border border-[#1A2226] rounded-full shadow-inner flex items-center justify-center text-[10px] text-white font-bold">
                Y
            </div>

            <div
                onClick={handleSelection}
                className="absolute top-[35px] right-[10px] w-5 h-5 bg-[#2C2C2C] border border-[#1A2226] rounded-full shadow-inner flex items-center justify-center text-[10px] text-white font-bold cursor-pointer active:bg-[#444]"
            >
                A
            </div>

            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-12 h-12 border-2 border-[#E07A5F] bg-[#1A2226] rounded-full shadow-inner flex items-center justify-center">
                <div className="w-10 h-10 bg-[#2C2C2C] rounded-full shadow-md border border-black/20"></div>
            </div>

            <div className="absolute bottom-7 left-3 w-4 h-4 bg-[#2C2C2C] border-2 border-[#1A2226] rounded-full shadow-inner flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-sm shadow-sm"></div>
            </div>

            <div className="absolute bottom-2 left-3.5 w-3.5 h-3.5 bg-[#2C2C2C] border border-[#1A2226] rounded-sm shadow-md"></div>

        </div>
    )
}

export default RightControl