import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import piont from "../assets/map-point-search.svg";
import Logo from "../assets/AMG_logo.svg";

function Navbar() {
	const menu = ["home", "services", "Vehicles", "FAQ", "contact"];

	const [menuVisible, setMenuVisible] = useState(false);
	const [stickyClass, setStickyClass] = useState("absolute");

	const stickNavbar = () => {
		window.scrollY > 500 ? setStickyClass("fixed top-0") : setStickyClass("absolute");
	};

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	return (
		<div
			className={`w-full flex items-center h-16 lg:left-1/2 lg:w-3/4 lg:-translate-x-2/4 lg:px-8 lg:rounded-full lg:top-2 lg:justify-between gap-2 px-4 bg-white z-50 ${stickyClass}`}>
			<div className="flex items-center justify-between w-full">
				<div className="lg:basis-1/6 md:basis-1/3 basis-1/2">
					<img src={Logo} className="w-full h-auto" />
				</div>
				<nav
					className="lg:block lg:items-center xl:w-[32rem] lg:w-[28rem]"
					aria-label="mainNav">
					<ul
						className={`lg:flex xl:px-14 px-7 justify-between lg:gap-2 xl:gap-6 text-sm lg:relative lg:flex-row z-20 ${
							menuVisible
								? "flex flex-col items-center absolute inset-x-0 pl-10 gap-4 top-16 w-full py-10 bg-white"
								: "hidden"
						} `}>
						{menu.map((item) => (
							<li key={item}>
								<a
									className="text-black transition capitalize font-body text-base font-medium"
									href="/">
									{item}
								</a>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex">
					<SearchInput />
					<FindDealer />
				</div>
			</div>

			<div className="block lg:hidden">
				<button
					className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
					onClick={() => setMenuVisible(!menuVisible)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

function FindDealer() {
	return (
		<div className="group">
			<img className="w-10 cursor-pointer relative" src={piont} alt="find a dealer" />
			<span className="hidden absolute z-10 px-4 py-1 bg-black text-white rounded-xl sm:group-hover:inline-block overflow-hidden clear-both whitespace-nowrap top-16 -right-5">
				Find a dealer
			</span>
		</div>
	);
}

export default Navbar;
