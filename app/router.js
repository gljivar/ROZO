define([
// Application.
'app', 'models/question', 'collections/question', 'views/question/list', 'views/question/single', 'collections/category', 'views/category/list'],

function(app, QuestionModel, QuestionCollection, QuestionListView, QuestionSingleView, CategoryCollection, CategoryListView) {
  'use strict';
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'question/:id': 'single_question'
    },

    initialize: function() {
      this.questions = new QuestionCollection();
      this.categories = new CategoryCollection();

      //mock data
      this.questions.add([{
        id: 1,
        description: 'Description one.'
      }, {
        id: 2,
        description: 'Desription two.'
      }]);

      this.categories.add([{
        name: 'Semestar 1',
        id: 1,
        can_add_questions: false,
        parent: null
      }, {
        name: 'Math',
        id: 2,
        can_add_questions: true,
        parent: 1
      }]);

      // Use main layout and set Views.
      app.useLayout('main');
    },

    index: function() {
      app.layout.setViews({
        '.questions': new QuestionListView({
          collection: this.questions
        }),
        '.categories': new CategoryListView({
          collection: this.categories
        })
      });
      app.useLayout('main').render();

      this.questions.trigger('reset');
      this.categories.trigger('reset');

    },

    single_question: function(id) {
      var question = this.questions.get(id);

      app.layout.setViews({
        '.questions': new QuestionSingleView({
          model: question
        })
      });
      app.useLayout('main').render();
    }

  });

  return Router;

});