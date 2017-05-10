import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Profiles = new Mongo.Collection('Profiles');

/**
 * Create the schema for Books
 */
export const ProfilesSchema = new SimpleSchema({
  firstName: { type: String, optional: false },
  lastName: { type: String, optional: true },
  email: { type: String, optional: true  },
  phoneNumber: { type: String, optional: true },
  preferredMethod: { type: String, optional: true },
  picture: { type: SimpleSchema.RegEx.Url, optional: true },
  username: { type: String, optional: false },
});

Profiles.attachSchema(ProfilesSchema);
