import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
    actions: {
      questionFormShow() {
        this.set('addNewQuestion', true);
      },

      saveQuestion() {
        var params = {
          inquiry: this.get('inquiry'),
          author: this.get('author'),
          notes: this.get('notes'),
          image: this.get('image')
        };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion', params);
      }
    }
  });
