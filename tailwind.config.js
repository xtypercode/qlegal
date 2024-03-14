/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#F4EEEC",
					200: "#ECE0DC",
					300: "#DECAC3",
					400: "#C9ABA0",
					500: "#B48D7F",
					600: "#A57F71",
					700: "#835F52",
					800: "#6E5146",
					900: "#5D473F",
					950: "#31231E",
				},
				secondary: {
					100: "#EDEEF1",
					200: "#D7DAE0",
					300: "#B3BAC6",
					400: "#8A95A6",
					500: "#6C798B",
					600: "#566073",
					700: "#474F5E",
					800: "#3D444F",
					900: "#363B44",
					950: "#24262D",
				},
			},
		},
	},
	plugins: [flowbitePlugin],
};
