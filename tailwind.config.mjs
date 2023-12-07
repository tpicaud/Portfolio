/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				multicolor: 'linear-gradient(89.81deg, #9845e8 -1.72%, #33d2ff 54.05%, #dd5789 99.78%)',
				dark: "#111111",
				light: "#FFFFFF",
				blue: "#33d2ff",
				gray: "#C4C4C4",
				"dark-gray": "#1A1A1A",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				outfit: ["Outfit", "sans-serif"],
			},
		},
	},
	plugins: [],
}
