import { motion } from "framer-motion";

function Hero() {
	return (
		<section className="flex sm:w-screen sm:h-screen z-0 bg-hero-image bg-cover sm:bg-center bg-no-repeat w-full bg-[top_right_-25rem] h-[calc(100vh_-_4rem)]">
			<div className="relative flex sm:items-center items-start overflow-hidden bg-transparent sm:px-16 sm:pb-16 px-5 sm:mt-28 mt-20 mx-auto">
				<div className="container relative flex flex-col backdrop-blur-sm bg-black/50 sm:p-12 p-10 sm:w-1/2 sm:rounded-br-full rounded-xl">
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-3xl font-black leading-none text-white uppercase font-header sm:text-6xl pb-4 sm:text-left text-center">
						Unleash Adrenaline
						{/* Uncover the Intensity of AMG Performance */}
					</motion.h1>

					{/*  Uncover the Intensity of AMG Performance */}
					<p className="text-sm text-white sm:text-xl font-semibold sm:w-4/5 sm:text-left text-center font-body">
						Experience the Thrill of Precision Engineering and Unrivaled Speed as AMG
						Cars Redefine Automotive Performance.
					</p>
					<div className="flex sm:gap-0 sm:justify-start justify-center sm:items-start items-center mt-8">
						<a
							href="#"
							className="px-4 py-2 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80">
							Get one
						</a>
						<a
							href="#"
							className="px-4 py-2 text-brightOrange uppercase bg-transparent border-2 border-brightOrange rounded-lg dark:text-white hover:bg-brightOrange hover:text-white text-md">
							Learn more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
