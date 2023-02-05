import { FontWeight } from 'index';
/* eslint-disable no-unused-vars */
export enum FontWeightTransform {
	Thin = 100,
	ExtraLight = 200,
	Light = 300,
	Regular = 400,
	Medium = 500,
	SemiBold = 600,
	Bold = 700,
	ExtraBold = 800,
	Black = 900,
}

const useFontWeight = (fontWeight: FontWeight) => {
	const fontWeightReturn = FontWeightTransform[fontWeight];
	return fontWeightReturn;
};

export { useFontWeight };
