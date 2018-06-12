import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'tr',
  classNameBindings: ['warning', 'error'],

  sleep:   equal('cat.state', 'sleep'),
  error:   equal('cat.state', 'evil'),
  warning: equal('cat.state', 'hungry'),

  labelClass: computed(function () {
    if (this.sleep)   return 'green';
    if (this.error)   return 'red';
    if (this.warning) return 'yellow';
  })
});
