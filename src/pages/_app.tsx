import type { AppProps } from 'next/app';
import { Nunito } from '@next/font/google';
import '@styles/global.css';
import { Header } from '@components/Header';

const nunito = Nunito({
	weight: 'variable',
	subsets: ['latin'],
});
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={nunito.className}>
			<Header />
			<Component {...pageProps} />
		</main>
	);
}
