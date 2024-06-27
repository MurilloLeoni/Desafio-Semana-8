import React from 'react';
import CoverImage from '../img/Cover.png'; 

const CustomButton = () => {
  const buttons = Array.from({ length: 6 }, (_, index) => (
    <a href="https://seu-link-aqui.com" key={index}>
      <button className="bg-[#1A1D29] hover:bg-[#1A1D29] text-white font-bold rounded-lg flex items-center justify-start w-full sm:w-[300px] md:w-[300px] lg:w-[630px] h-[100px] md:h-[128px] relative overflow-hidden p-0 mb-4">
        <img src={CoverImage} alt="Cover" className="h-full object-cover rounded-l-lg" style={{ width: '100px', flexShrink: 0 }} />
        <span className="text-sm md:text-lg pl-4" style={{ flex: 1, padding: '8px 16px' }}>
          Mobius puts Loki to work, but not everyone at TVA is thrilled about the God of Mischief's presence.
        </span>
      </button>
    </a>
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-100">
      <div className="flex flex-col space-y-4">
        {buttons.slice(0, 3)}
      </div>
      <div className="flex flex-col space-y-4">
        {buttons.slice(3, 6)}
      </div>
    </div>
  );
};

export default CustomButton;
