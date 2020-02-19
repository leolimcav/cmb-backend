import { config } from 'dotenv';
import 'regenerator-runtime';

import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database/index';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.set('port', process.env.PORT || 3333);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
