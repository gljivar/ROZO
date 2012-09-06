define(['backbone', 'views/question/item'], function(Backbone, Item) {
  'use strict';
  var QuestionList = Backbone.View.extend({
    template: 'question/list',

    initialize: function() {
      this.collection.on('reset', this.render, this);
    },

    beforeRender: function() {
      this.collection.each(function(question) {
        this.insertView('ul', new Item({
          model: question
        }));
      }, this);
    },

    cleanup: function() {
      this.collection.off(null, null, this);
    }

  });

  return QuestionList;
});