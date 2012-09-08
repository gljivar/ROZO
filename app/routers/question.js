define([
  'app',
  'views/question/list',
  'views/question/single'
  ],

function(app, QuestionListView, QuestionSingleView) {
  'use strict';
  var Router = Backbone.Router.extend({
    routes: {
      'question/': 'question_list',
      'question/:id': 'question_single'
    },

    initialize: function(options) {
      this.questions = options.collections.questions;
    },

    question_list: function() {
      app.useLayout('main');
      app.layout.setViews({
        '.content': new QuestionListView({
          collection: this.questions
        })
      });
      app.layout.render();
    },

    question_single: function(id) {
      app.useLayout('main');
      var question = this.questions.get(id);
      app.layout.setViews({
        '.content': new QuestionSingleView({
          model: question
        })
      });
      app.layout.render();
    }

  });

  return Router;

});