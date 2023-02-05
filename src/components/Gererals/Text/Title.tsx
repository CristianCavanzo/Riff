import { Sizes, FontWeight } from '@globalTypes';
import React from 'react';
import { FontWeightTransform, useFontWeight } from '@hooks/useFontWeight';
import { useSize } from '@hooks/useSize';
import { monument } from 'src/pages/_app';
import styled from 'styled-components';

type SizeTitle = Exclude<Sizes, 'L' | 'XL' | 'XLL'>;

interface IProps {
	size: SizeTitle;
	children: React.ReactNode;
	fontWeight: FontWeight;
}

interface IComponent {
	size: string;
	fontWeight: FontWeightTransform;
}

const TitleComponent = styled.h2<IComponent>`
	font-size: ${(props) => props.size};
`;

const Title = ({ children, size, fontWeight }: IProps) => {
	const sizes: { size: SizeTitle; px: string }[] = [
		{
			size: 'XS',
			px: '16px',
		},
		{
			size: 'S',
			px: '20px',
		},
		{
			size: 'M',
			px: '24px',
		},
	];
	const weight = useFontWeight(fontWeight);
	const pxSize = useSize(sizes, size);
	return (
		<TitleComponent size={pxSize} fontWeight={weight} className={monument.className}>
			{children}
		</TitleComponent>
	);
};

export { Title };
