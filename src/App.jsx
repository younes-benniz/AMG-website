import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import VideoSection from "./components/VideoSection";
import Vehicles from "./components/Vehicles";
import Lounge from "./components/Lounge";
import News from "./components/News";

import Experience from "./components/Experience";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="relative">
			<Navbar />
			<Hero />
			<Features />
			<VideoSection />
			<Vehicles />
			<Lounge />
			<News />
			<Experience />
			<Newsletter />
			<Footer />
			<button
				id="to-top-button"
				// onClick="goToTop()"
				// title="Go To Top"
				className="hidden z-90 bottom-8 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-brightOrange text-white text-3xl font-bold">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-8 h-8 mx-auto">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<path
							opacity="0.5"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 20.75C12.4142 20.75 12.75 20.4142 12.75 20L12.75 10.75L11.25 10.75L11.25 20C11.25 20.4142 11.5858 20.75 12 20.75Z"
							fill="#1C274C"
						/>
						<path
							d="M6.00002 10.75C5.69667 10.75 5.4232 10.5673 5.30711 10.287C5.19103 10.0068 5.25519 9.68417 5.46969 9.46967L11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5304 3.46967L18.5304 9.46967C18.7449 9.68417 18.809 10.0068 18.6929 10.287C18.5768 10.5673 18.3034 10.75 18 10.75L6.00002 10.75Z"
							fill="#1C274C"
						/>
					</g>
				</svg>
			</button>
		</div>
	);
}

export default App;
