YUI({
    filter: 'raw',
    modules: {
        'calendar-app': {
            fullpath: 'javascripts/calendar/app.js'
        },
        'calendar-day-view': {
            fullpath: 'javascripts/calendar/calendar-day-view.js'
        }
    }
}).use('calendar-app', function(Y) {

    var app = new Y.CalendarApp({
        container:     '#calendar-app',
        viewContainer: '#calendar-app-views',
        serverRouting: false
    });

    app.render().dispatch();

    // for debug
    window.app = app;

});
