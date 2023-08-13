import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import VideoSection from "./components/sections/VideoSection";
import Vehicles from "./components/sections/Vehicles";
import Lounge from "./components/sections/Lounge";
import News from "./components/sections/News";
import Experience from "./components/sections/Experience";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/sections/Footer";
import BackToTopButton from "./components/BackToTopButton";

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
			<BackToTopButton />
		</div>
	);
}

export default App;
