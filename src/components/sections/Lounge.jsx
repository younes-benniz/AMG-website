import OverlayedImage from "../OverlayedImage";
import race from "../../assets/race.jpeg";

function Lounge() {
	return (
		<section className="bg-lightSilver/50 lg:py-4 py-1">
			<div className="container relative mx-auto lg:my-16">
				<OverlayedImage
					image={race}
					header="AMG private lounge"
					title="join the exclusive community"
					description="The AMG Private Lounge is the exclusive port of call for all Mercedes-AMG
				drivers and brand enthusiasts. You get access to exclusive contents and
				stories about Mercedes-AMG. Get on board!"
				/>
			</div>
		</section>
	);
}
export default Lounge;
