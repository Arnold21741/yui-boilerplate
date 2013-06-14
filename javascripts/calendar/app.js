YUI().add('calendar-app', function(Y) {

    // Class that extends Y.App
    var CalendarApp = Y.Base.create('contactApp', Y.App, [], {

        // Add or override prototype properties and methods here.
        views: {
            dayView: {preserve: true, type: Y.DayView}
        },

        initializer: function () {
        }

    }, {

        // Add static properties and methods here.
        ATTRS: {
        }

    });

    Y.CalendarApp = CalendarApp;

}, '@VERSION@', {
    requires: [
        'app',
        'calendar-day-view'
    ]
});