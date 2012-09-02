define([
// Application.
"app"],

// Map dependencies from above array.


function(app) {

  // Create a new module.
  var Category = app.module();

  // Default model.
  Category.Model = Backbone.Model.extend({

  });

  // Default collection.
  Category.Collection = Backbone.Collection.extend({
    model: Category.Model
  });

  Category.Views.Item = Backbone.View.extend({
    template: "category/item",
    tagName: "li",

    serialize: function() {
      return {
        model: this.model
      };
    }
  });

  Category.Views.List = Backbone.View.extend({
    template: "category/list",

    initialize: function() {
      this.collection.on("reset", this.render, this);
    },

    beforeRender: function() {
      this.collection.each(function(category) {
        this.insertView("ul", new Category.Views.Item({
          model: category
        }));
      }, this);
    },

    cleanup: function() {
      this.collection.off(null, null, this);
    }

  });

  return Category;

});