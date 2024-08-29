import express from 'express';
import { initDatabase } from './database/database';
// import bookRouter from '../routers/bookRouter';
import cors from 'cors';
import { Paths } from '../interfaces/paths.interface';
import { BookController } from '../controllers/book.controller';
import { BookService } from '../services/book.service';
import { BookRepository } from '../repository/book.repository';

export class Server {
  private readonly booksController : BookController;
  private readonly bookService : BookService;
  private readonly bookRepository : BookRepository;
  private app = express();
  private port : any;
  private paths : Paths;
  constructor(
    
  ){
    this.bookRepository = new BookRepository();
    this.bookService = new BookService(this.bookRepository);
    this.booksController = new BookController(this.bookService);
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
    this.booksController.routes(this.paths.books,this.app);
    // this.app.use(this.paths.books, bookRouter);
  }

  listen(){
    this.app.listen(this.port,() => {
      console.log(`Server is running in port ${this.port}`);
    })
  }
}