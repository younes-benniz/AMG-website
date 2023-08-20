import PropTypes from "prop-types";
import Divider from "./Divider";

function OverlayedImage({ image, title, description, header }) {
	return (
		<>
			<div className="lg:absolute inset-0 z-10 block w-full lg:w-4/5 mx-auto lg:overflow-hidden p-5 lg:p-0">
				<div className="absolute hidden lg:block bg-black/70 h-full w-[560px] left-[150px] origin-top transform-gpu lg:-skew-x-[36deg] "></div>
				<div className="lg:absolute lg:right-0 lg:top-0 lg:left-[120px] w-full lg:w-[350px] z-10 lg:text-white text-black">
					<h4 className=" mt-14 text-base font-body mb-5 font-medium tracking-wider">
						{header}
					</h4>
					<Divider />
					<h1 className="text-4xl tracking-wider font-header  mt-10 uppercase mb-5 font-bold">
						{title}
					</h1>
					<p className="text-base font-body font-medium tracking-wider leading-relaxed mb-5 ">
						{description}
					</p>
					<button
						href="#"
						className="px-4 py-2 mr-4  uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80">
						Learn more
					</button>
				</div>
			</div>
			<div className="relative lg:overflow-hidden p-5 lg:p-0">
				<img
					src={image}
					loading="lazy"
					alt="lounge"
					className="max-w-[1020px] w-full text-center h-full mx-auto rounded-lg"
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
