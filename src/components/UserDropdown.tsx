import React, { useRef, useEffect } from 'react';

type UserDropdownProps = {
   isOpen: boolean;
   toggleDropdown: () => void;
   closeDropdown: () => void;
};

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, toggleDropdown, closeDropdown }) => {
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
         <button className="w-12 h-12 rounded-full" onClick={toggleDropdown}>
            <img className="w-12 h-12 rounded-full border-2 border-cyan-400" src="https://via.placeholder.com/48x48" alt="user" />
         </button>
         {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
               <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
            </div>
         )}
      </div>
   );
};

export default UserDropdown;
