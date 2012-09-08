define([
  'backbone'
  ],

function(Backbone) {
  'use strict';
  var Single = Backbone.View.extend({
    template: 'question/single',
    tagName: 'div',

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    serialize: function() {
      return {
        model: this.model
      };
    }
  });

  return Single;
});