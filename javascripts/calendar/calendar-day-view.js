YUI().add('calendar-day-view', function(Y) {

    Y.CalendarDayView = Y.Base.create('calendarDayView', Y.View, [], {

        render: function() {
           
           var template = Y.Handlebars.compile(Y.one('#calendar-day-view-template').getHTML());
           
           var html = template({
                day: this.get('day'),
                appointments: this.getAppointments()
           });
           
           this.get('container').setHTML(html);
           
           return this;
        },
        
        getAppointments : function() {
          
           var day  = this.get('day');
           var data = this.get('data');
           
           var appointments = Y.Array.filter(data, function(appointment) {
              return day === appointment.start.split(' ')[0];
           }, this);
           
           return appointments;
        }
        
    }, {
       ATTRS: {
          data : {
             value : [{"text":"Ophtalmo", "start":"2013-06-14 08:00:00", "end":"2013-06-14 08:30:00", color:"#FF6600"},
             {"text":"Justine", "start":"2013-06-14 10:00:00", "end":"2013-06-14 14:00:00", color:"#888888"},
             {"text":"Repas famille", "start":"2013-06-14 18:00:00", "end":"2013-06-14 22:00:00", color:"#F56663"},
             {"text":"Grasse mat'", "start":"2013-06-15 00:00:00", "end":"2013-06-15 11:00:00", color:"#FF6600"},
             {"text":"Brunch", "start":"2013-06-15 11:00:00", "end":"2013-06-14 13:00:00", color:"#888888"},
             {"text":"Balade dans le parc", "start":"2013-06-15 15:00:00", "end":"2013-06-14 18:00:00", color:"#F56663"}]
          }
       }
    });


}, '@VERSION@', {
    requires: [
        'view',
        'handlebars'
    ]
});