import { isValidObjectId } from "mongoose";
import { CreateBookInterface, UpdateBookInterface } from "../interfaces/book.interface";
import { createBookRepository, deleteBookRepository, findBookByIdRepository, findBooksRepository, updateBookRepository } from "../repository/book.repository"

export const createBookService = async (bookBody : CreateBookInterface) => {
  // const {title, isbn} = bookBody;
  await createBookRepository(bookBody);
}

export const findBooksService = async () => {
  return await findBooksRepository();
}

export const findBookbyIdService = async (bookId : string) => {
  if(!isValidObjectId(bookId)) throw new Error('This is not a valid mongoID');
  return await findBookByIdRepository(bookId);
}

export const updateBookService = async (bookId : string, bookBody : UpdateBookInterface) => {
  return await updateBookRepository(bookId, bookBody);
}

export const deleteBookService = async (bookId : string) => {
  await deleteBookRepository(bookId);
}