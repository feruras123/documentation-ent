/** @format */

const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");

const mode = process.env.ENV_MODE || "development";
const isProduction = mode !== "development";
const styleLoader = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const devPlugins = [
	new Dotenv(),
	new InterpolateHtmlPlugin({ PUBLIC_URL: "" }),
];
const prodPlugin = [
	new Dotenv({
		systemvars: true,
	}),
	new CompressionPlugin({ algorithm: "gzip" }),
	new webpack.DefinePlugin({
		"process.env.ENV_MODE": JSON.stringify(process.env.ENV_MODE),
		"process.env.API_BASE_URL": JSON.stringify(process.env.API_BASE_URL),
	}),
	new CompressionPlugin({ algorithm: "gzip" }),
];

module.exports = {
	mode,
	entry: path.resolve(__dirname, "src/index.jsx"),
	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
				include: path.resolve(__dirname, "src"),
			},

			{
				test: /\.(sa|s?c)ss$/,
				use: [styleLoader, "css-loader", "sass-loader"],
			},
			{
				test: /\.svg/,
				loader: "svg-url-loader",
				options: {
					iesafe: true,
				},
			},

			{
				test: /\.(woff2?|eot|ttf|jpe?g|png|gif)$/,
				type: "asset/resource",
				include: path.join(__dirname, "src/assets"),
				generator: {
					filename: "assets/[name]-[contenthash][ext]",
				},
			},
		],
	},
	target: "web",
	performance: {
		maxAssetSize: 1000000,
	},
	devtool: "inline-source-map",
	resolve: {
		extensions: [".js", ".jsx", ".scss"],
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@router": path.resolve(__dirname, "src/router"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@reduxes": path.resolve(__dirname, "src/reduxes"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@graphql": path.resolve(__dirname, "src/graphql"),
		},
		fallback: {
			process: require.resolve("process/browser.js"),
		},
	},
	output: {
		publicPath: "/",
		path: path.resolve(__dirname, "./build"),
		filename: "bundle.js",
	},
	watchOptions: {
		poll: 1000,
	},
	devServer: {
		static: path.resolve(__dirname, "public"),
		hot: true,
		host: "0.0.0.0",
		compress: true,
		devMiddleware: {
			stats: {
				chunks: false,
				modules: false,
				colors: true,
				assets: false,
				moduleAssets: false,
			},
		},
		historyApiFallback: true,
		port: 3005,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new MiniCssExtractPlugin({ 
			linkType: "text/css" 
		}),
		new webpack.ProvidePlugin({
			process: "process/browser.js",
		}),
		...(isProduction ? prodPlugin : devPlugins),
	],
};
