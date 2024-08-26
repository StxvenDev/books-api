import {Router} from 'express';
import { bodyValidator } from '../middlewares/bodyValidator';
import { createBook, deleteBook, findBookById, findBooks, updateBook } from '../controllers/book.controller';

const bookRouter = Router();

bookRouter.post('/', [bodyValidator], createBook);
bookRouter.get('/', findBooks);
bookRouter.get('/:id', findBookById);
bookRouter.patch('/:id', [bodyValidator], updateBook);
bookRouter.delete('/:id', deleteBook);
export default bookRouter;
