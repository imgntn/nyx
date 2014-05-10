var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$=$;

var myRootRef = new Firebase('https://jbpframework.firebaseIO.com/');
myRootRef.set("hello");



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
  },
  bar : function() {
    console.log("bar");
  }
});
 
new Router();
 
Backbone.history.start();