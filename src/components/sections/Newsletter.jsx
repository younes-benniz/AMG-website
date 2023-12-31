import { motion } from "framer-motion";

function Newsletter() {
	return (
		<section id="contact" className="w-full bg-lightSilver">
			<div className="mx-auto py-16 px-4 sm:px-0 text-center">
				<motion.h2
					className="font-header mb-4 text-3xl tracking-wider font-medium text-gray-900 sm:text-4xl"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4 }}>
					UPDATES FROM AMG
				</motion.h2>
				<motion.p
					className="font-body mx-auto max-w-2xl font-light text-gray-900 mb-8 sm:text-xl"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}>
					Unleash the speed and luxury of AMG with our Accelerate Newsletter - your
					ultimate source for high-performance automotive updates and insider exclusives.
				</motion.p>
				<form action="#">
					<div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
						<motion.div
							className="relative w-full"
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6 }}>
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
								className="font-body block p-3 pl-10 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500"
								placeholder="Enter your email"
								type="email"
								id="email"
								required={true}
							/>
						</motion.div>
						<div>
							<button
								type="submit"
								className="py-3 px-5 w-full text-sm font-medium text-center text-white bg-brightOrange rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
								Subscribe
							</button>
						</div>
					</div>
					<motion.div
						className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer font-body sm:pl-4"
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8 }}>
						We care about the protection of your data.
						<a
							href="#"
							className="font-medium text-primary-600 text-brightOrange hover:underline">
							Read our Privacy Policy
						</a>
						.
					</motion.div>
				</form>
			</div>
		</section>
	);
}

export default Newsletter;
