import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Books } from '/imports/api/book/BookCollection.js';

Template.Filter_Page.onCreated(function onCreated() {
  this.subscribe('Books');
});

Template.Filter_Page.helpers({
  /**
   * @returns {*} All of the Books documents.
   */
  booksList() {
    return Books.find();
  },
});

Template.Filter_Page.events({

});

