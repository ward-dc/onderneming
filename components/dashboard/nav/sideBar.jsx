import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChartBar,
	faHistory,
	faInbox,
	faInfo,
	faServer,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
const Item = ({ icon, notis, children, link }) => {
	if (!link) return null;
	return (
		<li>
			<Link href={link} target="_blank">
				<div className="text-base text-gray-800 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group cursor-pointer">
					<div className="h-5 w-5">
						<FontAwesomeIcon icon={icon} size="lg" className="text-gray-800" />
					</div>
					<span className="ml-3 flex-1 whitespace-nowrap font-medium">
						{children}
					</span>
					{notis && notis != 0 && (
						<span className="bg-deep-purple-accent-400 text-white ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
							{notis}
						</span>
					)}
				</div>
			</Link>
		</li>
	);
};

export default function AdminSidebar() {
	return (
		<aside
			id="sidebar"
			className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
			aria-label="Sidebar"
		>
			<div className="h-full py-5 border-r border-gray-200 bg-white pt-0">
				<div className="flex flex-col justify-between h-full px-3 bg-white divide-y space-y-1">
					<ul className="space-y-2 pb-2">
						<li className="p-2 my-4">
							<div className="relative">
								<select
									className="block appearance-none w-full cursor-pointer bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
								>
									<option>go-online.be</option>
									<option>go-online.com</option>
									<option>go-online.net</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</li>
						<Item icon={faChartBar} notis="0" link="/dashboard">
							Dashboard
						</Item>
						<Item icon={faInbox} notis="1" link="/dashboard/inbox">
							Inbox
						</Item>
						<Item icon={faHistory} notis="" link="/dashboard/inbox">
							Transacties
						</Item>
						<Item icon={faServer} notis="" link="/dashboard/inbox">
							Hosting
						</Item>
					</ul>
					<ul className="space-y-2 pt-2 ">
						<Item icon={faQuestionCircle} notis="" link="/dashboard/help">
							Help
						</Item>
						<Item icon={faEnvelope} notis="" link="/dashboard/contact">
							Contact us
						</Item>
					</ul>
				</div>
			</div>
		</aside>
	);
}
