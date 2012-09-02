define([
// Application.
"app", "modules/category", "modules/question"],

function(app, Category, Question) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    initialize: function() {
      // Set up the users.
      this.questions = new Question.Collection();

      this.categories = new Category.Collection();

      // Use main layout and set Views.
      app.useLayout("main");

      app.layout.setViews({
        ".questions": new Question.Views.List({
          collection: this.questions
        }),
        ".categories": new Category.Views.List({
          collection: this.categories
        })
      });
    },

    index: function() {
      app.useLayout("main").render();
      //mock data
      this.questions.add([{
        description: 'Description one.'
      }, {
        description: 'Desription two.'
      }]);

      this.categories.add([{
        name: 'Semestar 1',
        id: 1,
        can_add_questions: false,
        parent: null
      },{
        name: 'Math',
        id: 2,
        can_add_questions: true,
        parent: 1
      }
      ]);

      this.questions.trigger('reset');
      this.categories.trigger('reset');
    }


  });

  return Router;

});