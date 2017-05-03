import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { Books } from '/imports/api/book/BookCollection.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

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
  routeUserName() {
    return FlowRouter.getParam('username');
  },
});

Template.Filter_Page.events({

});

