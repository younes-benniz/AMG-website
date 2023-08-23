import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/experience/image_1.jpeg";
import image2 from "../../assets/experience/image_2.jpeg";
import image3 from "../../assets/experience/image_3.jpeg";
import image4 from "../../assets/experience/image_4.jpeg";
import image5 from "../../assets/experience/image_5.jpeg";
import image6 from "../../assets/experience/image_6.jpeg";
import Divider from "../Divider";
import LazyImage from "../LazyImage";

function Experience() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 992 },
			items: 3,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 864, min: 464 },
			items: 3,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 319 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	const items = [
		{
			image: image1,
			title: "Step into the spotlight",
			alt: "guy-dancing",
			hash: "eKF;.|xa1FS|$4vM%MK0W.w_.lt7-Co2R*0xo|];s;S1.SkCiwozWB",
		},
		{
			image: image2,
			title: "INSIDE AMG - All Episodes",
			alt: "two-guys-with-amg",
			hash: "eGHV6r-;4nWA9F~qRjWBa|t7ozxvxuWX%N.9M{xvogIU9FRjM{jZtR",
		},
		{
			image: image3,
			title: "Mercedes-AMG SL Behind the Scenes Interview #1: The star is reborn feat. Phoebe L. Thompson",
			alt: "girl",
			hash: "eIHf9s9Zo#t7IU_Nx]o~kDad9ZNGIURjt7%gM|Rjf6t7Sh%2ayfkof",
		},
		{
			image: image4,
			title: "Mercedes-AMG SL Behind the Scenes Interview #2: The star is reborn feat. Penélope Guerrero",
			alt: "girl-in-desert-with-amg",
			hash: "ekK^:7^*NFX8RQ~pxus:oza#?vNyVsjuayNdRjn%WBoft8aJoebbn$",
		},
		{
			image: image5,
			title: "Electrifying Power: Susie Wolff in the Mercedes-AMG EQS 53 4MATIC+",
			alt: "businesswoman-with-amg",
			hash: "ewHoqQRPn}WAWC?wRPjrfQWVNIf5kDofj[IUj[oeazflWCj[RjWVWC",
		},
		{
			image: image6,
			title: "History of Mercedes SL",
			alt: "amg-classic-collection",
			hash: "eAB3+=~qD%9F9F-n?HNGD*Io4TjEofIUWC%Mt7xuozRP%NRkRj%2t7",
		},
	];

	return (
		<section className="realtive container mx-auto py-16 px-4">
			<Divider />
			<h1 className="text-4xl font-header font-medium mb-8">
				EXPERIENCE THE FASCINATION OF AMG
			</h1>
			<Carousel
				responsive={responsive}
				swipeable={true}
				draggable={false}
				showDots={false}
				arrows={false}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				itemClass="sm:px-4">
				{items.map((item, index) => (
					<div className="w-full h-full" key={index}>
						<div className="h-56">
							<LazyImage
								src={item.image}
								alt={item.alt}
								className="w-full h-auto rounded-lg mb-4"
								hash={item.hash}
							/>
						</div>
						<h3 className="font-header text-3xl font-normal tracking-wide leading-relaxed text-center rounded-md shadow-lg h-48 mb-5 bg-lightSilver/10">
							{item.title}
						</h3>
					</div>
				))}
			</Carousel>
		</section>
	);
}

export default Experience;
