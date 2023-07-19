/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			header: ["Oswald", "sans-serif"],
			body: ["Raleway", "sans-serif"],
		},
		extend: {
			colors: {
				deepBlue: "#004D7F", // header, navigaton, branding elements.
				brightOrange: "#FF6600", //call-to-action buttons, highlighting special offers or booking options.
				coolGray: "#888888", //sections, providing a neutral and modern backdrop for content.
				freshGreen: "#0CCD43", // eco-friendly or hybrid vehicle labels, emphasizing sustainability or environmentally friendly options.
				lightSilver: "#D3D3D3", // Accent color for borders, dividing sections, or subtle highlights
				darkCharocoal: "#333333", // headings, titles, or important information, providing a strong contrast against lighter backgrounds.
			},
			backgroundImage: {
				"hero-image": "url('/src/assets/test.jpeg')",
			},
		},
	},
	plugins: [],
};
