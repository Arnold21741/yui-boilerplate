YUI().add('contact-list-view', function(Y) {

    Y.ContactListView = Y.Base.create('contactlistView', Y.View, [], {

        template: Y.Handlebars.compile(Y.one('#contact-list-template').getHTML()),

        render: function() {
            var contacts = [],
                content  = this.template({contacts: contacts});

            this.get('container').setHTML(content);

            return this;
        }
        
    });

}, '@VERSION@', {
    requires: [
        'view',
        'handlebars'
    ]
});