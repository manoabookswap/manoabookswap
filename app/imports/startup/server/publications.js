import { Meteor } from 'meteor/meteor';
import { Books } from '../../api/book/BookCollection.js';
import { Interests } from '../../api/interest/InterestCollection.js';
import { Profiles } from '../../api/profile/ProfileCollection.js';

Meteor.publish('Books', function publishBooks() {
  return Books.find();
});

Meteor.publish('Interests', function publishInterests() {
  return Interests.find();
});

Meteor.publish('Profiles', function publishProfiles() {
  return Profiles.find();
});
