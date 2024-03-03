import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'nebula-hollow': ['Nebula-Hollow', 'sans-serif'],
				'nebula-regular': ['Nebula-Regular', 'sans-serif'],
			},
			content: {
				hyphen: "'\u2014'",
				quote: "'\u201C'",
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'70%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
