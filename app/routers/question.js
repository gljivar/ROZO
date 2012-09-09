define([
  'app',
  'views/question/list',
  'views/question/new',
  'views/question/single'
  ],

function(app, QuestionListView, QuestionNewView, QuestionSingleView) {
  'use strict';
  var Router = Backbone.Router.extend({
    routes: {
      'question': 'list',
      'question/': 'list',
      'question/new': 'new',
      'question/:id': 'single'
    },

    initialize: function(options) {
      this.questions = options.collections.questions;
    },

    list: function() {
      app.layout.setViews({
        '.content': new QuestionListView({
          collection: this.questions
        })
      });
      app.layout.render();
    },

    'new': function() {
      app.layout.setViews({
        '.content': new QuestionNewView({
          collection: this.questions
        })
      });
      app.layout.render();
    }, 

    single: function(id) {
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