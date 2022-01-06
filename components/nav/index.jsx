import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NewWindow from "react-new-window";
import { motion } from "framer-motion";
import Image from "next/image";

export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileMenuOpen, setisProfileMenuOpen] = useState(false);
	const [loginPopup, setLoginPopup] = useState(false);

	const { data: session, status } = useSession();
	const profileMenu = useRef();

	useEffect(() => {
		if (!isProfileMenuOpen) return;
		function handleClick(event) {
			console.log(event.target);
			console.log(profileMenu.current);
			if (profileMenu.current && !profileMenu.current.contains(event.target)) {
				setisProfileMenuOpen(false);
			}
		}
		window.addEventListener("click", handleClick);
		// clean up
		return () => window.removeEventListener("click", handleClick);
	}, [isProfileMenuOpen]);

	return (
		<section className="sticky top-0 z-40 bg-white shadow-md">
			<div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div class="relative flex items-center justify-between">
					<nav class="flex items-center">
						<a
							href="/"
							aria-label="Go Online"
							title="Go Online"
							class="inline-flex items-center mr-8"
						>
							<Image src="/logo.png" height={50} width={161} />
						</a>
						<ul class="flex items-center hidden space-x-8 lg:flex">
							<li>
								<a
									href="/"
									aria-label="Our product"
									title="Our product"
									class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									Product
								</a>
							</li>
							<li>
								<a
									href="/"
									aria-label="Our product"
									title="Our product"
									class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									Features
								</a>
							</li>
							<li>
								<a
									href="/"
									aria-label="Product pricing"
									title="Product pricing"
									class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="/"
									aria-label="About us"
									title="About us"
									class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									About us
								</a>
							</li>
						</ul>
					</nav>

					{loginPopup && !session ? (
						<NewWindow url="/sign-in" onUnload={() => setLoginPopup(false)} />
					) : null}
					{status == "unauthenticated" && (
						<ul class="flex items-center hidden space-x-8 lg:flex">
							<li>
								<button
									onClick={() => setLoginPopup(true)}
									aria-label="Sign in"
									title="Sign in"
									class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
								>
									Sign in
								</button>
							</li>
							<li>
								<button
									onClick={() => setLoginPopup(true)}
									class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
									aria-label="Sign up"
									title="Sign up"
								>
									Sign up
								</button>
							</li>
						</ul>
					)}

					{status == "loading" && (
						<div className="flex items-center gap-4">
							<motion.div
								className="w-32 h-5 bg-gray-400 rounded-md shadow-md"
								animate={{ opacity: [1, 0.6, 1] }}
								transition={{ repeat: Infinity, duration: 1.5 }}
							></motion.div>
							<motion.div
								className="h-10 w-10 rounded-full shadow-md bg-gray-400 mr-2"
								animate={{ opacity: [1, 0.6, 1] }}
								transition={{ repeat: Infinity, duration: 1.5 }}
							></motion.div>
						</div>
					)}
					{session && (
						<ul
							class="flex items-center hidden space-x-4 lg:flex cursor-pointer"
							onClick={() => setisProfileMenuOpen(!isProfileMenuOpen)}
						>
							<li>
								<p className="font-medium text-gray-900">{session.user.name}</p>
							</li>
							<li className="flex items-center">
								<img
									className="h-10 w-10 rounded-full shadow-md"
									src={session.user.image}
								/>
								<span className="border-4 border-t-gray-400 border-x-transparent border-b-transparent mt-1 ml-1 h-0 w-0"></span>
							</li>
						</ul>
					)}
					{session && isProfileMenuOpen && (
						<div
							ref={profileMenu}
							className="absolute bg-white border rounded shadow-smabsolute h-fit w-36 rounded-t-md z-50 right-0 top-14"
						>
							<ul className="py-1">
								<li>
									<Link href="/dashboard">
										<p className="hover:bg-gray-100 px-3 py-1 cursor-pointer block">
											Dashboard
										</p>
									</Link>
								</li>
								<li>
									<a className="mb-1 hover:bg-gray-100 px-3 py-1 cursor-pointer block">
										<span>Settings</span>
									</a>
								</li>
								<li className="border-t-2">
									<a
										className="mt-1 hover:bg-gray-100 px-3 py-1 cursor-pointer block"
										onClick={() => signOut()}
									>
										<span className="text-red-600">Afmelden</span>
									</a>
								</li>
							</ul>
						</div>
					)}

					<div class="lg:hidden">
						<button
							aria-label="Open Menu"
							title="Open Menu"
							class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
							onClick={() => setIsMenuOpen(true)}
						>
							<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
								/>
								<path
									fill="currentColor"
									d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
								/>
								<path
									fill="currentColor"
									d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
								/>
							</svg>
						</button>
						{isMenuOpen && (
							<div class="absolute top-0 left-0 w-full">
								<div class="p-5 bg-white border rounded shadow-sm">
									<div class="flex items-center justify-between mb-4">
										<div>
											<a
												href="/"
												aria-label="Go Online"
												title="Go Online"
												class="inline-flex items-center"
											>
												<Image src="/logo.png" height={50} width={161} />
											</a>
										</div>
										<div>
											<button
												aria-label="Close Menu"
												title="Close Menu"
												class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
												onClick={() => setIsMenuOpen(false)}
											>
												<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
													<path
														fill="currentColor"
														d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul class="space-y-4">
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													Product
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Our product"
													title="Our product"
													class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													Features
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="Product pricing"
													title="Product pricing"
													class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													Pricing
												</a>
											</li>
											<li>
												<a
													href="/"
													aria-label="About us"
													title="About us"
													class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
												>
													About us
												</a>
											</li>
											{status == "unauthenticated" && (
												<>
													<li>
														<a
															href="/"
															aria-label="Sign in"
															title="Sign in"
															class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
														>
															Sign in
														</a>
													</li>
													<li>
														<a
															href="/"
															class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
															aria-label="Sign up"
															title="Sign up"
														>
															Sign up
														</a>
													</li>
													)
												</>
											)}
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
