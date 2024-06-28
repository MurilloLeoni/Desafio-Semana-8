import React from 'react';
import CoverImage from '../img/Cover.png';
import CoverImage1 from '../img/Cover-1.png';
import CoverImage2 from '../img/Cover-2.png';
import CoverImage3 from '../img/Cover-3.png';
import CoverImage4 from '../img/Cover-4.png';
import CoverImage5 from '../img/Cover-5.png';

const CustomButton = () => {
  const images = [CoverImage, CoverImage1, CoverImage2, CoverImage3, CoverImage4, CoverImage5];
  const titles = [
    '1. Glorious Purpose',
    '2. Lamentis',
    '3. Lamentis',
    '4. The Nexus Event',
    '5. Journey Into Mystery',
    '6. For All Time. Always.'
  ];
  const descriptions = [
    'Mobius puts Loki to work, but not everyone at TVA is thrilled about the God of Mischiefs presence.',
    'Mobius puts Loki to work, but not everyone at TVA is thrilled about the God of Mischiefs presence.',
    'Loki finds out The Variants plans, but he has his own that will forever alter both their destinies.',
    'Frayed nerves and paranoia infiltrate the TVA as Mobius and Hunter B-15 search for Loki and Sylvie.',
    'Loki tries to escape The Void, a desolate purgatory where he meets variant versions of himself.',
    'The clock is ticking in the season finale which finds Loki and Sylvie on a date with destiny.'
  ];
  const durations = ['50 min', '53 min', '48 min', '48 min', '51 min', '48 min'];

  const buttons = images.map((image, index) => (
    <a href="https://seu-link-aqui.com" key={index} className="w-full flex justify-center">
      <button className="bg-[#1A1D29] hover:bg-[#1A1D29] text-[#C8C9CB] font-bold rounded-lg flex items-center justify-start w-full h-auto relative overflow-hidden p-0 mb-4 md:flex-row flex-col">
        <img src={image} alt={`Cover ${index + 1}`} className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full md:w-[180px] h-auto md:h-full" />
        <div className="flex flex-col pl-4 md:pl-4 py-4 md:py-0" style={{ flex: 1, padding: '8px 16px', alignItems: 'flex-start' }}>
          <h3 className="text-lg font-bold" style={{ alignSelf: 'flex-start', color: 'white' }}>{titles[index]}</h3>
          <span className="text-sm md:text-lg">
            {descriptions[index]}
          </span>
        </div>
        <div className="absolute top-0 right-0 p-2 text-[#C8C9CB] text-sm md:text-md">
          {durations[index]}
        </div>
      </button>
    </a>
  ));

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100 md:grid-cols-2 md:gap-4 md:p-4">
        {buttons}
      </div>
    </div>
  );
};

export default CustomButton;
