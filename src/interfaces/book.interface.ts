export interface CreateBookInterface {
  title: String;
  author: String;
  publicationDate: Date;
  isbn: String;
  genre: String;
}

export interface UpdateBookInterface {
  title?: String;
  author?: String;
  publicationDate?: Date;
  isbn?: String;
  genre?: String;
}

