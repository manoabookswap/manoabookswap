import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Books = new Mongo.Collection('Books');

/**
 * Create the schema for Books
 */
export const BooksSchema = new SimpleSchema({
  title: { type: String, optional: false },
  author: { type: String, optional: false },
  edition: { type: String, optional: true },
  publisher: { type: String, optional: true },
  publicationYear: { type: String, optional: true },
  isbn: { type: String, optional: true },
  subject: { type: String, optional: false },
  courseNumber: { type: String, optional: false },
  coverType: { type: String, optional: true },
  condition: { type: String, optional: false },
  price: { type: String, optional: false },
  description: { type: String, optional: true },
  picture: { type: SimpleSchema.RegEx.Url, optional: true },
});

Books.attachSchema(BooksSchema);
