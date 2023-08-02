import news1 from "../assets/news1.jpeg";
import news2 from "../assets/news2.jpeg";
import news3 from "../assets/news3.jpeg";
import Divider from "./Divider";
import coffe from "../assets/coffe.jpeg";
import NewsCard from "./NewsCard";

function News() {
	return (
		<section className="container mx-auto py-10 px-4">
			<h1 className="text-5xl font-header tracking-wide text-black mb-6">News</h1>
			<div className="flex flex-wrap gap-5 pb-10 w-full">
				<div className="sm:basis-[45%]">
					<img src={coffe} className="h-auto max-w-full" alt="..." />
				</div>
				<div className="flex flex-col sm:basis-2/5">
					<span className="text-base font-body font-tight mb-3 tracking-wider leading-relaxed">
						Top News
					</span>
					<Divider />
					<h1 className="text-2xl font-header tracking-wider font-medium mb-3">
						AMG x ECM: Exclusively in the AMG Private Lounge
					</h1>
					<p className="font-body text-base tracking-wider leading-relaxed mb-5">
						Classic elegance combined with modern design elements: The special limited
						edition from AMG and ECM is a genuine highlight for espresso lovers with
						high demands when it comes to performance.
					</p>
					<button
						href="#"
						className="px-4 py-2 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:semiboldbg-brightOrange/80">
						Read more
					</button>
				</div>
			</div>
			<div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
				<NewsCard
					image={news3}
					title="Betty Taubes AMG Winter Experience - Bucket List Challenge"
				/>
				<NewsCard
					image={news1}
					title="New Appointments in Top Management at Mercedes-Benz"
				/>
				<NewsCard image={news2} title="The new AMG Private Lounge Collection" />
			</div>
		</section>
	);
}

export default News;
