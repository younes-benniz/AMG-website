import icon from "../../assets/cars-icon.png";
import purchaseIcon from "../../assets/purchase-icon.png";
import findDelear from "../../assets/find-delear-icon.png";

function Features() {
	return (
		<section id="features" className="container mx-auto py-12 px-5">
			<h1 className="font-header text-4xl text-center">Purchace your Next AMG easily</h1>
			<div className="flex flex-wrap items-center justify-center gap-8 text-center">
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
					<div className="flex-shrink-0">
						<img src={icon} className="max-w-full w-full h-full" loading="lazy" />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
						Find the AMG model that&#39;s right for you.
					</h3>
				</div>
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
					<div className="flex-shrink-0">
						<img src={purchaseIcon} loading="lazy" />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
						Purchase your individual vehicle.
					</h3>
				</div>
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
					<div className="flex-shrink-0">
						<img src={findDelear} loading="lazy" />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl ">
						Find a dealer in your area.
					</h3>
				</div>
			</div>
		</section>
	);
}

export default Features;
