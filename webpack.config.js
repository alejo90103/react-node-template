import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import liveReloadPlugin from 'webpack-livereload-plugin';

export default{
  entry: './src/client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$\.svg$/,
        loader: 'file-loader'  // <-- retain original file name,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?[name].[ext]'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/client/index.html',
      favicon: './src/client/favicon.ico'
    }),
    new liveReloadPlugin()
  ]
}
