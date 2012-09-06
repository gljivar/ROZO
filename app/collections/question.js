define(['backbone', 'models/question'], function(Backbone, QuestionModel) {
  'use strict';
  var Questions = Backbone.Collection.extend({
    model: QuestionModel
  });

  return Questions;
});