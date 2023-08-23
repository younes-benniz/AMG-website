import { motion } from "framer-motion";
import heroImage from "../../assets/hero-image.jpeg";
import LazyImage from "../LazyImage";

function Hero() {
	return (
		<section className="relative flex flex-col gap-10 h-[calc(100vh_-_4rem)] lg:h-screen">
			<div className="lg:absolute relative lg:inset-0">
				<LazyImage
					src={heroImage}
					className="lg:h-screen w-full object-contain object-center lg:object-cover mt-20 lg:mt-0"
					alt="Orange-AMG"
					hash="eXFPHWb^ODxaWB?^oLjZo}aeI:r?spX8aerXR*Shr=f+xaW;ofofkC"
				/>
			</div>
			<div className="relative lg:h-screen flex items-center overflow-hidden bg-transparent lg:pr-16 xl:pl-16 lg:pb-16 px-5 lg:mt-8 mx-auto">
				<div className="relative flex flex-col backdrop-blur-sm bg-black/70 md:p-4 md:pr-12 xl:p-12 p-10 w-full lg:w-1/2 sm:rounded-br-full rounded-xl">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-2xl tracking-wider md:text-2xl font-black leading-none text-white uppercase font-header xl:text-5xl pb-4 sm:text-left text-center">
						Unleash Adrenaline
						{/* Uncover the Intensity of AMG Performance */}
					</motion.h1>
					<p className="text-base text-white md:text-base xl:text-xl font-semibold xl:w-4/5 sm:text-left text-center font-body leading-loose tracking-wider">
						Experience the Thrill of Precision Engineering and Unrivaled Speed as AMG
						Cars Redefine Automotive Performance.
					</p>
					<div className="flex lg:flex-row sm:gap-0 sm:justify-start justify-center sm:items-start items-center md:mt-3 mt-5">
						<a
							href="#"
							className="p-1 lg:px-4 lg:py-2 md:px-2 md:py-1 mr-4 text-white  bg-brightOrange border-2 border-transparent rounded-lg text-sm md:text-base hover:bg-brightOrange/80">
							Learn More
						</a>
						<a
							href="#"
							className="p-1 lg:px-4 lg:py-2 md:px-2 md:py-1 text-brightOrange  bg-transparent border-2 border-brightOrange rounded-lg hover:bg-brightOrange hover:text-white text-sm md:text-base">
							Find a Dealer
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
