const PricingItem = ({ price, children, itemName, list }) => {
	return (
		<>
			<article className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm active::bg-black">
				<div className="mb-6">
					<div className="flex items-center justify-between pb-6 mb-6 border-b">
						<div>
							<p className="text-sm font-bold tracking-wider uppercase">
								{itemName}
							</p>
							<div class="">
								<p className="text-5xl font-extrabold">{price}</p>
								<p class="text-sm text-gray-500">(vanaf)</p>
							</div>
						</div>
						<div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50">
							<svg
								className="w-10 h-10 text-deep-purple-accent-400"
								viewBox="0 0 24 24"
								strokeLinecap="round"
								strokeLidth="2"
							>
								<path
									d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"
									fill="none"
									stroke="currentColor"
								/>
								<path
									d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1"
									fill="none"
									stroke="currentColor"
								/>
								<path
									d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"
									fill="none"
									stroke="currentColor"
								/>
								<path
									d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1"
									fill="none"
									stroke="currentColor"
								/>
								<path
									d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
									fill="none"
									stroke="currentColor"
								/>
								<path
									d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
									fill="none"
									stroke="currentColor"
								/>
							</svg>
						</div>
						
					</div>
					
					<div>
						<p className="mb-2 font-bold tracking-wide">Features</p>
						<ul className="space-y-2">
							{list.map((item) => {
								return (
									<li className="flex items-center">
										<div className="mr-2">
											<svg
												className="w-4 h-4 text-deep-purple-accent-400"
												viewBox="0 0 24 24"
												strokeLinecap="round"
												strokeLidth="2"
											>
												<polyline
													fill="none"
													stroke="currentColor"
													points="6,12 10,16 18,8"
												/>
												<circle
													cx="12"
													cy="12"
													fill="none"
													r="11"
													stroke="currentColor"
												/>
											</svg>
										</div>
										<p className="font-medium text-gray-800 first-letter:capitalize">
											{item}
										</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div>
					<a
						href="/"
						className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
					>
						Get started
					</a>
					<p className="text-sm text-gray-600">
						Alle websites zonder hosting zijn eenmallige betalingen, geen
						maandelijkse kosten.
					</p>
				</div>
			</article>
		</>
	);
};

export const Pricing = () => {
	return (
		<section className=" pt-5" id="pricing">
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<div>
						<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
							Prijzen
						</p>
					</div>
					<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
						<span className="relative inline-block">
							<svg
								viewBox="0 0 52 24"
								fill="currentColor"
								className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
							>
								<defs>
									<pattern
										id="bc9273ce-29bb-4565-959b-714607d4d027"
										x="0"
										y="0"
										width=".135"
										height=".30"
									>
										<circle cx="1" cy="1" r=".7" />
									</pattern>
								</defs>
								<rect
									fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
									width="52"
									height="24"
								/>
							</svg>
							<span className="relative">Hoeveel</span>
						</span>{" "}
						kost zo een website dan?
					</h2>
					<p className="text-base text-gray-700 md:text-lg">
						Dit zijn veel gevraagde soorten websites. Vindt je niet wat je
						zoekt? Geen probleem,{" "}
						<a className="text-deep-purple-accent-400 hover:underline" href="">
							contacteer ons
						</a>{" "}
						en we maken een offerte op voor jouw website.
					</p>
				</div>
				<div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
					<PricingItem
						itemName="basic website"
						price="€245"
						list={[
							"Uniek design",
							"Website met jouw info",
							"Contacteerformulier",
							"Levenslange email support",
						]}
					>
						Jouw online visitekaartje
					</PricingItem>
					<PricingItem
						itemName="webshop"
						price="€665"
						list={[
							"uniek design",
							"admin dashboard",
							"Nieuwste technologieën",
							"Ongelimiteerde producten",
							"automatische betalingen",
							"automatische facturen",
							"levenslange email support",
						]}
					>
						Jouw online visitekaartje
					</PricingItem>
					<PricingItem
						itemName="pro"
						price="€1085"
						list={[
							"Uniek design",
							"admin dashboard",
							"Website met jouw info",
							"Contacteerformulier",
							"Loginsysteem",
							"documentatie",
							"inleading in het programma",
							"Levenslange email support",
						]}
					>
						Jouw online visitekaartje
					</PricingItem>
					
				</div>
			</div>
		</section>
	);
};
