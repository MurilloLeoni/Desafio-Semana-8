import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/compass-uol.png";
import IconHome from '../../components/icons/IconHome';
import IconTv from '../../components/icons/IconTv';
import IconMovie from '../../components/icons/IconMovie';
import IconSearch from '../../components/icons/IconSearch';
import IconPlus from '../../components/icons/IconPlus';
import IconStar from "../../components/icons/IconStar";




// type Props = {};

const Header = () => {
	React.useEffect(() => {
		console.log("Mudou a rota");
	}, [location]);

	// esta função é chamada para mudar a cor do texto da navegação quando a rota é ativa
	const linkStyle = ({ isActive }: { isActive: boolean }) =>
		`p-4 text-white inline-flex gap-2 body-review ${isActive ? "text-[#02E7F5]" : ""
		}`;

	const searchStyle = `sm:p-4 p-2  text-white inline-flex gap-2 body-review`;

	// esta função é chamada para mudar a cor do ícone quando a rota é ativa
	const iconStyle = ({ isActive }: { isActive: boolean }) =>
		`fill-white ${isActive ? "fill-[#02E7F5]" : ""}`;

	return (
		<header className="w-full xl:h-[100.46px]  sm:px-8 py-4 bg-gradient-to-b from-neutral-950 to-neutral-0 justify-between items-center inline-flex">
			<div className="flex xl:flex-row flex-col items-center w-full ">
				<div className="relative">
					<NavLink to="/" className={""} end>
						<img src={logo} alt="Logo" className="w-[200px] h-[68.46px]" />
					</NavLink>
				</div>
				<div className="w-full flex items-center flex-col-reverse lg:flex-row">
					<div className=" justify-center items-start md:items-center flex text-center sm:block">
						<nav className="p-4">
							<NavLink to="/" className={linkStyle} end>
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
					<div className="flex h-12 items-center w-auto lg:ml-auto lg:justify-center">
						<nav className="min-[320px]:flex-row gap-1 flex ">
							<button className={searchStyle}>
								<IconSearch className="w-6 h-6" />
								<p>Buscar</p>
							</button>
							<NavLink to="not" className={searchStyle}>
								<IconPlus className="w-6 h-6" />
								<p>Minha lista</p>
							</NavLink>
						</nav>
						<button className="w-12 h-12 rounded-full min-[400px]:mx-4 mx-1">
							<img className="w-12 h-12 rounded-full border-2 border-cyan-400" src="https://via.placeholder.com/48x48" alt="user" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
