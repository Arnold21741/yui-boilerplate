YUI().add('contact-model', function(Y) {

    Y.ContactModel = Y.Base.create('contactModel', Y.Model, [], {
        // Add prototype methods for your Model here if desired. These methods will be
        // available to all instances of your Model.

    }, {
        ATTRS: {
            // Add custom model attributes here. These attributes will contain your
            // model's data. See the docs for Y.Attribute to learn more about defining
            // attributes.

            firstname: {
                value: null
            },

            lastname: {
                value: null
            },

            email: {
                value: null
            },

            created_at: {
                value: null
            },

            updated_at: {
                value: null
            },

            phone: {
                value: null
            },

            is_client: {
                value: null
            }

        }
    });

}, '@VERSION@', {
    requires: [
        'model' 
    ]
});