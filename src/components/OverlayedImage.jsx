import PropTypes from "prop-types";
import Divider from "./Divider";

function OverlayedImage({ image, title, description, header }) {
	return (
		<>
			<div className="absolute inset-0 z-10 block w-4/5 mx-auto overflow-hidden">
				<div className="absolute block bg-black/70 h-full w-[560px] left-[150px] origin-top transform-gpu -skew-x-[36deg] "></div>
				<div className="absolute right-0 top-0 left-[120px] w-[350px] z-10">
					<h4 className="text-white mt-14 text-base font-body mb-5 font-medium tracking-wider">
						{header}
					</h4>
					<Divider />
					<h1 className="text-4xl tracking-wider font-header text-white mt-10 uppercase mb-5 font-bold">
						{title}
					</h1>
					<p className="text-base font-body font-medium tracking-wider leading-relaxed mb-5 text-white">
						{description}
					</p>
					<button
						href="#"
						className="px-4 py-2 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80">
						Learn more
					</button>
				</div>
			</div>
			<div className="relative overflow-hidden">
				<img
					src={image}
					alt="lounge"
					className="max-w-[1020px] w-full text-center h-full mx-auto"
				/>
			</div>
		</>
	);
}

OverlayedImage.propTypes = {
	image: PropTypes.string,
	header: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

export default OverlayedImage;
