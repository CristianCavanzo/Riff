import { Icon } from '@components/Gererals/Icon';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '@icons/menu.svg';
import Close from '@icons/close.svg';
import Image from 'next/image';
import { montserrat } from 'src/pages/_app';

const HeaderComponent = styled.header`
	display: flex;
	background: #fff;
	margin: 20px;
	padding: 8px 24px;
	border-radius: 500px;
	align-items: center;
	justify-content: space-between;
	.containerHeader {
		transition: all 0.15s ease-in;
		display: flex;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
	}
	.trueMenu {
		transition: all 0.2s ease-out;
		background: #fff;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
		opacity: 1;
		visibility: visible;
	}
	.containerHeader ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		margin: 8px 0;
		font-size: 32px;
		font-weight: bold;
		row-gap: 4px;
	}
	.containerHeader ul:first-child {
		justify-content: flex-end;
	}
	.containerHeader ul button {
		font-weight: bold;
		font-size: 32px;
		border: none;
		padding: 8px 20px;
		border-radius: 20px;
		background: var(--blue);
		color: #fff;
		cursor: pointer;
	}
	.containerHeader ul .sigIn {
		background: none;
		color: #000;
	}
	ul li {
		list-style: none;
		cursor: pointer;
		position: relative;
		text-align: center;
	}
	ul li a {
		text-decoration: none;
		color: var(--blue);
	}
	.line {
		position: absolute;
		width: 0px;
		transition: width 0.2s ease-in;
		height: 2px;
		background: var(--gold);
		left: 0;
	}
	ul li:hover .line {
		transition: all 0.3s ease-in;
		width: 100%;
	}

	.close {
		position: absolute;
		right: 20px;
	}
	.menu-hamburguer {
		border: none;
		background: transparent;
		cursor: pointer;
	}
	@media (min-width: 768px) {
		.menu-hamburguer {
			display: none;
		}
		.containerHeader,
		.falseMenu {
			display: flex;
			opacity: 1;
			visibility: visible;
			position: relative;
			justify-content: center;
			align-items: center;
			column-gap: 16px;
		}
		.containerHeader ul,
		.containerHeader ul button {
			font-size: 18px;
		}
		.containerHeader ul:first-child {
			column-gap: 10px;
		}
		.containerHeader ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}
	}
`;

const Header = () => {
	const [state, setState] = useState({ open: false });
	const handleMenu = () => {
		setState({
			...state,
			open: !state.open,
		});
	};
	return (
		<HeaderComponent>
			<Icon color="black" />
			<button onClick={handleMenu} className="menu-hamburguer">
				<Image src={Menu} width={32} height={32} alt="menu hamburger" />
			</button>
			<div className={`containerHeader ${state.open}Menu`}>
				<ul>
					<li>
						<Link href="/">Inicio</Link>
						<div className="line"></div>
					</li>
					<li>
						<Link href="/">
							Acerca de nosotros<div className="line"></div>
						</Link>
					</li>
					<li>
						<Link href="/">
							Precios<div className="line"></div>
						</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link href="/ingresar">
							<button className={`sigIn ${montserrat.className}`}>Registro</button>
						</Link>
					</li>
					<li>
						<Link href="/ingresar">
							<button className={montserrat.className}>Ingresar</button>
						</Link>
					</li>
				</ul>
				<button onClick={handleMenu} className="close menu-hamburguer">
					<Image src={Close} width={32} height={32} alt="menu hamburger" />
				</button>
			</div>
		</HeaderComponent>
	);
};

export { Header };
