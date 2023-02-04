interface OriginalSizes<TSize> {
	size: TSize;
	px: string;
}

const useSize = <TSize>(sizes: OriginalSizes<TSize>[], size: TSize) => {
	const sizeReturn = sizes.find((sizeM) => sizeM.size === size);
	return sizeReturn.px;
};

export { useSize };
