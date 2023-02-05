interface OriginalSizes<TSize> {
	size: TSize;
	px: string;
}

const useSize = <TSize>(sizes: OriginalSizes<TSize>[], size: TSize) => {
	const sizeReturn = sizes.find((sizeM) => sizeM.size === size);

	if (!sizeReturn) {
		throw new Error(`El tamaño ${size} no existe en sizes`);
	}

	return sizeReturn.px;
};

export { useSize };
