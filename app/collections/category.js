define(['backbone', 'models/category'], function(Backbone, CategoryModel) {
  'use strict';
  var Categories = Backbone.Collection.extend({
    model: CategoryModel
  });

  return Categories;
});