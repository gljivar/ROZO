define([
  'app',
  'views/category/list'
  ],

function(app, CategoryListView) {
  'use strict';
  var Router = Backbone.Router.extend({
    routes: {
      'category': 'list'
    },

    initialize: function(options) {
      this.categories = options.collections.categories;
    },

    list: function() {
      app.useLayout('main');
      app.layout.setViews({
        '.content': new CategoryListView({
          collection: this.categories
        })
      });

      app.layout.render();
    }

  });

  return Router;

});