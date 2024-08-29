import { Application, Request, Response } from 'express';
import { BookService} from '../services/book.service';
import { httpResponse } from '../utils/httpResponses';
import { bodyValidator } from '../middlewares/bodyValidator';
import { books } from '../config/database/data';

export class BookController{
  constructor(
    private readonly bookService : BookService
  ){}

  async createBook(req : Request, res : Response){
    try {
      const bookBody = req.body;
      await this.bookService.createBookService(bookBody);
      return httpResponse(201, 'Book created !!', true, res);
    } catch (error : any) {
      console.log(error.message);
      return httpResponse(500, 'Server Error :(', false, res);
    }
  }

  async findBooks(req : Request, res : Response){
    try {
      const books = await this.bookService.findBooksService();
      return httpResponse(200, 'list of books successfully obtained.', true, res, books);
    } catch (error : any) {
      console.log(error.message);
      return httpResponse(500, 'Server Error :(', false, res);
    }
  }

  async findBookById(req : Request, res : Response){
    try {
      const {id} = req.params;
      const book = await this.bookService.findBookbyIdService(id);
      if(!book) return httpResponse(400, 'this book not exist', true, res);
      return httpResponse(200, 'Book found', true, res, book);
    } catch (error : any) {
      console.log(error.message);
      return httpResponse(500, `Server Error :( ${error.message}`, false, res);
    }
  }

  async updateBook(req : Request, res : Response){
    try {
      const {id} = req.params;
      const bookBody = req.body;
      const book = await this.bookService.findBookbyIdService(id);
      if(!book) return httpResponse(404, 'this book not exist', true, res);
      const updateBook = await this.bookService.updateBookService(id, bookBody);
      return httpResponse(200, 'Book update', true, res, updateBook);
    } catch (error : any) {
      console.log(error.message);
      return httpResponse(500, `Server Error :( ${error.message}`, false, res);
    }
  }

  async deleteBook(req : Request, res : Response){
    try {
      const {id} = req.params;
      const book = await this.bookService.findBookbyIdService(id);
      if(!book) return httpResponse(403, 'this book not exist', true, res);
      await this.bookService.deleteBookService(id);
      return httpResponse(200, 'Book delete', true, res);
    } catch (error : any) {
      console.log(error.message);
      return httpResponse(500, `Server Error :( ${error.message}`, false, res);
    }
  }

  async executeSeed(req: Request, res : Response){
    try {
      const booksSeed = await this.bookService.executeSeedService(books);
      return httpResponse(201, 'Seed execute', true, res, booksSeed)
    } catch (error : any) {
      console.log(error.message);
      return httpResponse(500, `Server Error :( ${error.message}`, false, res);
    }
  }

  routes(uriBase : string, app: Application){
    app.post(`${uriBase}/`, [bodyValidator], this.createBook.bind(this));
    app.post(`${uriBase}/seed`, this.executeSeed.bind(this));
    app.get(`${uriBase}/`, this.findBooks.bind(this));
    app.get(`${uriBase}/:id`, this.findBookById.bind(this));
    app.patch(`${uriBase}/:id`, [bodyValidator], this.updateBook.bind(this));
    app.delete(`${uriBase}/:id`, this.deleteBook.bind(this));
  }
  
}
