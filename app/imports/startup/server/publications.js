import { Meteor } from 'meteor/meteor';
import { Books } from '../../api/book/BookCollection.js';

Meteor.publish('Books', function publishBooks() {
  return Books.find();
});