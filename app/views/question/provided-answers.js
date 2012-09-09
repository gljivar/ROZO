define([
  'backbone',
  'views/question/provided-answer-item'
  ],

function(Backbone, ItemView) {
  'use strict';
  var ProvidedAnswer = Backbone.View.extend({
    template: 'question/provided-answers',
    tagName: 'ul',

    beforeRender: function() {
      this.insertView(new ItemView());
    }
  });

  return ProvidedAnswer;
});