import { useState } from "react";
import amgVideo from "../../assets/amg_teaser.mp4";
import Divider from "../Divider";
import videoPoster from "../../assets/video-poster-small.jpeg";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function VideoSection() {
	const [isReady, setIsReady] = useState(false);
	const [isInView, setIsInView] = useState(false);

	const handleLoadedData = () => {
		setIsReady(true);
	};

	return (
		<section className="container py-20 px-2 mx-auto">
			<div className="sm:px-5">
				<motion.h4
					className="inline-block text-black font-body text-base font-medium tracking-wider mb-3"
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
					viewport={{ once: true }}>
					Exclusive New vehicle
				</motion.h4>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
					viewport={{ once: true }}>
					<Divider />
				</motion.div>
			</div>

			<div className="flex sm:flex-nowrap flex-wrap-reverse justify-between gap-4">
				<div className="sm:w-1/3">
					<div className="px-5 flex flex-col gap-4">
						<motion.h1
							className="text-black font-header text-3xl uppercase text-center sm:text-left"
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
							viewport={{ once: true }}>
							the new Mercedes-AMG GLC SUV
						</motion.h1>
						<motion.p
							className="font-body text-base tracking-wider leading-relaxed text-black text-center sm:text-left"
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
							viewport={{ once: true }}>
							Everything, except compromises: in an exclusive, digital Private Lounge
							presentation, get a personal overview of the extraordinary highlights of
							this vehicle, directly from our product manager. Register now or log in
							with your Mercedes me ID to see the video and comment.
						</motion.p>
						<motion.button
							href="#"
							className="px-4 py-2 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80"
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
							viewport={{ once: true }}>
							Get one
						</motion.button>
					</div>
				</div>
				<div className="aspect-video sm:w-2/3">
					<div className={`w-full h-full animate-pulse ${isReady ? "hidden" : "block"}`}>
						<img
							className="w-full h-full object-cover object-center rounded-lg"
							src={videoPoster}
						/>
					</div>
					<motion.div
						className="w-full h-full"
						initial={false}
						animate={
							isReady && isInView
								? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
								: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
						}
						transition={{ duration: 1, delay: 1 }}
						viewport={{ once: true }}
						onViewportEnter={() => setIsInView(true)}>
						<video
							className="rounded-lg"
							preload="metadata"
							autoPlay
							loop
							muted
							onLoadedData={handleLoadedData}>
							<source src={amgVideo} type="video/mp4" />
						</video>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default VideoSection;
