import { Template } from 'meteor/templating';
import { Books } from '/imports/api/book/BookCollection.js';
import { Profiles } from '/imports/api/profile/ProfileCollection.js';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.Description_Page.onCreated(function onCreated() {
  this.subscribe('Books');
  this.subscribe('Profiles');
});

Template.Description_Page.helpers({
  book() {
    return Books.findOne(FlowRouter.getParam('_id'));
  },
  profile() {
    return Profiles.findDoc(FlowRouter.getParam('username'));
  },
});
