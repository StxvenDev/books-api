import { IBook } from "../interfaces/book.interface";
import Book from '../models/book.model';

export class BookRepository{
  constructor (
    private readonly bookModel = Book,
  )  {}

  async createBookRepository(bookBody : IBook){
    await this.bookModel.create(bookBody);
  }

  async findBooksRepository(){
    return await this.bookModel.find({});
  }

  async findBookByIdRepository(bookId : string){
    return await this.bookModel.findById(bookId);
  }

  async updateBookRepository(bookId : string, bookBody : Partial<IBook>){
    return await Book.findByIdAndUpdate(bookId, bookBody, {new : true});
  }

  async deleteBookRepository(bookId : string){
    return await Book.findByIdAndDelete(bookId);
  }

  async executeSeedRepository(books : IBook []){
    await Book.deleteMany();
    return await Book.insertMany(books);
  }
}

  