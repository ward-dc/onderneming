import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShieldAlt,
	faServer,
	faChartBar,
        faProjectDiagram
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const UniekItem = ({ children, title, list, link, icon }) => {
	return (
		<div>
			<div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
				<FontAwesomeIcon
					size="2x"
					icon={icon}
					className="text-deep-purple-accent-400"
				/>
			</div>
			<h6 className="mb-2 font-semibold leading-5">{title}</h6>
			<p className="mb-3 text-sm text-gray-900">{children}</p>
			<ul className="mb-4 -ml-1 space-y-2">
				{list?.map((item) => {
					return (
						<li className="flex items-start">
							<span className="mr-1">
								<svg
									className="w-5 h-5 mt-px text-deep-purple-accent-400"
									stroke="currentColor"
									viewBox="0 0 52 52"
								>
									<polygon
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
										fill="none"
										points="29 13 14 29 25 29 23 39 38 23 27 23"
									/>
								</svg>
							</span>
							{item}
						</li>
					);
				})}
			</ul>
			{link && (
				<Link href={link} aria-label="">
					<p className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer">
						Bekijk preview
					</p>
				</Link>
			)}
		</div>
	);
};

export const WhatWeDo = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<h2 className="- mb-8 text-4xl font-extrabold leading-none md:pl-2">
				Wat is uniek aan{" "}
				<span className="inline-block text-deep-purple-accent-400">
					Go Online
				</span>
			</h2>
			<div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
				<UniekItem
					title="All-in-one"
					icon={faProjectDiagram}
					list={["Design", "Development", "Onderhoud", "Hosing", "Beveiliging"]}
				>
					Wij zijn uw IT-afdeling. Wij houden alles in de gaten en zorgen ervoor
					dat jouw website altijd optimaal tot zijn recht komt.
				</UniekItem>
				<UniekItem icon={faChartBar} title="Dashboard" link="/dashboard">
					Elke website heeft een dashboard waarin u alle gegevens kan
					analyseren.
				</UniekItem>
				<UniekItem
					title="Server-Side Rendering"
					icon={faServer}
					list={["Snel", "Geen pagina reloads", "Betere gebruikerservaring"]}
				>
					Een server-side gerenderde applicatie zorgt ervoor dat pagina's
					sneller kunnen worden geladen, wat de gebruikerservaring verbetert.
				</UniekItem>
				<UniekItem
					title="Beveiliging"
					icon={faShieldAlt}
					list={[
						"Nieuwste technologieën",
						"Automatisch inbreuk detectie systeem",
					]}
				>
					Elke applicatie die wij maken is bveveiligd met verschillende
					beveiligingstechnieken
				</UniekItem>
			</div>
		</div>
	);
};
