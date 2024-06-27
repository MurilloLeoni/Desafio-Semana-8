import React, { useRef, useEffect } from 'react';

type SearchDropdownProps = {
   isOpen: boolean;
   toggleDropdown: () => void;
   closeDropdown: () => void;
};

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
   const dropdownRef = useRef<HTMLDivElement>(null);

   const linkStyle = "text-start block px-6 w-full py-2 hover:bg-white rounded-md";

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            closeDropdown();
         }
      };

      if (isOpen) {
         document.addEventListener('mousedown', handleClickOutside);
      } else {
         document.removeEventListener('mousedown', handleClickOutside);
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isOpen, closeDropdown]);

   return (
      <div ref={dropdownRef} className="relative">
         <button className="gap-4 h-[43px] p-3 rounded border-2 border-neutral-500 justify-end items-center flex cursor-pointer" onClick={toggleDropdown}>
            <div className="text-white text-base font-normal font-['Lato']">Filmes</div>
            {isOpen ? (
               <i className="fa-solid fa-angle-up text-white"></i>
            ) : (
               <i className = "fa-solid fa-angle-down text-white"></i>
            )}
         </button>
         {isOpen && (
            <ul className="font-montserrat text-indigo-950 font-[600] absolute p-2 left-1/2 transform -translate-x-1/2 mt-3 w-[196px] h-[216px] bg-[#F3F5FB] border border-gray-200 rounded-lg shadow-lg z-10">
               <li><button className={linkStyle}>Filmes</button></li>
               <li><button className={linkStyle}>Coleções</button></li>
               <li><button className={linkStyle}>Tudo</button></li>
               <li><button className={linkStyle}>Séries</button></li>
               <li><button className={linkStyle}>Celebridades</button></li>
            </ul>
         )}
      </div>
   );
};

export default SearchDropdown;