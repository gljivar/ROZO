define([
  'backbone',
  'models/question',
  'views/question/provided-answers'
  ],

function(Backbone, QuestionModel, ProvidedAnswersView) {
  'use strict';
  var QuestionNew = Backbone.View.extend({
    template: 'question/new',
    tagName: 'form',
    className: 'form-horizontal',

    events: {
      'click .btn-post': 'onPostClick',
      'click .btn-provided-answers': 'onProvidedAnswersClick'
    },

    initialize: function() {
      this.newQuestion = new QuestionModel();
      this.providedAnswers = null;
    },

    onPostClick: function() {
      this.$('.btn-post').button('loading');
      this.$('.btn-cancel').addClass('disabled');
    },

    onProvidedAnswersClick: function() {
      var container = this.$('.provided-answers');
      container.slideToggle();
    }
  });

  return QuestionNew;
});