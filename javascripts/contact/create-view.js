YUI().add('contact-create-view', function(Y) {

    Y.ContactCreateView = Y.Base.create('contactEditCreateView', Y.View, [], {

        template: Y.Handlebars.compile(Y.one('#contact-create-template').getHTML()),

        render: function() {
            var content = this.template();

            this.get('container').setHTML(content);

            return this;
        }
    });


}, '@VERSION@', {
    requires: [
        'view',
        'handlebars',
        'inputex-string'
    ]
});