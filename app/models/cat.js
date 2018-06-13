import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  weight: DS.attr('number'),
  height: DS.attr('number'),
  width: DS.attr('number'),
  name: DS.attr('string'),
  fluffiness: DS.attr('number'),
  avatarUrl: DS.attr('string'),
  state: DS.attr('string'),

  slave: DS.belongsTo('human'),

  density: computed('weight', 'height', 'width', function () {
    return this.weight / (this.height * this.width)
  }),
  cuteCoef: computed('density', 'fluffiness', function () {
    const { density, fluffiness, weight} = this;
    return (fluffiness * fluffiness *  weight) / Math.sqrt(density);
  }),
  normalizedCuteCoef: computed('cuteCoef', function () {
    return (this.cuteCoef / (100 * 100 * 5));
  }),
});
