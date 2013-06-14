YUI().add('calendar-app', function(Y) {

    // Class that extends Y.App
    var CalendarApp = Y.Base.create('calendarApp', Y.App, [], {

        // Add or override prototype properties and methods here.
        views: {
            calendarDay : { preserve: false, type: Y.CalendarDayView}
        },

        initializer: function () {
        },
        
        handleHome : function() {
           var today = Y.Date.format((new Date()), "%Y-%m-%d");
           this.showView('calendarDay', {day:today} );
        },
        
        handleDay : function(e) {
           this.showView('calendarDay', {day:e.params.datetime});
        }

    }, {

        // Add static properties and methods here.
        ATTRS: {
           routes: {
               value: [
                   {path: '/',           callbacks: 'handleHome'},
                   {path: '/day/:datetime',   callbacks: 'handleDay'}
               ]
           }
        }

    });

    Y.CalendarApp = CalendarApp;

}, '@VERSION@', {
    requires: [
        'app',
        'node',
        'array-extras',
        'calendar-day-view',
        'datatype-date-format'
    ]
});