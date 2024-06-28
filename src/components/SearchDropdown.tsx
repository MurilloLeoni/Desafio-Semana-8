import React, { useState, useRef, useEffect, useCallback } from 'react';

type SearchDropdownProps = {
   isOpen: boolean;
   toggleDropdown: () => void;
   closeDropdown: () => void;
};

const options = ['Tudo', 'Filmes', 'Séries', 'Celebridades'] as const;
type OptionType = (typeof options)[number];

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
   const dropdownRef = useRef<HTMLDivElement>(null);
   const [selectedOption, setSelectedOption] = useState<OptionType>('Tudo');

   const linkStyle = "text-start block px-6 w-full py-2 hover:bg-white rounded-md button-text";

   const handleClickOutside = useCallback((event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
         closeDropdown();
      }
   }, [closeDropdown]);

   useEffect(() => {
      if (isOpen) {
         document.addEventListener('mousedown', handleClickOutside);
      } else {
         document.removeEventListener('mousedown', handleClickOutside);
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isOpen, handleClickOutside]);

   const handleOptionClick = (option: OptionType) => {
      setSelectedOption(option);
      closeDropdown();
   };

   return (
      <div ref={dropdownRef} className="relative">
         <div className="w-28 gap-4 h-[43px] p-3 rounded border-2 border-neutral-500 justify-end items-center flex cursor-pointer" onClick={toggleDropdown}>
            <div className="text-white font-normal body-review relative truncate">{selectedOption}</div>
            {isOpen ? (
               <i className="fa-solid fa-angle-up text-white"></i>
            ) : (
               <i className="fa-solid fa-angle-down text-white"></i>
            )}
         </div>
         {isOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[196px] bg-[#F3F5FB] border border-gray-200 rounded-lg shadow-lg z-10">
               <div className="text-indigo-950 font-[600] p-2 max-h-[216px] overflow-auto">
                  {options.map(option => (
                     <button key={option} className={linkStyle} onClick={() => handleOptionClick(option)}>{option}</button>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};

export default SearchDropdown;
