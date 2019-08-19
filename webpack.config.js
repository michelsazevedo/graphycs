const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "index.js"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /.(css|scss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: path.join(__dirname, "dist", "fonts")
            }
          }
        ]
      },
			{
				test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[path][name]-[hash:8].[ext]"
						}
					}
				]
			}
		]
  },
  devServer: {
    contentBase: './dist'
  },
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(__dirname, "src", "index.html")
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
}
