import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import BaseCollection from '/imports/api/base/BaseCollection';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

/** @module Profile */

/**
 * Profiles provide portfolio data for a user.
 * @extends module:Base~BaseCollection
 */
class ProfileCollection extends BaseCollection {

  /**
   * Creates the Profile collection.
   */
  constructor() {
    super('Profile', new SimpleSchema({
      firstName: { type: String, optional: true },
      lastName: { type: String, optional: true },
      email: { type: String, optional: true },
      phoneNumber: { type: String, optional: true },
      preferredMethod: { type: String, optional: true },
      picture: { type: SimpleSchema.RegEx.Url, optional: true },
      username: { type: String },
    }));
  }

  /**
   * Defines a new Profile.
   * @example
   * Profiles.define({ firstName: 'Philip',
   *                   lastName: 'Johnson',
   *                   username: 'johnson',
   *                   bio: 'I have been a professor of computer science at UH since 1990.',
   *                   interests: ['Application Development', 'Software Engineering', 'Databases'],
   *                   title: 'Professor of Information and Computer Sciences',
   *                   picture: 'http://philipmjohnson.org/headshot.jpg',
   *                   github: 'https://github.com/philipmjohnson',
   *                   facebook: 'https://facebook.com/philipmjohnson',
   *                   instagram: 'https://instagram.com/philipmjohnson' });
   * @param { Object } description Object with required key username.
   * Remaining keys are optional.
   * Username must be unique for all users. It should be the UH email account.
   * Interests is an array of defined interest names.
   * @throws { Meteor.Error } If a user with the supplied username already exists, or
   * if one or more interests are not defined, or if github, facebook, and instagram are not URLs.
   * @returns The newly created docID.
   */
  define({ firstName = '', lastName = '', email = '', phoneNumber = '', preferredMethod = '', picture = '', title = '', username }) {
    // make sure required fields are OK.
    const checkPattern = { firstName: String, lastName: String, email: String, phoneNumber: String, preferredMethod: String, picture: String, username: String };
    check({ firstName, lastName, email, phoneNumber, preferredMethod, picture, username}, checkPattern);

    if (this.find({ username }).count() > 0) {
      throw new Meteor.Error(`${username} is previously defined in another Profile`);
    }
    return this._collection.insert({ firstName, lastName, email, phoneNumber, preferredMethod, picture, username });
  }

  /**
   * Returns an object representing the Profile docID in a format acceptable to define().
   * @param docID The docID of a Profile.
   * @returns { Object } An object representing the definition of docID.
   */
  dumpOne(docID) {
    const doc = this.findDoc(docID);
    const firstName = doc.firstName;
    const lastName = doc.lastName;
    const email = doc.email;
    const phoneNumber = doc.phoneNumber;
    const preferredMethod = doc.preferredMethod;
    const picture = doc.picture;
    const username = doc.username;
    return { firstName, lastName, email, phoneNumber, preferredMethod, picture, username };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Profiles = new ProfileCollection();
