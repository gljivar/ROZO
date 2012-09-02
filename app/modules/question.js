define([
// Application.
"app"], function(app) {
  // Create a new module.
  var Question = app.module();

  // Default model.
  Question.Model = Backbone.Model.extend({

  });

  // Default collection.
  Question.Collection = Backbone.Collection.extend({
    model: Question.Model
  });

  // single item
  Question.Views.Item = Backbone.View.extend({
    template: "question/item",
    tagName: "li",

    serialize: function() {
      return {
        model: this.model
      };
    }
  });

  Question.Views.List = Backbone.View.extend({
    template: "question/list",

    initialize: function() {
      this.collection.on("reset", this.render, this);
    },

    beforeRender: function() {
      this.collection.each(function(question) {
        this.insertView("ul", new Question.Views.Item({
          model: question
        }));
      }, this);
    },

    cleanup: function() {
      this.collection.off(null, null, this);
    }

  });

  return Question;
});