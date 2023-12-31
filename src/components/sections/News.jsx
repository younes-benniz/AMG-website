import news1 from "../../assets/news_image_1.jpeg";
import news2 from "../../assets/news_image_2.jpeg";
import news3 from "../../assets/news_image_3.jpeg";
import Divider from "../Divider";
import coffe from "../../assets/coffe.jpeg";
import NewsCard from "../NewsCard";
import LazyImage from "../LazyImage";
import { motion } from "framer-motion";

function News() {
	return (
		<section id="news" className="container mx-auto py-10 px-4">
			<h1 className="text-5xl font-header tracking-wide text-black mb-6">News</h1>
			<div className="flex flex-wrap gap-5 pb-10 w-full">
				<div className="sm:basis-[45%]">
					<LazyImage
						src={coffe}
						alt="coffe-machine"
						className="h-auto max-w-full"
						hash="U7GIlw00~p-Txatl9FxtI9-;E1t700NG-;_N"
					/>
				</div>
				<div className="flex flex-col sm:basis-2/5">
					<motion.span
						className="text-base font-body font-tight mb-3 tracking-wider leading-relaxed"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6 }}>
						Top News
					</motion.span>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.7 }}>
						<Divider />
					</motion.div>
					<motion.h1
						className="text-2xl font-header tracking-wider font-medium mb-3"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8 }}>
						AMG x ECM: Exclusively in the AMG Private Lounge
					</motion.h1>
					<motion.p
						className="font-body text-base tracking-wider leading-relaxed mb-5"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.9 }}>
						Classic elegance combined with modern design elements: The special limited
						edition from AMG and ECM is a genuine highlight for espresso lovers with
						high demands when it comes to performance.
					</motion.p>
					<motion.button
						href="#"
						className="px-4 py-2 mr-4 text-white uppercase bg-brightOrange border-2 border-transparent rounded-lg text-md hover:semiboldbg-brightOrange/80"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 1 }}>
						Read more
					</motion.button>
				</div>
			</div>
			<div className="grid sm:grid-cols-3 grid-cols-1 gap-10 lg:gap-4">
				<motion.div
					initial={{ y: 200 }}
					whileInView={{ y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}>
					<NewsCard title="Betty Taubes AMG Winter Experience - Bucket List Challenge">
						<LazyImage
							src={news3}
							alt="Girl-with-mercedes"
							className="object-cover w-full rounded-t-md h-full"
							hash="LECj%@^,?w.S#i%fI9I9$oJ#9FH@"
						/>
					</NewsCard>
				</motion.div>
				<motion.div
					initial={{ y: 200 }}
					whileInView={{ y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8 }}>
					<NewsCard title="New Appointments in Top Management at Mercedes-Benz">
						<LazyImage
							src={news1}
							alt="car-brand"
							className="object-cover w-full rounded-t-md h-full"
							hash="U25ONf004n~qkCxa4n-;WBRj-;WB00xu~q4n"
						/>
					</NewsCard>
				</motion.div>
				<motion.div
					initial={{ y: 200 }}
					whileInView={{ y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 1 }}>
					<NewsCard title="The new AMG Private Lounge Collection">
						<LazyImage
							src={news2}
							alt="boy-and-girl"
							className="object-cover w-full rounded-t-md h-full"
							hash="UECj%@^,?w.S#i%fI9I9$oJ#9FH@ko%4xaac"
						/>
					</NewsCard>
				</motion.div>
			</div>
		</section>
	);
}

export default News;
