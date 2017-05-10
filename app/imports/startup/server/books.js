import { Books } from '../../api/book/BookCollection.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Books to pre-fill the Collection.
 * @type {*[]}
 */
const bookSeeds = [
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Corman',
    edition: '3rd',
    publisher: 'MIT Press',
    publicationYear: '2009',
    isbn: '978-0262033848',
    campus: 'UH Manoa',
    subject: 'ICS',
    courseNumber: '311',
    coverType: 'Hardcover',
    condition: 'Excellent',
    price: '40',
    description: 'This book is essential for ICS 311. Exams are open-book, so it helps a lot.',
    picture: '/images/clrs.jpeg',
    username: 'dtan808',
    name: 'Danny',
    preferredMethod: 'Text',
    email: 'dtan808@hawaii.edu',
    phoneNumber: '808-265-2452',
  },
  {
    title: 'Chemistry: A Molecular Approach',
    author: 'Nivaldo J. Tro',
    edition: '4th',
    publisher: 'Pearson',
    publicationYear: '2016',
    isbn: '978-0134103976',
    campus: 'UH Manoa',
    subject: 'CHEM',
    courseNumber: '171',
    coverType: 'Hardcover',
    condition: 'Good',
    price: '70',
    description: 'I used this book for both CHEM 171 and 172.',
    picture: '/images/no-image.jpg',
    username: 'dtan808',
    name: 'Danny',
    preferredMethod: 'Text',
    email: 'dtan808@hawaii.edu',
    phoneNumber: '808-265-2452',
  },
];

/**
 * Initialize the Books collection if empty with seed data.
 */
if (Books.find().count() === 0) {
  _.each(bookSeeds, function seedBooks(stuff) {
    Books.insert(stuff);
  });
}
