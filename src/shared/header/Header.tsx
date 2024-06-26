import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/compass-uol.png";
import IconHome from '../../components/icons/IconHome';
import IconTv from '../../components/icons/IconTv';
import IconMovie from '../../components/icons/IconMovie';
import IconSearch from '../../components/icons/IconSearch';
import IconPlus from '../../components/icons/IconPlus';
import IconStar from "../../components/icons/IconStar";
import iconClose from "../../assets/icons/close.svg";

type Props = {};

const Header: React.FC<Props> = () => {
	const [searchOpen, setSearchOpen] = useState(false);
	const location = useLocation();

	React.useEffect(() => {
		console.log("Mudou a rota");
	}, [location]);

	const linkStyle = ({ isActive }: { isActive: boolean }) =>
		`px-4 py-2 text-white inline-flex gap-2 body-review ${isActive ? "text-cyan-400" : ""}`;

	const searchStyle = `sm:p-4 p-2 text-white inline-flex gap-2 body-review`;

	const iconStyle = ({ isActive }: { isActive: boolean }) =>
		`fill-white ${isActive ? "fill-cyan-400" : ""}`;

	const toggleSearch = () => {
		setSearchOpen(!searchOpen);
	};

	return (
		<header className="w-full xl:h-[100.46px] sm:px-8 py-4 bg-gradient-to-b from-neutral-950 to-neutral-0 justify-between items-center inline-flex">
			<div className="flex xl:flex-row flex-col items-center w-full">
				<div className="relative py-4">
					<NavLink to="/" className="">
						<img src={logo} alt="Logo" className="w-[200px] h-[68.46px]" />
					</NavLink>
				</div>
				<div className="w-full flex items-center flex-col-reverse lg:flex-row gap-y-4">
					<div className="justify-start items-start md:items-center flex text-center sm:block">
						<nav className="px-4">
							<NavLink to="/" className={linkStyle} end>
								{({ isActive }) => (
									<>
										<IconHome className={iconStyle({ isActive })} />
										<p>Início</p>
									</>
								)}
							</NavLink>
							<NavLink to="not" className={linkStyle}>
								{({ isActive }) => (
									<>
										<IconTv className={iconStyle({ isActive })} />
										<p>Séries</p>
									</>
								)}
							</NavLink>
							<NavLink to="not" className={linkStyle}>
								{({ isActive }) => (
									<>
										<IconMovie className={iconStyle({ isActive })} />
										<p>Filmes</p>
									</>
								)}
							</NavLink>
							<NavLink to="not" className={linkStyle}>
								{({ isActive }) => (
									<>
										<IconStar className={iconStyle({ isActive })} />
										<p>Celebridades</p>
									</>
								)}
							</NavLink>
						</nav>
					</div>
					<div className="flex h-12 items-center w-auto lg:ml-auto lg:justify-center gap-1 sm-[320]:gap-4">
						{!searchOpen ? (
							<nav className="min-[320px]:flex-row gap-1 flex">
								<button className={searchStyle} onClick={toggleSearch}>
									<IconSearch className="w-6 h-6" />
									<p>Buscar</p>
								</button>
								<NavLink to="not" className={searchStyle}>
									<IconPlus className="w-6 h-6" />
									<p>Minha lista</p>
								</NavLink>
							</nav>
						) : (
							<div className="relative gap-y-4 w-[302px] md:w-[450px] h-[102px] md:h-[67px] px-4 py-3 bg-neutral-700 rounded border border-white/opacity-10 justify-center items-start md:items-center flex flex-col md:flex-row">
								<input
									type="text"
									className="bg-neutral-700 text-white text-base font-normal font-['Lato'] min-w-56"
									placeholder="Filme, série ou celebridade"
								/>
								<div className="justify-end items-center gap-3 flex">
									<div className="h-[43px] p-3 rounded border-2 border-white/opacity-10 justify-end items-center gap-2.5 flex">
										<div className="text-white text-base font-normal font-['Lato']">Filmes</div>
										<div className="w-4 h-4 relative" />
									</div>
									<button className="text-white" onClick={toggleSearch}>
										<IconSearch className="w-6 h-6" />
									</button>
									<button className="text-white" onClick={toggleSearch}>
										<img src={iconClose} alt="Fechar" />
									</button>
								</div>
							</div>
						)}
						<button className="w-12 h-12 rounded-full">
							<img className="w-12 h-12 rounded-full border-2 border-cyan-400" src="https://via.placeholder.com/48x48" alt="user" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
