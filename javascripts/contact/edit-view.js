YUI().add('contact-edit-view', function(Y) {

    Y.ContactEditView = Y.Base.create('contactEditView', Y.View, [], {

        template: Y.Handlebars.compile(Y.one('#contact-edit-view-template').getHTML()),

        render: function() {
            var repo    = this.get('model').toJSON(),
                content = this.template(repo);

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