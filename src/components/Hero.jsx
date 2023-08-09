import { motion } from "framer-motion";

function Hero() {
	return (
		<section className="flex sm:h-screen z-0 bg-hero-image bg-cover md:bg-center bg-no-repeat w-full bg-[top_right_-5rem] h-[calc(100vh_-_4rem)]">
			<div className="relative flex sm:items-center items-start overflow-hidden bg-transparent sm:pr-16 sm:pb-16 px-5 sm:mt-28 mt-20 mx-auto">
				<div className="relative flex flex-col backdrop-blur-sm bg-black/50 md:p-4 md:pr-12 xl:p-12 p-10 md:w-[55%] lg:w-1/2 sm:rounded-br-full rounded-xl">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-3xl md:text-2xl font-black leading-none text-white uppercase font-header xl:text-5xl pb-4 sm:text-left text-center">
						Unleash Adrenaline
						{/* Uncover the Intensity of AMG Performance */}
					</motion.h1>
					<p className="text-sm text-white md:text-base xl:text-xl font-semibold xl:w-4/5 sm:text-left text-center font-body leading-loose tracking-wider">
						Experience the Thrill of Precision Engineering and Unrivaled Speed as AMG
						Cars Redefine Automotive Performance.
					</p>
					<div className="flex lg:flex-row sm:gap-0 sm:justify-start justify-center sm:items-start items-center md:mt-3 mt-5">
						<a
							href="#"
							className="p-1 lg:px-4 lg:py-2 md:px-2 md:py-1 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-sm md:text-base hover:bg-brightOrange/80">
							Get one
						</a>
						<a
							href="#"
							className="p-1 lg:px-4 lg:py-2 md:px-2 md:py-1 text-brightOrange uppercase bg-transparent border-2 border-brightOrange rounded-lg dark:text-white hover:bg-brightOrange hover:text-white text-sm md:text-base">
							Learn more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
