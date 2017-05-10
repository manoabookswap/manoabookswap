import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Profiles, ProfilesSchema } from '../../../api/profile/ProfileCollection.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Profile_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = ProfilesSchema.namedContext('Profile_Page');
});

Template.Profile_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});

Template.Profile_Page.events({
  'submit .profile-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    // const user = event.target.User.value;
    // Trying to get the username of the person who uploaded the book
    const firstName = event.target.First.value;
    const lastName = event.target.Last.value;
    const email = event.target.Email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const preferredMethod = event.target.preferredMethod.value;
    const picture = event.target.picture.value;
    const username = Meteor.user().profile.name;

    const newProfileData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      preferredMethod,
      picture,
      username,
    };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that contactData reflects what will be inserted.
    ProfilesSchema.clean(newProfileData);
    // Determine validity.
    instance.context.validate(newProfileData);
    if (instance.context.isValid()) {
      Profiles.insert(newProfileData);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go(`/${username}/homepage`);
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
