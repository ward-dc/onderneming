import { motion } from "framer-motion";
import Image from "next/image";

const InfoItem = ({ children, src }) => {
	return (
		<a href="/" aria-label="View Item">
			<figure className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
				<img
					className="object-cover w-full h-56 md:h-64 xl:h-80"
					src={src}
					alt=""
				/>
				<div className="absolute h-full inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-80">
					<figcaption className=" tracking-wide text-white">
						<h3 className="text-lg font-medium mb-2">{children}</h3>
						<h3 className="text-sm ">{children}</h3>
					</figcaption>
					
				</div>
			</figure>
		</a>
	);
};

export const BasicInfo = () => {
	return (
		<section className="bg-blue-50 pt-16">
			<div className=" px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
				<div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
					<h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
						<span className="inline-block mb-1 sm:mb-4 cursor-default">
							Onze services?
						</span>
						<div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
					</h2>
				</div>
				<motion.div
					className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2"
					initial={{ y: 100, opacity: 0.2 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<InfoItem src="/design.jpg">
						Uw gepersonalizeerde website maken
					</InfoItem>
					<InfoItem src="/design.jpg">Een backend API maken</InfoItem>
					<InfoItem src="/security.jpg">Uw systeem onderhouden</InfoItem>
					<InfoItem src="/server.jpg">Al uw applicaties hosten.</InfoItem>
				</motion.div>
				<div className="text-center">
					<a
						href="/"
						aria-label=""
						className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
					>
						See more
						<svg
							className="inline-block w-3 ml-2"
							fill="currentColor"
							viewBox="0 0 12 12"
						>
							<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};
