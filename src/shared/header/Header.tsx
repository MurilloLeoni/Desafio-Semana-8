import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/compass-uol.png";
import IconHome from '../../components/icons/IconHome';
import IconTv from '../../components/icons/IconTv';
import IconMovie from '../../components/icons/IconMovie';
import IconSearch from '../../components/icons/IconSearch';
import IconPlus from '../../components/icons/IconPlus';
import IconStar from "../../components/icons/IconStar";
import iconClose from "../../assets/icons/close.svg";

import UserDropdown from "../../components/UserDropdown";
import SearchDropdown from "../../components/SearchDropdown";

type Props = {};

const Header: React.FC<Props> = () => {
	const [searchOpen, setSearchOpen] = useState(false);
	const [userDropdownOpen, setUserDropdownOpen] = useState(false);
	const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
	const location = useLocation();

	React.useEffect(() => {
		console.log("Mudou a rota");
	}, [location]);

	const linkStyle = ({ isActive }: { isActive: boolean }) =>
		`px-4 py-2 inline-flex gap-2 body-review ${isActive ? "text-cyan-400" : "text-white"}`;

	const searchStyle = `sm:p-4 p-2 text-white inline-flex gap-2 body-review`;

	const iconStyle = ({ isActive }: { isActive: boolean }) =>
		`${isActive ? "fill-cyan-400" : "fill-white"}`;

	const toggleSearch = () => {
		setSearchOpen(!searchOpen);
	};
	const toggleUserDropdown = () => {
		setUserDropdownOpen(!userDropdownOpen);
	};
	const closeUserDropdown = () => {
		setUserDropdownOpen(false);
	};

	const toggleSearchDropdown = () => {
		setSearchDropdownOpen(!searchDropdownOpen);
	};

	const closeSearchDropdown = () => {
		setSearchDropdownOpen(false);
	};


	return (
		<header className="w-full xl:h-[100.46px] sm:px-8 py-4 bg-gradient-to-b from-neutral-950 to-neutral-0 justify-between items-center inline-flex">
			<div className={`flex xl:flex-row flex-col items-center w-full ${searchOpen ? 'gap-6 lg:gap-0' : ''}`}>
				<div className={`relative py-4 flex justify-start ${searchOpen ? 'w-[350px] md:w-auto  gap-6 lg:gap-0' : ''}`}>
					<img src={logo} alt="Logo" className="w-[200px] h-[68.46px] " />
				</div>
				<div className={`w-full flex items-center flex-col-reverse xl:flex-row ${searchOpen ? 'gap-8 xl:gap-0' : 'gap-4'}`}>
					<div className="justify-start items-center flex text-center sm:block">
						<nav className="px-4 xl:px-2">
							<NavLink to="/home" className={linkStyle} end>
								{({ isActive }) => (
									<>
										<IconHome className={iconStyle({ isActive })} />
										<p>Início</p>
									</>
								)}
							</NavLink>
							<NavLink to="serie" className={linkStyle}>
								{({ isActive }) => (
									<>
										<IconTv className={iconStyle({ isActive })} />
										<p>Séries</p>
									</>
								)}
							</NavLink>
							<NavLink to="movie" className={linkStyle}>
								{({ isActive }) => (
									<>
										<IconMovie className={iconStyle({ isActive })} />
										<p>Filmes</p>
									</>
								)}
							</NavLink>
							<NavLink to="celebrity" className={linkStyle}>
								{({ isActive }) => (
									<>
										<IconStar className={iconStyle({ isActive })} />
										<p>Celebridades</p>
									</>
								)}
							</NavLink>
						</nav>
					</div>
					<div className="flex h-12 items-center w-auto xl:ml-auto xl:justify-center gap-1 sm:gap-4 ">
						{!searchOpen ? (
							<nav className="min-[320px]:flex-row gap-1 flex flex-col max-[260px]:flex-col">
								<button className={searchStyle} onClick={toggleSearch}>
									<IconSearch className="w-6 h-6" />
									<p>Buscar</p>
								</button>
								<NavLink to="" className={searchStyle}>
									<IconPlus className="w-6 h-6" />
									<p>Minha lista</p>
								</NavLink>
							</nav>
						) : (
							<div className="relative gap-y-4 w-[302px] md:w-[450px] h-[102px] md:h-[67px] px-4 py-3 bg-neutral-700 rounded border border-neutral-400 justify-center items-start md:items-center flex flex-col md:flex-row">
								<input
									type="text"
									className="bg-neutral-700 text-white text-base font-normal body-review min-w-56"
									placeholder="Filme, série ou celebridade"
								/>
								<div className="justify-end items-center gap-3 flex">
									<SearchDropdown isOpen={searchDropdownOpen} toggleDropdown={toggleSearchDropdown} closeDropdown={closeSearchDropdown} />
									<button className="text-white" onClick={toggleSearch}>
										<IconSearch className="w-6 h-6" />
									</button>
									<button className="text-white" onClick={toggleSearch}>
										<img src={iconClose} alt="Fechar" />
									</button>
								</div>
							</div>
						)}
						<UserDropdown isOpen={userDropdownOpen} toggleDropdown={toggleUserDropdown} closeDropdown={closeUserDropdown} />
					</div>

				</div>
			</div>
		</header>
	);
};

export default Header;
