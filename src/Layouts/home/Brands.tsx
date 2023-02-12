import { Title } from '@components/Gererals/Text/Title';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Icon1 from '@icons/icon1.png';
import Icon2 from '@icons/icon2.png';
import Icon3 from '@icons/icon3.png';
const BrandsComponent = styled.section`
	background: var(--white);
	text-align: center;
	padding: 16px 0;
	.brands {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		justify-content: center;
		padding-top: 20px;
		align-items: center;
	}
	img {
		transition: filter 0.3s ease-out;
		filter: brightness(0);
	}
	img:hover {
		transition: filter 0.2s ease-in;
		filter: brightness(1);
	}
`;
const Brands = () => {
	return (
		<BrandsComponent>
			<Title size="M" type="p" fontWeight="Bold" color="Black">
				Marcas que confian en nosotros
			</Title>
			<div className="brands">
				<Image src={Icon1} alt="Brand one" width={100} />
				<Image src={Icon2} alt="Brand one" width={100} />
				<Image src={Icon3} alt="Brand one" width={100} />
			</div>
		</BrandsComponent>
	);
};

export { Brands };
