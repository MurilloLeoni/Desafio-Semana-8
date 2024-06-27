import React, { useRef, useEffect } from 'react';
import iconExpand from "../assets/icons/expand_more.svg";

type SearchDropdownProps = {
   isOpen: boolean;
   toggleDropdown: () => void;
   closeDropdown: () => void;
};

const SearchDropdown: React.FC<SearchDropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
   const dropdownRef = useRef<HTMLDivElement>(null);

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
         <div className="h-[43px] p-3 rounded border-2 border-white/opacity-10 justify-end items-center flex cursor-pointer" onClick={toggleDropdown}>
            <div className="text-white text-base font-normal font-['Lato']">Filmes</div>
            <div className="w-4 h-4 relative" />
            <img className="m-0" src={iconExpand} alt="Expandir" />
         </div>
         {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Drama</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Comedy</a>
            </div>
         )}
      </div>
   );
};

export default SearchDropdown;