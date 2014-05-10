var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var template = require("../templates/test.hbs");

module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    $('body').html(template({test:'testVal'}));
  }
});
