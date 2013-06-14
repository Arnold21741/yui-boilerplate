YUI().add('calendar-app', function(Y) {

    // Class that extends Y.App
    var CalendarApp = Y.Base.create('calendarApp', Y.App, [], {

        // Add or override prototype properties and methods here.
        views: {
            calendarDay : { preserve: false, type: Y.CalendarDayView},
            appointment : { preserve: false, type: Y.AppointmentView}
        },

        initializer: function () {
        },
        
        handleHome : function() {
           var today = Y.Date.format((new Date()), "%Y-%m-%d");
           this.showView('calendarDay', {day:today} );
        },
        
        handleDay : function(e) {
           this.showView('calendarDay', {day:e.params.datetime});
        },
        
        handleAppointment : function(e) {
           var id =  e.params.id;
           var appointment = this.getAppointmentById(id);
           console.log(appointment);
           this.showView('appointment', {appointment:appointment});
        },
        
        getAppointmentById : function(id) {
           var id = parseInt(id, 10);
           return Y.Array.find(this.get('data'), function(appointment){
              return appointment.id === id;
           }, this);
        }

    }, {

        // Add static properties and methods here.
        ATTRS: {
           routes: {
               value: [
                   {path: '/',           callbacks: 'handleHome'},
                   {path: '/day/:datetime',   callbacks: 'handleDay'},
                   {path: '/appointment/:id',   callbacks: 'handleAppointment'}
               ]
           },
            data : {
               value : [{"id":1, "text":"Ophtalmo", "start":"2013-06-14 08:00:00", "end":"2013-06-14 08:30:00", color:"#FF6600"},
               {"id":2, "text":"Justine", "start":"2013-06-14 10:00:00", "end":"2013-06-14 14:00:00", color:"#888888"},
               {"id":3, "text":"Repas famille", "start":"2013-06-14 18:00:00", "end":"2013-06-14 22:00:00", color:"#F56663"},
               {"id":4, "text":"Grasse mat'", "start":"2013-06-15 00:00:00", "end":"2013-06-15 11:00:00", color:"#FF6600"},
               {"id":5, "text":"Brunch", "start":"2013-06-15 11:00:00", "end":"2013-06-14 13:00:00", color:"#888888"},
               {"id":6,"text":"Balade dans le parc", "start":"2013-06-15 15:00:00", "end":"2013-06-14 18:00:00", color:"#F56663"}]
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
        'calendar-appointment-view',
        'datatype-date-format'
    ]
});