import PropTypes from "prop-types";
import Divider from "./Divider";
import LazyImage from "./LazyImage";
import { motion } from "framer-motion";

function OverlayedImage({ image, title, description, header }) {
	return (
		<>
			<div className="p-5 lg:p-0 max-w-[1020px] h-full text-center mx-auto">
				<LazyImage
					src={image}
					className="w-full h-full rounded-lg"
					hash="U8E{e3004oE200?wRjRO-CInxu%M^+InInxv"
					alt="race"
					animate={false}
				/>
			</div>

			<div className="lg:absolute inset-0 z-10 block w-full lg:w-4/5 mx-auto lg:overflow-hidden p-5 lg:p-0">
				<motion.div
					className="absolute hidden lg:block bg-black/70 h-full w-[560px] left-[150px] origin-top transform-gpu lg:-skew-x-[36deg]"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}></motion.div>
				<div className="lg:absolute lg:right-0 lg:top-0 lg:left-[120px] w-full lg:w-[350px] z-10 lg:text-white text-black">
					<motion.h4
						className="lg:mt-14 text-base font-body mb-5 font-medium tracking-wider"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}>
						{header}
					</motion.h4>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}>
						<Divider />
					</motion.div>
					<motion.h1
						className="text-4xl tracking-wider font-header mt-10 uppercase mb-5 font-bold"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}>
						{title}
					</motion.h1>
					<motion.p
						className="text-base font-body font-medium tracking-wider leading-relaxed mb-5"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}>
						{description}
					</motion.p>
					<motion.button
						href="#"
						className="px-4 py-2 mr-4  uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.1 }}>
						Learn more
					</motion.button>
				</div>
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
