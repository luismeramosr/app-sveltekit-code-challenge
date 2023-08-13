module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/stwui/**/*.{svelte,js,ts,html}'],
	plugins: [require('@tailwindcss/forms'), require('stwui/plugin')],
	'headwind.runOnSave': true,
	theme: {
		extend: {}
	},
	stwui: {
		themes: ['light', 'dark']
	}
};