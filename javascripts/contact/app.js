YUI().add('contact-app', function(Y) {

    // Create a Y.ContactApp class that extends Y.App
    var ContactApp = Y.Base.create('contactApp', Y.App, [], {

        // Add or override prototype properties and methods here.

        views: {
            list:   {type: Y.ContactListView},
            edit:   {type: Y.ContactEditView},
            create: {type: Y.ContactCreateView}
        },

        initializer: function () {
            this.set('contacts', new Y.ContactModelList({
                items: Y.UserData
            }));
        },

        handleListContact: function (req) {
            this.showView('list', {
                contacts: this.get('contacts')
            });
        },

        handleEditContact: function (req) {
            this.showView('edit', {
                contact: this.get('contacts').getById(req.params.id)
            });
        },

        handleCreateContact: function (req) {
            this.showView('create');
        }

    }, {

        // Add static properties and methods here.

        ATTRS: {

            routes: {
                value: [
                    {path: '/',            callbacks: 'handleListContact'},
                    {path: '/new',         callbacks: 'handleCreateContact'},
                    {path: '/contact/:id', callbacks: 'handleEditContact'}
                ]
            },

            contacts: {
                value: null
            }

        }

    });

    Y.ContactApp = ContactApp;

}, '@VERSION@', {
    requires: [
        'app',
        'contact-data',
        'contact-model-list',
        'contact-list-view',
        'contact-edit-view',
        'contact-create-view'
    ]
});