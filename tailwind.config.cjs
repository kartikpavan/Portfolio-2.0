/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				navbarBg: "#1d1e25",
				primary: "#121316",
				textBase: "#8f9091",
				bodybg: "#121316",
			},
		},
	},
	plugins: [],
};
