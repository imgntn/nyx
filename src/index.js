var Backbone = require('backbone');
var $ = require('jquery');


var myRootRef = new Firebase('https://jbpframework.firebaseIO.com/');
myRootRef.set("hello");

var AppView = require('./views/test');
var appView = new AppView();