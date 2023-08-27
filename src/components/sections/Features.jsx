import icon from "../../assets/cars-icon.png";
import purchaseIcon from "../../assets/purchase-icon.png";
import findDelear from "../../assets/find-delear-icon.png";
import { motion } from "framer-motion";

function Features() {
	const features = [
		{
			image: icon,
			title: "Find the AMG model that's right for you.",
			alt: "mercedes-cars",
		},
		{
			image: purchaseIcon,
			title: "Purchase your individual vehicle.",
			alt: "mercides-customization",
		},
		{
			image: findDelear,
			title: "Find a dealer in your area.",
			alt: "mercedes-dealer-location",
		},
	];
	return (
		<section id="features" className="container mx-auto py-12 px-5">
			<h1 className="font-header text-4xl text-center">Purchace your Next AMG easily</h1>
			<div className="flex flex-wrap items-center justify-center gap-8 text-center">
				{features.map((feature, index) => (
					<motion.div
						key={index}
						className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:even:mt-16 md:even:mt-20 lg:even:mt-24"
						whileHover={{ scale: 1.1 }}
						initial={index == 0 ? { x: -150 } : index == 1 ? { y: 100 } : { x: 150 }}
						whileInView={index == 0 ? { x: 0 } : index == 1 ? { y: 0 } : { x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}>
						<div className="flex-shrink-0">
							<motion.img
								src={feature.image}
								alt={feature.alt}
								className="max-w-full w-full h-full"
								loading="lazy"
								whileInView={{ rotate: 360 }}
								transition={{ delay: 0.7 }}
								viewport={{ once: true }}
							/>
						</div>
						<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
							{feature.title}
						</h3>
					</motion.div>
				))}
			</div>
		</section>
	);
}

export default Features;
