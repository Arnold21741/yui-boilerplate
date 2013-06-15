
/*

YUI vous fourni un chargement dynamique des dépendances, seul ce fichier
a besoin d'être inclu dans votre page html, YUI se chargera ensuite d'ajouter
les dépendance que vous aurez définis dans vos modules (voir le pamètre "requires"
lors de la définition d'un module).

Ce fichier vous sert à définir les path correspondant à chaque module. Cette
liste est habituellement calculée automatiquement dans un process de build
mais nous avons choisi de le faire ici manuellement pour simplifier le développement.

N'hésitez pas à créer de nouveaux modules et à compléter cette liste.

*/

YUI({
    filter: 'raw',
    modules: {
        'contact-app': {
            fullpath: 'javascripts/contact/app.js'
        },
        'contact-data': {
            fullpath: 'javascripts/contact/data.js'
        },
        'contact-model': {
            fullpath: 'javascripts/contact/model.js'
        },
        'contact-model-list': {
            fullpath: 'javascripts/contact/model-list.js'
        },
        'contact-edit-view': {
            fullpath: 'javascripts/contact/edit-view.js'
        },
        'contact-list-view': {
            fullpath: 'javascripts/contact/list-view.js'
        },
        'contact-create-view': {
            fullpath: 'javascripts/contact/create-view.js'
        }
    }
}).use('contact-app', function(Y) {

    var app = new Y.ContactApp({
        container:     '#contact-app-views',
        serverRouting: false
    });

    app.render().dispatch();

    // trick to set the default url
    if (Y.Lang.isString(window.location.hash) && window.location.hash.length === 0) {
        app.save('/');
    }


});
