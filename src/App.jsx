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
