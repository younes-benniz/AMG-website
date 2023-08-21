import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Blurhash } from "react-blurhash";

function LazyImage({ src, alt = "...", hash, className }) {
	const [imageLoaded, setImageLoaded] = useState(false);

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
			<img
				src={src}
				className={`${
					imageLoaded ? "opacity-100 " : "opacity-0"
				} ${className} transition-opacity duration-300`}
				alt={alt}
				loading="lazy"
			/>
		</>
	);
}

LazyImage.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	hash: PropTypes.string,
	className: PropTypes.string,
};

export default LazyImage;
