import Link from "next/link";

export const MobileNavItem = ({ text,href }) => {
	return (
		<li>
			<Link href={href} aria-label={text} title={text}>
				<p className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer">
					{text}
				</p>
			</Link>
		</li>
	);
};

export const NavItem = ({ text,href }) => {
	return (
                <li>
                <Link href={href} aria-label="Our product" title="Our product">
                        <p className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer">
                                {text}
                        </p>
                </Link>
        </li>
	);
};

