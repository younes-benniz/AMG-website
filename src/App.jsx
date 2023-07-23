import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import icon from "./assets/mercedes/cars-icon.png";
import purchaseIcon from "./assets/mercedes/purchase-icon.png";
import findDelear from "./assets/mercedes/find-delear-icon.png";
import amgVideo from "./assets/amg.mp4";
import sedan from "./assets/sedan.jpeg";
import cla from "./assets/cla.jpeg";
import race from "./assets/race.jpeg";
import news1 from "./assets/news1.jpeg";
import news2 from "./assets/news2.jpeg";
import news3 from "./assets/news3.jpeg";

function Features() {
	return (
		<section className="py-16">
			<h1 className="font-header text-4xl text-center">Purchace your Next AMG easily</h1>
			<div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
					<div className="flex-shrink-0">
						<img src={icon} className="max-w-full w-full h-full" />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
						Find the AMG model that&#39;s right for you.
					</h3>
				</div>
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
					<div className="flex-shrink-0">
						<img src={purchaseIcon} />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl">
						Purchase your individual vehicle.
					</h3>
				</div>
				<div className="w-full px-4 py-4 mt-6 bg-darkCharocoal rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
					<div className="flex-shrink-0">
						<img src={findDelear} />
					</div>
					<h3 className="py-4 text-2xl font-semibold text-white sm:text-xl ">
						Find a dealer in your area.
					</h3>
				</div>
			</div>
		</section>
	);
}
function Vehicles() {
	return (
		<section className="p-4 lg:p-8 text-gray-100">
			<div className="container mx-auto space-y-12">
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
					<img src={sedan} alt="" className=" bg-gray-500 " />
					<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
						<span className="text-xs uppercase text-gray-400">
							Join, it&apos;s free
						</span>
						<h3 className="text-3xl font-bold">We&apos;re not reinventing the wheel</h3>
						<p className="my-6 text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam
							possimus quas, error esse quos.
						</p>
						<button type="button" className="self-start">
							Action
						</button>
					</div>
				</div>
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
					<img src={cla} alt="" className="bg-gray-500" />
					<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
						<span className="text-xs uppercase text-gray-400">
							Join, it&apos;s free
						</span>
						<h3 className="text-3xl font-bold">We&#39;re not reinventing the wheel</h3>
						<p className="my-6 text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam
							possimus quas, error esse quos.
						</p>
						<button type="button" className="self-start">
							Action
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

function VideoSection() {
	return (
		<section className="container py-20 px-2 mx-auto">
			<div className="flex justify-between gap-4">
				<div className="w-1/3">
					<div className="p-5 flex flex-col">
						<h4 className="text-black font-header">Exclusive New vehicle</h4>
						<h1 className="text-black font-header">THE NEW MERCEDES-AMG GLC SUV</h1>
						<p className="text-black font-body">
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
				<div className="aspect-video w-2/3">
					<video
						className="w-full h-full rounded-lg"
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

function Lounge() {
	return (
		<section className="container relative mx-auto mb-16">
			<div className="absolute inset-0 z-10 block w-4/5 mx-auto overflow-hidden">
				<div className="absolute block bg-black/70 h-full w-[560px] left-[150px] origin-top transform-gpu -skew-x-[36deg] "></div>
				<div className="absolute right-0 top-0 left-[120px] w-[300px] z-10">
					<h1 className="text-6xl font-header text-white mt-16">
						JOIN THE EXCLUSIVE COMMUNITY
					</h1>
					<p className="text-base font-body text-white">
						The AMG Private Lounge is the exclusive port of call for all Mercedes-AMG
						drivers and brand enthusiasts. You get access to exclusive contents and
						stories about Mercedes-AMG. Get on board!
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
					src={race}
					alt="lounge"
					className="max-w-[1020px] w-full text-center h-full mx-auto"
				/>
			</div>
		</section>
	);
}
import coffe from "./assets/coffe.jpeg";
function News() {
	return (
		<section className="px-5 py-10">
			<div className="container mx-auto ">
				<h1 className="text-5xl font-header text-black">News</h1>
				<div className="flex pb-10">
					<img src={coffe} alt="..." />
					<div className="flex flex-col">
						<span className="text-base">Top News</span>
						<h1 className="text-xl font-header ">
							AMG x ECM: Exclusively in the AMG Private Lounge
						</h1>
						<p className="font-body">
							Classic elegance combined with modern design elements: The special
							limited edition from AMG and ECM is a genuine highlight for espresso
							lovers with high demands when it comes to performance.
						</p>
						<button
							href="#"
							className="px-4 py-2 w-1/4 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:bg-brightOrange/80">
							Get one
						</button>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="rounded-md shadow-md bg-gray-900 text-gray-100 ">
						<img
							src={news2}
							alt=""
							className="object-cover w-full rounded-t-md h-auto bg-gray-500"
						/>
						<div className="flex flex-col justify-between p-6 space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
								<p className="text-gray-100">
									Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
									eget.
								</p>
							</div>
							<button
								type="button"
								className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-400 text-gray-900">
								Read more
							</button>
						</div>
					</div>
					<div className="rounded-md shadow-md bg-gray-900 text-gray-100 ">
						<img
							src={news1}
							alt=""
							className="object-contain w-full rounded-t-md h-auto bg-gray-500"
						/>
						<div className="flex flex-col justify-between p-6 space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
								<p className="text-gray-100">
									Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
									eget.
								</p>
							</div>
							<button
								type="button"
								className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-400 text-gray-900">
								Read more
							</button>
						</div>
					</div>
					<div className="rounded-md shadow-md bg-gray-900 text-gray-100">
						<img
							src={news3}
							alt=""
							className=" object-contain w-full rounded-t-md h-auto bg-gray-500"
						/>
						<div className="flex flex-col justify-between p-6 space-y-8">
							<div className="space-y-2">
								<h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
								<p className="text-gray-100">
									Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
									eget.
								</p>
							</div>
							<button
								type="button"
								className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-400 text-gray-900">
								Read more
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "./assets/experience/1.jpeg";
import image2 from "./assets/experience/2.jpeg";
import image3 from "./assets/experience/3.jpeg";
import image4 from "./assets/experience/4.jpeg";
import image5 from "./assets/experience/5.jpeg";
import image6 from "./assets/experience/6.jpeg";

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
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<section className="realtive container mx-auto">
			<h1 className="text-5xl font-header">Experience</h1>
			{/* <div className=""> */}
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				sliderClass="gap-6">
				{/* {[...Array(10).keys()].map((item, index) => 
						<div className="" key={index}>
							<img src={image1} className="w-full h-auto object-contain" alt="..." />
							<h3 className="text-3xl ">AMG experience</h3>
						</div>
					)} */}
				<div className="w-1-/3">
					<img src={image1} className="w-full h-auto  object-contain" alt="..." />
					<h3 className="text-3xl ">AMG experience</h3>
				</div>

				<div className="w-1-/3">
					<img src={image2} className="w-full h-auto  object-contain" alt="..." />
					<h3 className="text-3xl ">AMG experience</h3>
				</div>
				<div className="w-1-/3">
					<img src={image3} className="w-full h-auto  object-contain" alt="..." />
					<h3 className="text-3xl ">AMG experience</h3>
				</div>
				<div className="w-1-/3">
					<img src={image4} className="w-full h-auto  object-contain" alt="..." />
					<h3 className="text-3xl ">AMG experience</h3>
				</div>
				<div className="w-1-/3">
					<img src={image5} className="w-full h-auto  object-contain" alt="..." />
					<h3 className="text-3xl ">AMG experience</h3>
				</div>
				<div className="w-1-/3">
					<img src={image6} className="w-full h-auto  object-contain" alt="..." />
					<h3 className="text-3xl ">AMG experience</h3>
				</div>
			</Carousel>
			{/* </div> */}
		</section>
	);
}

function App() {
	return (
		<div className="relative">
			<Navbar />
			<Hero />
			<Features />
			<VideoSection />
			<Vehicles />
			<Lounge />
			<News />
			<Experience />
			{/* <h1 className="text-6xl">heladsfjlkadf</h1> */}
		</div>
	);
}

export default App;
