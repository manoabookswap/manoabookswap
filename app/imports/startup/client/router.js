import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { $ } from 'meteor/jquery';


/*                        LANDING ROUTE                       */

export const landingPageRouteName = 'Landing_Page';
FlowRouter.route('/', {
  name: landingPageRouteName,
  action() {
    BlazeLayout.render('Landing_Layout', { main: landingPageRouteName });
  },
});


/*                        DIRECTORY ROUTE                       */

function addDirectoryBodyClass() {
  $('body').addClass('directory-page-body');
}

function removeDirectoryBodyClass() {
  $('body').removeClass('directory-page-body');
}

export const directoryPageRouteName = 'Directory_Page';
FlowRouter.route('/directory', {
  name: directoryPageRouteName,
  action() {
    BlazeLayout.render('Directory_Layout', { main: directoryPageRouteName });
  },
  triggersEnter: [addDirectoryBodyClass],
  triggersExit: [removeDirectoryBodyClass],
});


/*                        USER ROUTES                      */
function addUserBodyClass() {
  $('body').addClass('user-layout-body');
}

function removeUserBodyClass() {
  $('body').removeClass('user-layout-body');
}

const userRoutes = FlowRouter.group({
  prefix: '/:username',
  name: 'userRoutes',
  triggersEnter: [addUserBodyClass],
  triggersExit: [removeUserBodyClass],
});

export const profilePageRouteName = 'Profile_Page';
userRoutes.route('/profile', {
  name: profilePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: profilePageRouteName });
  },
});

export const homepagePageRouteName = 'Homepage_Page';
userRoutes.route('/homepage', {
  name: homepagePageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: homepagePageRouteName });
  },
});

export const mybooksPageRouteName = 'MyBooks_Page';
userRoutes.route('/mybooks', {
  name: mybooksPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: mybooksPageRouteName });
  },
});

export const filterPageRouteName = 'Filter_Page';
userRoutes.route('/filter', {
  name: filterPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: filterPageRouteName });
  },
});

export const sellPageRouteName = 'Sell_Page';
userRoutes.route('/sell', {
  name: sellPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: sellPageRouteName });
  },
});

export const descriptionPageRouteName = 'Description_Page';
userRoutes.route('/description/:_id', {
  name: descriptionPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: descriptionPageRouteName });
  },
});

export const faqPageRouteName = 'FAQ_Page';
userRoutes.route('/faq', {
  name: faqPageRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: faqPageRouteName });
  },
});

export const contactUsRouteName = 'Contact_Us';
userRoutes.route('/contact-us', {
  name: contactUsRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: contactUsRouteName });
  },
});

export const termsOfServiceRouteName = 'Terms_Of_Service';
userRoutes.route('/tos', {
  name: termsOfServiceRouteName,
  action() {
    BlazeLayout.render('User_Layout', { main: termsOfServiceRouteName });
  },
});


/*                        MISC ROUTES                       */
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('Page_Not_Found');
  },
};
