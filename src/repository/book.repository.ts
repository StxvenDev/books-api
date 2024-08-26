import { CreateBookInterface, UpdateBookInterface } from "../interfaces/book.interface";
import Book from '../models/book.model';

export class BookRepository{
  constructor (
    private readonly bookModel = Book,
  )  {}

  async createBookRepository(bookBody : CreateBookInterface){
    await this.bookModel.create(bookBody);
  }

  async findBooksRepository(){
    return await this.bookModel.find({});
  }

  async findBookByIdRepository(bookId : string){
    return await this.bookModel.findById(bookId);
  }

  async updateBookRepository(bookId : string, bookBody : UpdateBookInterface){
    return await Book.findByIdAndUpdate(bookId, bookBody, {new : true});
  }

  async deleteBookRepository(bookId : string){
    return await Book.findByIdAndDelete(bookId);
  }
}



{
  // export const createBookRepository = async (bookBody : CreateBookInterface) => {
    //   await Book.create(bookBody);
    // }
    
    // export const findBooksRepository = async () => {
    //   return await Book.find({});
    // }
    
    // export const findBookByIdRepository = async (bookId : string) => {
      //   return await Book.findById(bookId);
      // }
      
    // export const updateBookRepository = async (bookId : string, bookBody : UpdateBookInterface) => {
      //   return await Book.findByIdAndUpdate(bookId, bookBody, {new : true});
      // }
      
    // export const deleteBookRepository = async (bookId : string) => {
    //   return await Book.findByIdAndDelete(bookId);
    // }
      }
  