import { Icon } from '@components/Gererals/Icon';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '@icons/menu.svg';
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
		display: none;
	}
	.trueMenu {
		transition: all 1s ease-in;
		background: #fff;
		display: flex;
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
	}
	.trueMenu ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		margin: 8px 0;
		font-size: 32px;
		font-weight: bold;
		row-gap: 4px;
	}
	.trueMenu ul:first-child {
		justify-content: flex-end;
	}
	.trueMenu ul button {
		font-weight: bold;
		font-size: 32px;
		border: none;
		padding: 8px 20px;
		border-radius: 20px;
		background: var(--purple);
		color: #fff;
	}
	.trueMenu ul .sigIn {
		background: none;
		color: #000;
	}
	ul li {
		list-style: none;
	}
	.close {
		position: absolute;
		right: 20px;
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
			<button onClick={handleMenu}>
				<Image src={Menu} width={32} height={32} alt="menu hamburger"></Image>
			</button>
			<div className={`containerHeader ${state.open}Menu`}>
				<ul>
					<li>Inicio</li>
					<li>Acerca de nosotros</li>
					<li>Precios</li>
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
				<button onClick={handleMenu} className="close">
					Close
				</button>
			</div>
		</HeaderComponent>
	);
};

export { Header };
