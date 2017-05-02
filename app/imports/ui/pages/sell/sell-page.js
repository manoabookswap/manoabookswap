import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Books, BooksSchema } from '../../../api/book/BookCollection.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Sell_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = BooksSchema.namedContext('Sell_Page');
});

Template.Sell_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});

Template.Sell_Page.events({
  'submit .sell-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    // const user = event.target.User.value;
    // Trying to get the username of the person who uploaded the book
    const title = event.target.Title.value;
    const author = event.target.Author.value;
    const edition = event.target.edition.value;
    const publisher = event.target.Publisher.value;
    const publicationYear = event.target.publicationYear.value;
    const isbn = event.target.isbn.value;
    const campus = event.target.campus.value;
    const subject = event.target.subject.value;
    const courseNumber = event.target.courseNumber.value;
    const coverType = event.target.coverType.value;
    const condition = event.target.condition.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const picture = event.target.picture.value;
    const username = Meteor.user().profile.name;

    const newSellData = {
      title,
      author,
      edition,
      publisher,
      publicationYear,
      isbn,
      campus,
      subject,
      courseNumber,
      coverType,
      condition,
      price,
      description,
      picture,
      username
    };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that contactData reflects what will be inserted.
    BooksSchema.clean(newSellData);
    // Determine validity.
    instance.context.validate(newSellData);
    if (instance.context.isValid()) {
      Books.insert(newSellData);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go(`/${username}/filter`);
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});
