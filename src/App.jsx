import Navbar from "./components/Navbar";
import hero from "./assets/test.jpeg";

function App() {
	return (
		<div className="relative">
			<Navbar />
			<img className="w-full h-screen object-cover" src={hero} alt="hero" />
		</div>
	);
}

export default App;
