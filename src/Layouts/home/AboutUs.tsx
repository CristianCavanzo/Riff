import Handshake from '@components/Gererals/Icon/Handshake';
import { Title } from '@components/Gererals/Text/Title';
import React from 'react';
import styled from 'styled-components';
const SectionAbout = styled.section`
	.points {
		position: relative;
		background: #d5d3dd;
		width: 70vw;
		height: 400px;
		display: grid;
		margin: 0 auto;
		border-radius: 4px;
	}
	.points_container {
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
		bottom: 0;
		top: 0;
		left: -100px;
		right: -100px;
	}
`;
const PointsComponent = styled.div`
	background: var(--white);
	width: 24vw;
	padding: 20px;
	border-radius: 8px;
`;
const Points = ({ title, content }: { title: string; content: string }) => {
	return (
		<PointsComponent>
			<div>
				<figure>
					<Handshake width={30} heigth={30} />
				</figure>
				<h3>{title}</h3>
			</div>
			<p>{content}</p>
		</PointsComponent>
	);
};
const AboutUs = () => {
	return (
		<SectionAbout>
			<Title color="White" fontWeight="Bold" size="S" className="text-center">
				Acerca de nosotros
			</Title>
			<div className="points">
				<div className="points_container">
					<Points
						title="Compromiso"
						content="Tenemos a un equipo profesional de desarrolladores, que se encargan de crear la mejor logica para tu tranquilidad"
					/>
					<Points
						title="Compromiso"
						content="Tenemos a un equipo profesional de desarrolladores, que se encargan de crear la mejor logica para tu tranquilidad"
					/>
					<Points
						title="Compromiso"
						content="Tenemos a un equipo profesional de desarrolladores, que se encargan de crear la mejor logica para tu tranquilidad"
					/>
				</div>
			</div>
		</SectionAbout>
	);
};

export { AboutUs };
