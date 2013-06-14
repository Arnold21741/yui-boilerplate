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
        var data = app.get('data');
  
        var appointments = Y.Array.filter(data, function(appointment) {
           return day === appointment.start.split(' ')[0];
        }, this);
  
        return appointments;
      }
        
    });


}, '@VERSION@', {
    requires: [
        'view',
        'handlebars'
    ]
});