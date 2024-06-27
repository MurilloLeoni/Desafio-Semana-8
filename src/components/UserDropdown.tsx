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

   const styleTextUser = "text-white opacity-80 text-base font-normal font-montserrat"

   const styleTextSettings = "text-start text-white text-base font-normal font-montserrat font-medium px-1 py-2 w-full hover:bg-neutral-600"

   const styleButtonUser = "left-[20px] top-[20px] justify-start items-center gap-4 inline-flex py-2 w-full hover:bg-neutral-600 rounded-md"

   return (
      <div ref={dropdownRef} className="relative">
         <button className="w-12 h-12 rounded-full" onClick={toggleDropdown}>
            <img className="w-12 h-12 rounded-full border-2 border-cyan-400" src="https://via.placeholder.com/48x48" alt="user" />
         </button>
         {isOpen && (
            <div className=" absolute right-0 mt-2 w-[248px] h-[474px] bg-neutral-700 border border-gray-200 rounded-lg shadow-lg z-10 p-5 ">
               <button className={styleButtonUser}>
                  <img className="w-12 h-12 rounded-full border-2 " src="https://via.placeholder.com/48x48" alt="user" />
                  <div className={styleTextUser}>Leslie Alexander</div>
               </button>
               <button className={styleButtonUser}>
                  <img className="w-12 h-12 rounded-full border-2 " src="https://via.placeholder.com/48x48" alt="user" />
                  <div className={styleTextUser}>Ronald Richards</div>
               </button>
               <button className={styleButtonUser}>
                  <i className="fa-solid fa-plus text-white w-12 h-12 rounded-full bg-neutral-500 flex items-center justify-center"></i>
                  <div className={styleTextUser}>Crear perfil</div>
               </button>
               <div className="left-[20px] top-[220px] flex-col justify-between items-start inline-flex w-full mt-2">
                  <button className={styleTextSettings}>Editar perfis</button>
                  <button className={styleTextSettings}>Preferências</button>
                  <button className="text-start text-blue-400 text-base font-montserrat font-medium px-1 py-2 w-full hover:bg-neutral-600 rounded-md">Minha assinatura</button>
                  <button className={styleTextSettings}>Minha conta</button>
                  <button className={styleTextSettings}>Ajuda</button>
                  <button className={styleTextSettings}>Sair</button>
               </div>
            </div>
         )}
      </div>
   );
};

export default UserDropdown;
