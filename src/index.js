var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$=$;

var myRootRef = new Firebase('https://jbpframework.firebaseIO.com/');
myRootRef.set("hello");

var auth = new FirebaseSimpleLogin(myRootRef, function(error, user) {
  if (error) {
    // an error occurred while attempting login
    console.log(error);
  } else if (user) {
    console.log('fb user is:',user)
    // user authenticated with Firebase
    console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
  } else {
    // user is logged out
  }
});

var Router = Backbone.Router.extend({
  routes : {
    ""    : "index",
    "foo" : "foo",
    "bar" : "bar"
  },
  index : function() {
  	console.log('index')
 var AppView = require('./views/test');
var appView = new AppView();
  },
  foo : function() {
    console.log("foo");
    auth.login('facebook');
  },
  bar : function() {
    console.log("bar");
  }
});
 
new Router();
 
Backbone.history.start();