import { useState, useEffect } from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import piont from "../assets/map-point-search.svg";

function Navbar() {
	const menu = ["home", "services", "Vehicles", "FAQ", "contact"];

	const [menuVisible, setMenuVisible] = useState(false);
	const [stickyClass, setStickyClass] = useState("sm:absolute");

	const stickNavbar = () => {
		window.scrollY > 500 ? setStickyClass("fixed sm:top-2") : setStickyClass("absolute");
	};

	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	});

	return (
		<div
			className={`sm:w-3/4 h-16 left-1/2 container mx-auto w-full sm:-translate-x-2/4 sm:px-8 sm:rounded-full px-4 bg-white flex items-center sm:justify-between gap-2 z-50 ${stickyClass} top-5`}>
			<div className="flex items-center justify-between w-full">
				<Logo />
				<nav className="sm:block sm:items-center sm:w-[32rem]" aria-label="mainNav">
					<ul
						className={`sm:flex px-14 justify-between sm:gap-6 text-sm sm:relative sm:flex-row z-20 ${
							menuVisible
								? "flex flex-col absolute inset-x-0 pl-10 gap-4 top-16 w-screen h-1/3 py-10 bg-white"
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

			{/* small screen */}
			<div className="block sm:hidden">
				<button
					className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
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
