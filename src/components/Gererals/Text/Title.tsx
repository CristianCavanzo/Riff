import { Sizes } from 'index';

import React from 'react';
import { useSize } from 'src/hooks/useSize';
import { monument } from 'src/pages/_app';
import styled from 'styled-components';

type SizeTitle = Omit<Sizes, 'S' | 'M' | 'L'>;

type Colors = 'white';

interface IProps {
	size: SizeTitle;
	children: React.ReactNode;
}

interface IComponent {
	size: string;
}

const TitleComponent = styled.h2<IComponent>`
	font-size: ${(props) => props.size};
`;

const Title = ({ children, size }: IProps) => {
	const sizes: { size: SizeTitle; px: string }[] = [
		{
			size: 'S',
			px: '16px',
		},
	];
	const pxSize = useSize(sizes, size);
	return (
		<TitleComponent size={pxSize} className={monument.className}>
			{children}
		</TitleComponent>
	);
};

export { Title };
