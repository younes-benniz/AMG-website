import amgVideo from "../../assets/amg.mp4";
import Divider from "../Divider";
import videoPoster from "../../assets/video-poster.png";

function VideoSection() {
	return (
		<section className="container py-20 px-2 mx-auto">
			<div className="sm:px-5">
				<h4 className="inline-block text-black font-body text-base font-medium tracking-wider mb-3">
					Exclusive New vehicle
				</h4>
				<Divider />
			</div>

			<div className="flex sm:flex-nowrap flex-wrap-reverse justify-between gap-4">
				<div className="sm:w-1/3">
					<div className="px-5 flex flex-col gap-4">
						<h1 className="text-black font-header text-3xl uppercase text-center sm:text-left">
							the new Mercedes-AMG GLC SUV
						</h1>
						<p className="font-body text-base tracking-wider leading-relaxed text-black text-center sm:text-left">
							Everything, except compromises: in an exclusive, digital Private Lounge
							presentation, get a personal overview of the extraordinary highlights of
							this vehicle, directly from our product manager. Register now or log in
							with your Mercedes me ID to see the video and comment.
						</p>
						<button
							href="#"
							className="px-4 py-2 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80">
							Get one
						</button>
					</div>
				</div>
				<div className="aspect-video sm:w-2/3">
					<video
						className="w-full h-full rounded-lg"
						poster={videoPoster}
						preload="metadata"
						autoPlay
						loop
						muted>
						<source src={amgVideo} type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	);
}

export default VideoSection;
