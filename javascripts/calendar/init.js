
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
        'calendar-app': {
            fullpath: 'javascripts/calendar/app.js'
        },
        'calendar-day-view': {
            fullpath: 'javascripts/calendar/calendar-day-view.js'
        },
        'calendar-appointment-view': {
            fullpath: 'javascripts/calendar/calendar-appointment-view.js'
        }
    }
}).use('calendar-app', function(Y) {

    window.app = new Y.CalendarApp({
        container:     '#calendar-app',
        viewContainer: '#calendar-app-views',
        serverRouting: false
    });

    app.render().dispatch();
    
    if (Y.Lang.isString(window.location.hash) && window.location.hash.length === 0) {
         app.save('/');
    }

});
