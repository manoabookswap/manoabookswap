import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Books = new Mongo.Collection('Books');

/**
 * Create the schema for Books
 */
export const BooksSchema = new SimpleSchema({
  title: { type: String, optional: false, label: 'title' },
  author: { type: String, optional: false, label: 'author' },
  edition: { type: String, optional: true, label: 'edition' },
  publisher: { type: String, optional: true, label: 'publisher' },
  publicationYear: { type: String, optional: true, label: 'publicationYear' },
  isbn: { type: String, optional: true, label: 'isbn' },
  subject: { type: String, optional: false, label: 'subject' },
  courseNumber: { type: String, optional: false, label: 'courseNumber' },
  coverType: { type: String, optional: true, label: 'coverType' },
  condition: { type: String, optional: false, label: 'condition' },
  price: { type: String, optional: false, label: 'price' },
  description: { type: String, optional: true, label: 'description' },
  picture: { type: SimpleSchema.RegEx.Url, optional: true, label: 'picture' },
});

Books.attachSchema(BooksSchema);
