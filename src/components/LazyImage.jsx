import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Blurhash } from "react-blurhash";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function LazyImage({ src, alt = "...", hash, className, animate = true }) {
	const [imageLoaded, setImageLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const img = new Image();

		img.onload = () => {
			setImageLoaded(true);
		};
		img.src = src;
	}, [src]);

	return (
		<>
			<div className={`w-full h-auto ${imageLoaded ? "hidden" : "inline animate-pulse"}`}>
				<Blurhash
					hash={hash}
					width="100%"
					height="100%"
					resolutionX={32}
					resolutionY={32}
					punch={1}
				/>
			</div>
			{animate ? (
				<motion.div
					initial={false}
					animate={
						imageLoaded && isInView
							? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
							: { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
					}
					transition={{ duration: 1, delay: 1 }}
					viewport={{ once: true }}
					onViewportEnter={() => setIsInView(true)}>
					<img src={src} className={className} alt={alt} loading="lazy" />
				</motion.div>
			) : (
				<img src={src} className={className} alt={alt} loading="lazy" />
			)}
		</>
	);
}

LazyImage.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	hash: PropTypes.string,
	className: PropTypes.string,
	animate: PropTypes.bool,
};

export default LazyImage;
