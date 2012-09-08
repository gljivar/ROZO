define([
  'app',
  'collections/question',
  'collections/category',
  'routers/question',
  'routers/category'
  ],

function(app, QuestionCollection, CategoryCollection, QuestionRouter, CategoryRouter) {
  'use strict';
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    initialize: function() {
      //initilize all of the data
      this.questions = new QuestionCollection();
      this.categories = new CategoryCollection();

      app.useLayout('main');


      // mock data
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

      //initilize other routers used in app
      this.routers = {
        question: new QuestionRouter({
          collections: {
            questions: this.questions
          }
        }),
        category: new CategoryRouter({
          collections: {
            categories: this.categories
          }
        })
      };
    },

    index: function() {}

  });

  return Router;

});