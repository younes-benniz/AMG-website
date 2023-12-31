function SearchInput() {
	return (
		<div className="relative lg:w-48 w-36 xl:block hidden">
			<label htmlFor="Search" className="sr-only">
				Search
			</label>
			<input
				type="text"
				id="Search"
				placeholder="Search"
				className="w-full rounded-full border border-gray-200 focus:outline-gray-300 lg:py-2.5 lg:px-4 lg:pe-10 shadow-sm text-sm py-1 px-2"
			/>
			<span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
				<button type="button" className="text-gray-600 hover:text-gray-700">
					<span className="sr-only">Search</span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-4 w-4">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</button>
			</span>
		</div>
	);
}

export default SearchInput;
