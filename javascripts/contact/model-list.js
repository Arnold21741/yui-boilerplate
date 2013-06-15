YUI().add('contact-model-list', function(Y) {

    Y.ContactModelList = Y.Base.create('contactModelList', Y.ModelList, [], {
        // Add prototype properties and methods for your List here if desired. These
        // will be available to all instances of your List.

        // Specifies that this list is meant to contain instances of Y.PieModel.
        model: Y.ContactModel

        // Define your own methods here

    });

}, '@VERSION@', {
    requires: [
        'contact-model'
    ]
});