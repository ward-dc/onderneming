import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";


export default function AdminNav() {




        
	const { data: session, status } = useSession();

	const [isProfileMenuOpen, setisProfileMenuOpen] = useState(false);

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
		<nav class="bg-white border-b border-gray-200 sticky top-0 z-30 w-full">
			<div class="px-3 py-3 lg:px-5 lg:pl-3">
				<div class="flex items-center justify-between">
					<div class="flex items-center justify-start">
						<button
							id="toggleSidebarMobile"
							aria-expanded="true"
							aria-controls="sidebar"
							class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
						>
							<svg
								id="toggleSidebarMobileHamburger"
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								></path>
							</svg>
							<svg
								id="toggleSidebarMobileClose"
								class="w-6 h-6 hidden"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
						<a
							href="/"
							class="text-xl font-bold flex items-center lg:ml-2.5"
						>
							<Image src="/logo.png" height={50} width={161} />
						</a>
						<form action="#" method="GET" class="hidden lg:block lg:pl-32">
							<label for="topbar-search" class="sr-only">
								Search
							</label>
							<div class="mt-1 relative lg:w-64">
								<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<svg
										class="w-5 h-5 text-gray-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clip-rule="evenodd"
										></path>
									</svg>
								</div>
								<input
									type="text"
									name="email"
									id="topbar-search"
									class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
									placeholder="Search"
								/>
							</div>
						</form>
					</div>
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
                                        
				</div>
			</div>
		</nav>
	);
}
