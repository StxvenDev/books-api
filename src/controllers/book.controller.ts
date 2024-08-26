import { Request, Response } from 'express';
import { createBookService, deleteBookService, findBookbyIdService, findBooksService, updateBookService } from '../services/book.service';
import { httpResponse } from '../utils/httpResponses';

export const createBook = async (req : Request, res: Response) => {
  try {
    const bookBody = req.body;
    await createBookService(bookBody);
    return httpResponse(201, 'Book created !!', true, res);
  } catch (error : any) {
    console.log(error.message);
    return httpResponse(500, 'Server Error :(', false, res);
  }
}

export const findBooks = async (req: Request, res : Response) => {
  try {
    const books = await findBooksService();
    return httpResponse(200, 'list of books successfully obtained.', true, res, books);
  } catch (error : any) {
    console.log(error.message);
    return httpResponse(500, 'Server Error :(', false, res);
  }
}

export const findBookById = async (req : Request, res : Response) => {
  try {
    const {id} = req.params;
    const book = await findBookbyIdService(id);
    if(!book) return httpResponse(400, 'this book not exist', true, res);
    return httpResponse(200, 'Book found', true, res, book);
  } catch (error : any) {
    console.log(error.message);
    return httpResponse(500, 'Server Error :(', false, res);
  }
}

export const updateBook = async (req : Request, res : Response) => {
  try {
    const {id} = req.params;
    const bookBody = req.body;
    const book = await findBookbyIdService(id);
    if(!book) return httpResponse(400, 'this book not exist', true, res);
    const updateBook = await updateBookService(id, bookBody);
    return httpResponse(200, 'Book update', true, res, updateBook);
  } catch (error : any) {
    console.log(error.message);
    return httpResponse(500, 'Server Error :(', false, res);
  }
}

export const deleteBook = async (req : Request, res : Response) => {
  try {
    const {id} = req.params;
    const book = await findBookbyIdService(id);
    if(!book) return httpResponse(403, 'this book not exist', true, res);
    await deleteBookService(id);
    return httpResponse(200, 'Book delete', true, res);
  } catch (error : any) {
    console.log(error.message);
    return httpResponse(500, 'Server Error :(', false, res);
  }
}