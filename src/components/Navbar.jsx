import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import piont from "../assets/map-point-search.svg";
import Logo from "../assets/AMG_logo.svg";

function Navbar() {
	const menu = [
		{ name: "home", link: "/" },
		{ name: "features", link: "#features" },
		{ name: "vehicles", link: "#vehicles" },
		{ name: "news", link: "#news" },
		{ name: "contact", link: "#contact" },
	];

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

	const scrollToSection = (sectionId) => {
		if (sectionId === "home") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else {
			const section = document.getElementById(sectionId);
			if (section) {
				const offset = section.offsetTop - 50;
				console.log("scrolling");
				window.scrollTo({ top: offset, behavior: "smooth" });
			}
		}
	};

	return (
		<div
			className={`w-full flex items-center h-16 lg:left-1/2 lg:w-3/4 lg:-translate-x-2/4 lg:px-8 lg:rounded-full lg:top-2 lg:justify-between gap-2 px-4 bg-white z-50 ${stickyClass}`}>
			<div className="flex items-center justify-between w-full">
				<div className="lg:basis-1/6 md:basis-1/4 sm:w-1/3 w-1/2">
					<a href="/">
						<img src={Logo} className="w-full h-auto" />
					</a>
				</div>
				<nav
					className="lg:block lg:items-center xl:w-[32rem] lg:w-[28rem] lg:pt-1"
					aria-label="mainNav">
					<ul
						className={`lg:flex xl:px-14 px-7 justify-between lg:gap-2 xl:gap-6 text-sm lg:relative lg:flex-row z-20 ${
							menuVisible
								? "flex flex-col items-center absolute inset-x-0 pl-10 gap-4 top-16 w-full py-10 bg-white"
								: "hidden"
						} `}>
						{menu.map((item, index) => (
							<li key={index}>
								<a
									className="text-black transition font-body text-base tracking-wider font-medium uppercase hover:text-brightOrange group duration-300 cursor-pointer"
									onClick={() => scrollToSection(item.name)}>
									{item.name}
									<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-brightOrange"></span>
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
					className="rounded p-2 text-gray-600 hover:text-gray-600/75 "
					onClick={() => setMenuVisible(!menuVisible)}>
					{menuVisible ? (
						<svg
							className="fill-current transition-all duration-300"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 512 512">
							<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
						</svg>
					) : (
						<svg
							className="fill-current transition-all duration-300"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 512 512">
							<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
						</svg>
					)}
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
