import PropTypes from "prop-types";

function NewsCard({ children, title }) {
	return (
		<div className="rounded-md text-gray-100">
			<div className="h-56">{children}</div>
			<div className="bg-lightSilver/50 shadow-xl">
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
		</div>
	);
}

NewsCard.propTypes = {
	children: PropTypes.element,
	image: PropTypes.string,
	title: PropTypes.string,
};

export default NewsCard;
