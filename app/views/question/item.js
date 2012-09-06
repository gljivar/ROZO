define(['backbone'], function(Backbone) {
  'use strict';
  var QuestionItem = Backbone.View.extend({
    template: 'question/item',
    tagName: 'li',

    serialize: function() {
      return {
        model: this.model
      };
    }
  });

  return QuestionItem;
});