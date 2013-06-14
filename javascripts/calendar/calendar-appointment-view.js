YUI().add('calendar-appointment-view', function(Y) {

    Y.AppointmentView = Y.Base.create('appointmentView', Y.View, [], {

      render: function() {
  
        var template = Y.Handlebars.compile(Y.one('#calendar-appointment-view-template').getHTML());
         
         console.log("machin", this.get('appointment'));
        var html = template({
             appointment: this.get('appointment')
        });
  
        this.get('container').setHTML(html);
        
        return this;
        
      }
      
    });


}, '@VERSION@', {
    requires: [
        'view',
        'handlebars'
    ]
});