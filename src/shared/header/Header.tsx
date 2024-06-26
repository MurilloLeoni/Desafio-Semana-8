import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/compass-uol.png";
import IconHome from '../../components/icons/IconHome';
import IconTv from '../../components/icons/IconTv';
import IconMovie from '../../components/icons/IconMovie';
import IconSearch from '../../components/icons/IconSearch';
import IconPlus from '../../components/icons/IconPlus';
import IconStar from "../../components/icons/IconStar";




type Props = {};

const Header = () => {
	React.useEffect(() => {
		console.log("Mudou a rota");
	}, [location]);

	// esta função é chamada para mudar a cor do texto quando a rota é ativa
	const linkStyle = ({ isActive }: { isActive: boolean }) =>
		`p-4 text-white inline-flex gap-2 body-review ${isActive ? "text-[#02E7F5]" : ""
		}`;
	
	const searchStyle = `p-4 text-white inline-flex gap-2 body-review`;

	// esta função é chamada para mudar a cor do ícone quando a rota é ativa
	const iconStyle = ({ isActive }: { isActive: boolean }) =>
		`fill-white ${isActive ? "fill-[#02E7F5]" : ""}`;

	return (
		<div className="w-full h-[100.46px] px-8 py-4 bg-gradient-to-b from-neutral-950 to-neutral-0 justify-between items-center inline-flex">
			<div className="h-full justify-between items-center gap-4 flex w-full ">
				<div className="inline-flex  items-center">
					<div className="relative">
						<NavLink to="/" className={""} end>
							<img src={logo} alt="Logo" className="w-[200px] h-[68.46px]" />
						</NavLink>
					</div>
					<div className="justify-start items-start flex ">
						<nav className="p-4">
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
				</div>
				<div className="flex h-12 gap-4 items-center ">
					<button className={searchStyle}>
						<IconSearch className="w-6 h-6" />
						<p>Buscar</p>
					</button>
					<button className={searchStyle}>
						<IconPlus className="w-6 h-6" />
						<p>Minha lista</p>
					</button>
					<button className="w-12 h-12 rounded-full bg-secondary">
						<img className="w-12 h-12 rounded-full border-2 border-cyan-400" src="https://via.placeholder.com/48x48" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
