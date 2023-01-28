import { Icon } from '@components/Gererals/Icon';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
const HeaderComponent = styled.header`
	display: flex;
	.containerHeader {
		display: none;
	}
	ul li {
		list-style: none;
	}
`;

const Header = () => {
	return (
		<HeaderComponent>
			<Icon color="black" />
			<div className="hamburger">Abrir</div>
			<div className="containerHeader">
				<ul>
					<li>Inicio</li>
					<li>Acerca de nosotros</li>
					<li>Precios</li>
				</ul>
				<ul>
					<li>
						<Link href="/ingresar">
							<button>Registro</button>
						</Link>
					</li>
					<li>
						<Link href="/ingresar">
							<button>Ingresar</button>
						</Link>
					</li>
				</ul>
			</div>
		</HeaderComponent>
	);
};

export { Header };
