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
