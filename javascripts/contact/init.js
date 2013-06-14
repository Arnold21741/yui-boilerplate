YUI({
    modules: {
        'contact-app': {
            fullpath: 'javascripts/contact/app.js'
        },
        'contact-model': {
            fullpath: 'javascripts/contact/model.js'
        },
        'contact-edit-view': {
            fullpath: 'javascripts/contact/edit-view.js'
        },
        'contact-list-view': {
            fullpath: 'javascripts/contact/list-view.js'
        }
    }
}).use('contact-app', function(Y) {

    var app = new Y.ContactApp({
        container:     '#contact-app-views',
        viewContainer: '#contact-app-views',
        serverRouting: false
    });

    app.render().dispatch();

    // for debug
    window.contactApp = app;

});
