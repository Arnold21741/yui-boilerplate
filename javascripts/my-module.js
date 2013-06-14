YUI().add('my-module', function(Y) {

    Y.MyModule = {
        myFunction: function() {

            console.log('hello from my-module function');

            var btn = new Y.Button({
                srcNode: '#myButton'
            });

            btn.render();

            btn.on('click', function () {
                alert('Thank you');
            });

        }
    };

}, '@VERSION@', {
    requires: [
        'button'
    ]
});