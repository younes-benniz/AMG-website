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

function Newsletter() {
	return (
		<section className="bg-white">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md sm:text-center">
					<h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl ">
						Sign up for our newsletter
					</h2>
					<p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl ">
						Stay up to date with the roadmap progress, announcements and exclusive
						discounts feel free to sign up with your email.
					</p>
					<form action="#">
						<div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
							<div className="relative w-full">
								<label
									htmlFor="email"
									className="hidden mb-2 text-sm font-medium text-gray-900">
									Email address
								</label>
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg
										className="w-5 h-5 text-gray-500 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
								</div>
								<input
									className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
									placeholder="Enter your email"
									type="email"
									id="email"
									required=""
								/>
							</div>
							<div>
								<button
									type="submit"
									className="py-3 px-5 w-full text-sm font-medium text-center text-white bg-brightOrange rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
									Subscribe
								</button>
							</div>
						</div>
						<div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">
							We care about the protection of your data.
							<a
								href="#"
								className="font-medium text-primary-600 text-brightOrange hover:underline">
								Read our Privacy Policy
							</a>
							.
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="px-4 divide-y bg-gray-800 text-gray-100">
			<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/3">
					<a
						rel="noopener noreferrer"
						href="#"
						className="flex justify-center space-x-3 lg:justify-start">
						<div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								fill="currentColor"
								className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900">
								<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
							</svg>
						</div>
						<span className="self-center text-2xl font-semibold">Brand name</span>
					</a>
				</div>
				<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
					<div className="space-y-3">
						<h3 className="tracki uppercase text-gray-50">Product</h3>
						<ul className="space-y-1">
							<li>
								<a rel="noopener noreferrer" href="#">
									Features
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Integrations
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Pricing
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="tracki uppercase text-gray-50">Company</h3>
						<ul className="space-y-1">
							<li>
								<a rel="noopener noreferrer" href="#">
									Privacy
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="uppercase text-gray-50">Developers</h3>
						<ul className="space-y-1">
							<li>
								<a rel="noopener noreferrer" href="#">
									Public API
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Documentation
								</a>
							</li>
							<li>
								<a rel="noopener noreferrer" href="#">
									Guides
								</a>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<div className="uppercase text-gray-50">Social media</div>
						<div className="flex justify-start space-x-3">
							<a
								rel="noopener noreferrer"
								href="#"
								title="Facebook"
								className="flex items-center p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 32 32"
									className="w-5 h-5 fill-current">
									<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
								</svg>
							</a>
							<a
								rel="noopener noreferrer"
								href="#"
								title="Twitter"
								className="flex items-center p-1">
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 fill-current">
									<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
								</svg>
							</a>
							<a
								rel="noopener noreferrer"
								href="#"
								title="Instagram"
								className="flex items-center p-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									fill="currentColor"
									className="w-5 h-5 fill-current">
									<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="py-6 text-sm text-center text-gray-400">
				© 1968 Company Co. All rights reserved.
			</div>
		</footer>
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
			<Newsletter />
			<Footer />
			<button
				id="to-top-button"
				// onClick="goToTop()"
				// title="Go To Top"
				className="fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-brightOrange text-white text-3xl font-bold">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-10 h-10 mx-auto">
					<g id="SVGRepo_bgCarrier" strokeWidth={0} />
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<path
							opacity="0.5"
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 20.75C12.4142 20.75 12.75 20.4142 12.75 20L12.75 10.75L11.25 10.75L11.25 20C11.25 20.4142 11.5858 20.75 12 20.75Z"
							fill="#1C274C"
						/>
						<path
							d="M6.00002 10.75C5.69667 10.75 5.4232 10.5673 5.30711 10.287C5.19103 10.0068 5.25519 9.68417 5.46969 9.46967L11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5304 3.46967L18.5304 9.46967C18.7449 9.68417 18.809 10.0068 18.6929 10.287C18.5768 10.5673 18.3034 10.75 18 10.75L6.00002 10.75Z"
							fill="#1C274C"
						/>
					</g>
				</svg>
			</button>
		</div>
	);
}

export default App;
