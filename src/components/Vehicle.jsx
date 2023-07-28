import Divider from "./Divider";
import PropTypes from "prop-types";
function Vehicle({ image, title, description, imgaePositon }) {
	return (
		<div
			className={`flex flex-col overflow-hidden rounded-md shadow-sm ${
				imgaePositon === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
			}`}>
			<img src={image} alt="Sedan" className="" />
			<div className="flex flex-col justify-center flex-1 p-6">
				<span className="inline-block text-black font-body text-base font-medium tracking-wider mb-2">
					Vehciles
				</span>
				<Divider />
				<h3 className="text-3xl font-semibold font-header">{title}</h3>
				<p className="my-6 font-body text-base tracking-wider leading-relaxed text-black font-normal">
					{description}
				</p>
				<button
					type="button"
					className="self-start px-4 py-2 mr-4 text-white bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80">
					Go to vehicle
				</button>
			</div>
		</div>
	);
}

Vehicle.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	imgaePositon: PropTypes.oneOf(["right", "left"]).isRequired,
};

export default Vehicle;
