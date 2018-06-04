import express from 'express';
// import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import config from './config';

// initializing package
const server = express();


// setting
// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json

// middlewares
server.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
server.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

//
server.get('/api', (req, res) => {
  res.status(200).json({ api: 'Works!' });
});

// start the server
server.listen(config.port, () => {
  console.log(`Server running on localhost:${config.port}`);
});
