import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import laptop from '../../public/laptop.png'

export const Header = () => {
	return (
		<section>
			<div className="relative flex flex-col-reverse py-3 mx-auto lg:block lg:flex-col lg:pb-32 lg:pt-16 xl:pb-48 xl:pt-42 md:px-8 sm:max-w-xl md:max-w-full bg-blue-50">
				<div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
					
						<div  className="object-cover object-right w-full h-auto 2xl:m-36">
							<Image src={laptop} priority />
						</div>
					
				</div>
				<div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
					<div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
						<div className="max-w-xl mb-6">
							<div>
								<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
									Gloednieuw
								</p>
							</div>
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
								Wij{" "}
								<span className="inline-block text-deep-purple-accent-400">
									<Typewriter
										options={{
											strings: [
												"designen",
												"creëren",
												"hosten",
												"onderhouden",
												"beveiligen",
											],
											autoStart: true,
											loop: true,
										}}
									/>
								</span>
								<br className="hidden md:block" />
								uw ideale applicatie
							</h2>
							<p className="text-base text-gray-700 md:text-lg">
								Bij Go Online focusen wij op uw behoeftes. Daarom is elke
								applicatie die wij maken uniek.
							</p>
						</div>
						<form>
							<div className="flex flex-col md:flex-row">
								<Link href="#pricing">
									<p className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none cursor-pointer">
										Bekijk onze prijzen
									</p>
								</Link>
								<Link
									href="/"
									aria-label=""
									className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
								>
									
									<p className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer">Meer info</p>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
			<motion.div
				className="relative -mt-20 sm:px-0"
				initial={{ x: 200, opacity: 0.2 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<div className="relative grid ml-auto overflow-hidden md:w-full bg-white divide-y rounded shadow-md sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
					<div className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
							<svg
								className="w-10 h-10 text-deep-purple-accent-400"
								stroke="currentColor"
								viewBox="0 0 52 52"
							>
								<polygon
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
									fill="none"
									points="29 13 14 29 25 29 23 39 38 23 27 23"
								/>
							</svg>
						</div>
						<p className="font-bold tracking-wide text-gray-800">Goedkoop</p>
						<p className="tracking-wide text-gray-800 text-sm">
							Omdat wij een student onderneming zijn blinken wij uit met onze
							prijzen.
						</p>
					</div>
					<div className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
							<svg
								className="w-10 h-10 text-deep-purple-accent-400"
								stroke="currentColor"
								viewBox="0 0 52 52"
							>
								<polygon
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
									fill="none"
									points="29 13 14 29 25 29 23 39 38 23 27 23"
								/>
							</svg>
						</div>
						<p className="font-bold tracking-wide text-gray-800">
							Uniek design
						</p>
						<p className="tracking-wide text-gray-800 text-sm">
							Elke website heeft een uniek design afhankelijk van uw verlangens.
						</p>
					</div>
					<div className="inline-block p-8 text-center">
						<div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
							<svg
								className="w-10 h-10 text-deep-purple-accent-400"
								stroke="currentColor"
								viewBox="0 0 52 52"
							>
								<polygon
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
									fill="none"
									points="29 13 14 29 25 29 23 39 38 23 27 23"
								/>
							</svg>
						</div>
						<p className="font-bold tracking-wide text-gray-800">No nonsense</p>
						<p className="tracking-wide text-gray-800 text-sm">
							Geen maandelijkse betalingen zoals meeste website builders.
						</p>
					</div>
				</div>
			</motion.div>
		</section>
	);
};
