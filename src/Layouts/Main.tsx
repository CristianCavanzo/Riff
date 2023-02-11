import React from 'react';
import styled from 'styled-components';
import { Title } from '@components/Gererals/Text/Title';
import MainImage from '@pictures/main-image.jpg';
import Image from 'next/image';
const MainComponent = styled.main`
	display: grid;
	height: calc(100vh - 70px);
	justify-items: center;
	align-items: center;
	p {
		color: var(--white);
	}
	.left {
		display: grid;
		row-gap: 8px;
	}
	div {
		padding: 0 8px;
		text-align: center;
	}
	@media (min-width: 425px) {
		div {
			padding: 0 24px;
		}
	}
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		div {
			padding: 0 80px;
			text-align: left;
		}
		img {
			width: 500px;
			height: 334px;
		}
	}
`;

const Main = () => {
	return (
		<MainComponent>
			<div className="left">
				<Title size="M" fontWeight="Bold" color="White">
					El mejor sitio para realizar tus rifas.
				</Title>
				<p>
					Nos encargamos de todas las tareas tediosas cuando quieres realizar un sorteo/rifa.
					Agregando variedad de graficos para que puedas entender mejor el alcance de tu sorteo/rifa
				</p>
			</div>
			<div className="rigth">
				<Image src={MainImage} width={300} alt="Image main" className="border-radius-24" />
			</div>
		</MainComponent>
	);
};

export { Main };
