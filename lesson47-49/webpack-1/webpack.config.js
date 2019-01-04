const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSplugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin =require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require('path');

module.exports ={
    entry: {
    app: './src/index.js',
    },
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist',
    hot: true
    },
	module: {
		rules: [
		{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
       },
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              outputPath: 'images'
            }
          }
        ]
      },
       {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              outputPath: 'css'
            }
          },
          "css-loader"
         ]
       },
       {
        test: /\.(html)$/,
        use: [
           'html-loader'
        ]
      }
		]
	},
  plugins: [
  new UglifyJSplugin(),
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
  	title: 'hello world',
  	template: "./src/index.html"
  }),
  new MiniCssExtractPlugin({
    filename:'[name].css'
  }),
  new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development'	
}