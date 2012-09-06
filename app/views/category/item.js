define(['backbone'], function(Backbone) {
  'use strict';
  var CategoryItem = Backbone.View.extend({
    template: 'category/item',
    tagName: 'li',

    serialize: function() {
      return {
        model: this.model
      };
    }
  });

  return CategoryItem;
});