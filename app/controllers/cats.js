import Controller from '@ember/controller';
import { max, min, mapBy, sum } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  cuteCoefs: mapBy('model', 'normalizedCuteCoef'),

  minCuteCoef:   min('cuteCoefs'),
  maxCuteCoef:   max('cuteCoefs'),
  totalCuteCoef: sum('cuteCoefs'),
  avgCuteCoef: computed('model.length', 'totalCuteCoef', function () {
    return this.totalCuteCoef / this.model.length;
  })
})
