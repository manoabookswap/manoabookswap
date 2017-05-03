import { Template } from 'meteor/templating';
import { Books } from '/imports/api/book/BookCollection.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.Description_Page.onCreated(function onCreated() {
  this.subscribe('Books');
});

Template.Description_Page.helpers({
  book() {
    return Books.findOne(FlowRouter.getParam('_id'));
  },
});
