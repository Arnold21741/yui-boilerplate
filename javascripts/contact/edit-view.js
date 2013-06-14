YUI().add('contact-edit-view', function(Y) {

    Y.ContactEditView = Y.Base.create('contactEditView', Y.View, [], {

        template: Y.Handlebars.compile(Y.one('#contact-edit-template').getHTML()),

        render: function() {
            var user    = this.get('user'),
                content = this.template({user: user});

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