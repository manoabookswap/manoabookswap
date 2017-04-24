import { Template } from 'meteor/templating';
import { Profiles } from '/imports/api/profile/ProfileCollection';

Template.Homepage_Page.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
});

Template.Homepage_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  firstName() {
    return Profiles.find({}, { sort: { firstName: 1 } });
  },
});

