import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { Books } from '/imports/api/book/BookCollection.js';

Template.MyBooks_Page.onCreated(function onCreated() {
  this.subscribe('Books');
  this.messageFlags = new ReactiveDict();
});

Template.MyBooks_Page.helpers({
  /**
   * @returns {*} User's Book documents.
   */
  booksFilter() {
    return Books.find({username: FlowRouter.getParam('username')});
  },
  routeUserName() {
    return FlowRouter.getParam('username');
  },
});

