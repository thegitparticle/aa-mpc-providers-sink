import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
	variable: "--font-albert-sans",
	display: "swap",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				:root {
					--font-albert-sans: ${albertSans.style.fontFamily};
				}
			`}</style>
			<main className={`${albertSans.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
