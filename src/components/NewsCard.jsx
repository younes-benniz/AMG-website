import PropTypes from "prop-types";

function NewsCard({ image, title }) {
	return (
		<div className="rounded-md shadow-md text-gray-100 ">
			<img
				src={image}
				loading="lazy"
				alt=""
				className="object-cover w-full rounded-t-md h-auto"
			/>
			<div className="flex flex-col p-6 space-y-8">
				<div className="space-y-2">
					<h2 className="font-header text-2xl tracking-wide text-center leading-normal font-medium text-black h-20">
						{title}
					</h2>
				</div>
				<button
					type="button"
					className="w-full p-3 font-semibold px-4 py-2 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80">
					Read more
				</button>
			</div>
		</div>
	);
}

NewsCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
};

export default NewsCard;
