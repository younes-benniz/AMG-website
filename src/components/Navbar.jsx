import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import piont from "../assets/map-point-search.svg";

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
			className={`w-full flex items-center h-16 sm:left-1/2 sm:w-3/4 sm:-translate-x-2/4 sm:px-8 sm:rounded-full sm:top-2 sm:justify-between gap-2 px-4 bg-white z-50 ${stickyClass}`}>
			<div className="flex items-center justify-between w-full">
				<div className="w-48">
					<svg
						clipRule="evenodd"
						fillRule="evenodd"
						viewBox="80 100 540 200"
						xmlns="http://www.w3.org/2000/svg">
						<g fill="#004D7F">
							<path d="m119.217 181.319c-.993-.001-2.295.647-2.893 1.44l-26.023 34.472c-.598.792-.275 1.44.718 1.44h30.223c.993 0 2.295-.648 2.894-1.44l26.047-34.46c.599-.792.276-1.441-.717-1.441l-30.248-.011" />
							<path d="m173.381 182.758c.598-.792.275-1.441-.718-1.441h-14.201c-.993 0-2.295.648-2.893 1.441l-26.035 34.472c-.598.792-.276 1.44.717 1.44h14.214c.993 0 2.295-.648 2.893-1.44l26.024-34.472" />
							<path d="m181.92 181.318c-.993 0-2.295.648-2.893 1.441l-26.035 34.472c-.598.792-.276 1.44.717 1.44h10.831c.993 0 2.295-.648 2.893-1.44l26.035-34.472c.598-.792.275-1.441-.717-1.441z" />
							<path d="m174.66 217.242c-.598.793-.275 1.441.718 1.439l7.46-.008c.993-.002 2.294-.651 2.893-1.443l26.022-34.46c.599-.792.276-1.441-.716-1.443l-7.461-.008c-.993-.002-2.294.646-2.892 1.439l-26.024 34.483" />
							<path d="m194.067 217.233c-.599.791-.279 1.438.715 1.438h5.42c.993 0 2.296-.647 2.895-1.439l26.018-34.339c.599-.791.278-1.439-.715-1.439h-5.395c-.993 0-2.297.648-2.896 1.438l-26.042 34.34" />
							<path d="m242.061 200.324c-.993 0-1.316-.648-.719-1.441l4.818-6.396c.598-.793 1.899-1.442 2.891-1.442h33.52c.993 0 1.806.813 1.808 1.805l.008 5.656c.002.993-.81 1.806-1.803 1.806zm-1.928-18.869c-.993 0-2.295.647-2.895 1.439l-26.019 34.351c-.599.791-.278 1.438.715 1.437l12.635-.009c.993-.001 2.295-.649 2.895-1.44l4.152-5.481c.599-.791 1.903-1.439 2.895-1.44l48.06-.011c.993-.001 1.806.812 1.806 1.804v4.761c0 .993.812 1.806 1.806 1.807l9.922.009c.993.001 1.806-.811 1.806-1.804v-33.606c0-.993-.813-1.805-1.806-1.805l-55.971-.012" />
							<path d="m304.602 216.866c0 .993.813 1.805 1.806 1.805h9.923c.993 0 1.806-.812 1.806-1.805l.011-18.978c0-.993.701-1.392 1.556-.888l18.783 11.077c.855.505 2.367.916 3.359.915l7.212-.008c.993-.002 2.505-.415 3.361-.918l18.78-11.055c.856-.504 1.556-.103 1.556.889l-.011 18.966c0 .993.811 1.805 1.805 1.805h9.935c.993 0 1.806-.812 1.806-1.805v-33.594c0-.993-.813-1.806-1.806-1.807l-9.923-.009c-.993-.001-2.488.439-3.321.978l-24.258 15.679c-.833.539-2.199.539-3.033 0l-24.282-15.679c-.834-.539-2.329-.979-3.322-.978l-9.935.009c-.993.001-1.806.814-1.806 1.807v33.594" />
							<path d="m393.054 216.866c0 .993.812 1.805 1.805 1.805h73.336c.993 0 1.806-.812 1.806-1.805v-18.593c0-.993-.813-1.805-1.806-1.806l-36.106-.011c-.993-.001-1.804.812-1.802 1.804l.006 3.604c.002.993.815 1.806 1.808 1.807l22.561.022c.993.001 1.806.814 1.806 1.807v1.912c0 .993-.813 1.805-1.806 1.804l-46.256-.011c-.993-.001-1.806-.813-1.806-1.806v-14.662c0-.993.813-1.805 1.806-1.805l59.789-.012c.993 0 1.806-.812 1.806-1.805v-5.856c0-.993-.813-1.805-1.806-1.805l-73.336.012c-.993 0-1.805.813-1.805 1.805v33.594" />
						</g>
					</svg>
				</div>
				<nav className="sm:block sm:items-center sm:w-[32rem]" aria-label="mainNav">
					<ul
						className={`sm:flex px-14 justify-between sm:gap-6 text-sm sm:relative sm:flex-row z-20 ${
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
