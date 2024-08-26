import express from 'express';
import { initDatabase } from './database/database';
import bookRouter from '../routers/bookRouter';
import cors from 'cors';
import { Paths } from '../interfaces/paths.interface';

export class Server {
  private app = express();
  private port : any;
  private paths : Paths;
  constructor(){
    this.port = process.env.PORT;
    this.database();
    this.paths = {
      books : '/books'
    }
    this.middlewares();
    this.router();
  }

  async database(){
    await initDatabase();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded());
  }

  router() {
    this.app.use(this.paths.books, bookRouter);
  }

  listen(){
    this.app.listen(this.port,() => {
      console.log(`Server is running in port ${this.port}`);
    })
  }
}