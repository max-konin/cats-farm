import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  slaves: hasMany('human')
});
