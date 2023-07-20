import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import icon from "./assets/mercedes/cars-icon.png";
import purchaseIcon from "./assets/mercedes/purchase-icon.png";
import findDelear from "./assets/mercedes/find-delear-icon.png";

function Features() {
	return (
		<section className="py-16">
			<h1 className="font-header text-4xl text-center">Purchace your Next AMG easily</h1>
			<div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
					<div className="flex-shrink-0">
						<img src={icon} className="max-w-full w-full h-full" />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
						Find the AMG model that&#39;s right for you.
					</h3>
				</div>
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
					<div className="flex-shrink-0">
						<img src={purchaseIcon} />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
						Purchase your individual vehicle.
					</h3>
				</div>
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
					<div className="flex-shrink-0">
						<img src={findDelear} />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl ">
						Find a dealer in your area.
					</h3>
				</div>
			</div>
		</section>
	);
}

function App() {
	return (
		<div className="relative">
			<Navbar />
			<Hero />
			<Features />
		</div>
	);
}

export default App;
