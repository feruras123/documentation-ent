/** @format */

module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./src"],
				alias: {
					"@components": "./src/components",
					"@router": "./src/router",
					"@pages": "./src/pages",
					"@utils": "./src/utils",
					"@reduxes": "./src/reduxes",
					"@assets": "./src/assets",
					"@graphql": "./src/graphql",
				},
			},
		],
	],
};
