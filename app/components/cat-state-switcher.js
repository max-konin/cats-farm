import Component from '@ember/component';
import { computed } from '@ember/object';

const EVENT_LABEL = {
  hungry: 'feed',
  sleep: 'wake up',
  evil: 'caress'
};

const NEXT_STATE = {
  hungry: 'sleep',
  sleep: 'evil',
  evil: 'hungry'
};

export default Component.extend({
  tagName: 'button',
  classNames: ['ui', 'button', 'primary'],
  eventLabel: computed('cat.state', function () {
    return EVENT_LABEL[this.get('cat.state')];
  }),
  click() {
    const nextState = NEXT_STATE[this.get('cat.state')];
    this.cat.set('state', nextState);
    this.onChange(this.cat);
  }
});
