import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changeState(cat) {
      cat.save();
    }
  }
});
