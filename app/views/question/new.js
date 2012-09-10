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

      if (this.providedAnswers) {
        container.slideToggle();
        container.empty();
        // TODO set option to clear anwsers in view - not delete them all 
        this.providedAnswers = null;
      } else {
        this.providedAnswers = new ProvidedAnswersView();
        this.insertView('.provided-answers', this.providedAnswers).render();
        container.slideToggle();
      };
    }
  });

  return QuestionNew;
});