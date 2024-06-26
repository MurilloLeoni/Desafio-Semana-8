import React from 'react';
import CoverImage from '../img/Cover.png'; 

const CustomButton = () => {
  return (
<a href="https://seu-link-aqui.com">
  <button className="bg-[#1A1D29] hover:bg-[#1A1D29] text-white font-bold rounded-lg flex items-center justify-start w-[630px] h-[128px] relative overflow-hidden p-0">
    <img src={CoverImage} alt="Cover" className="h-full object-cover rounded-l-lg" style={{ width: '200px', flexShrink: 0 }} />
    <span className="text-lg pl-4" style={{ flex: 1, padding: '16px' }}>
      Mobius puts Loki to work, but not everyone at TVA is thrilled about the God of Mischief's presence.
    </span>
  </button>
</a>

  );
};

export default CustomButton;