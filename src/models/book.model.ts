
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title : {
    type : String,
    require : true
  },
  author : {
    type : String,
    require : true
  },
  publicationDate : {
    type : Date,
    require : true
  },
  isbn : {
    type : String,
    require : true
  },
  genre : {
    type : String,
    require : true
  }
});

bookSchema.methods.toJSON = function () {
  const { __v,...book } = this.toObject();
  return book;
}

const Book = mongoose.model('Book', bookSchema);

export default Book; 