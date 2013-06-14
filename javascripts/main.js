
YUI({
    modules: {
        'my-module': {
            fullpath: 'javascripts/my-module.js'
        }
    }
}).use('node', 'my-module', function(Y) {

    console.log('\'Allo \'Allo!');

    Y.MyModule.myFunction ();

});