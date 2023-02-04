import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';
import '@styles/global.css';
import { Header } from '@components/Header';
import localFont from '@next/font/local';
const monument = localFont({ src: './../public/fonts/MonumentExtended-Regular.woff2' });

const montserrat = Montserrat({
	weight: 'variable',
	subsets: ['latin'],
});
export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={montserrat.className}>
			<Header />
			<Component {...pageProps} />
		</main>
	);
}
export { montserrat, monument };
