YUI().add('contact-app', function(Y) {

    // Create a Y.ContactApp class that extends Y.App
    var ContactApp = Y.Base.create('contactApp', Y.App, [], {

        // Add or override prototype properties and methods here.

        views: {
            contactList: {type: Y.ContactListView},
            contactEdit: {type: Y.ContactEditView}
        },

        initializer: function () {

        },

        handleContactList: function (req) {
            this.showView('contactList');
        },

        handleContactEdit: function (req) {
            this.showView('contactEdit');
        }

    }, {

        // Add static properties and methods here.

        ATTRS: {
            routes: {
                value: [
                    {path: '/',          callbacks: 'handleContactList'},
                    {path: '/users/:id', callbacks: 'handleContactEdit'}
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