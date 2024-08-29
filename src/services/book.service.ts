import { isValidObjectId } from "mongoose";
import { IBook } from '../interfaces/book.interface';
import { BookRepository} from "../repository/book.repository"

export class BookService{
  constructor(
    private readonly bookRepository : BookRepository
  ){}

  async createBookService(bookBody : IBook){
    await this.bookRepository.createBookRepository(bookBody);
  }

  async findBooksService(){
    return await this.bookRepository.findBooksRepository();
  }

  async findBookbyIdService(bookId : string){
    if(!isValidObjectId(bookId)) throw new Error('This is not a valid mongoID');
    return await this.bookRepository.findBookByIdRepository(bookId);
  }

  async updateBookService(bookId : string, bookBody : Partial<IBook>){
    return await this.bookRepository.updateBookRepository(bookId, bookBody);
  }

  async deleteBookService(bookId : string){
    await this.bookRepository.deleteBookRepository(bookId);
  }

  async executeSeedService(books : IBook []){
    return await this.bookRepository.executeSeedRepository(books);
  }
}