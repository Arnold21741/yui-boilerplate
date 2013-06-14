YUI().add('contact-app', function(Y) {

    // Create a Y.ContactApp class that extends Y.App
    var ContactApp = Y.Base.create('contactApp', Y.App, [], {

        // Add or override prototype properties and methods here.

        views: {
            contactList: {preserve: true, type: Y.ContactListView},
            contactEdit: {preserve: false}
        },

        initializer: function () {

        },

        handleContactList: function () {
            this.showView('contactList');
        },

        handleContactEdit: function () {
            this.showView('contactEdit');
        }

    }, {

        // Add static properties and methods here.

        ATTRS: {
            routes: {
                value: [
                    {path: '/',           callbacks: 'handleContactList'},
                    {path: '/users/:id/', callbacks: 'handleContactEdit'}
                ]
            }
        }

    });

    Y.ContactApp = ContactApp;

}, '@VERSION@', {
    requires: [
        'app',
        'contact-list-view',
        'contact-edit-view'
    ]
});