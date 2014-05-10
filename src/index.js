var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
 var AppView = require('./views/test');
           var appView = new AppView();
var AppRouter = Backbone.Router.extend({
        routes: {
            "*": "defaultRoute" // matches http://example.com/#anything-here
        }
    });
    // Initiate the router
    var app_router = new AppRouter;

        app_router.on('route:defaultRoute', function(actions) {
        	console.log('HIT DEFAULT ROUTE11')
        	 var AppView = require('./views/test');
           var appView = new AppView();
    })

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
