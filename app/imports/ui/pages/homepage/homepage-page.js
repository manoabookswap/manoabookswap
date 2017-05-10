import { Template } from 'meteor/templating';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { FlowRouter } from 'meteor/kadira:flow-router';


Template.Homepage_Page.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
});

Template.Homepage_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  profile() {
    return Profiles.findOne({ username: FlowRouter.getParam('username') });
  },
});

