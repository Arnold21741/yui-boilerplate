YUI().add('calendar-day-view', function(Y) {

    Y.CalendarDayView = Y.Base.create('calendarDayView', Y.View, [], {

        template: Y.Handlebars.compile('<div></div>'),

        render: function() {
        }
    });


}, '@VERSION@', {
    requires: [
        'view',
        'handlebars'
    ]
});