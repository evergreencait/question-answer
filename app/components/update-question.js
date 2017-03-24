import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
    actions: {
      updateQuestionForm() {
        this.set('updateQuestionForm', true);
      },
      update(question) {
        var params = {
          inquiry: this.get('inquiry'),
          author: this.get('author'),
          notes: this.get('notes'),
          image: this.get('image')
        };
        this.set('updateQuestionForm', false);
        this.sendAction('update', question, params);
      }
    }
  });
