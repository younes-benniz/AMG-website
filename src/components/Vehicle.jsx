import Divider from "./Divider";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Vehicle({ children, title, description, imagePositon }) {
	return (
		<div
			className={`flex flex-col overflow-hidden rounded-md shadow-sm ${
				imagePositon === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
			}`}>
			<div className="basi1/2">{children}</div>
			<motion.div
				className="flex flex-col justify-center flex-1 sm:p-6 py-6"
				initial={imagePositon == "right" ? { x: -500 } : { x: 500 }}
				whileInView={{ x: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.5, type: "spring", stiffness: 200 }}>
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
			</motion.div>
		</div>
	);
}

Vehicle.propTypes = {
	children: PropTypes.element,
	title: PropTypes.string,
	description: PropTypes.string,
	imagePositon: PropTypes.oneOf(["right", "left"]).isRequired,
};

export default Vehicle;
