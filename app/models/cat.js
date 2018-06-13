import DS from 'ember-data';

export default DS.Model.extend({
  weight: DS.attr('number'),
  height: DS.attr('number'),
  width: DS.attr('number'),
  name: DS.attr('string'),
  fluffiness: DS.attr('number'),
  avatarUrl: DS.attr('string'),
  state: DS.attr('string'),

  slave: DS.belongsTo('human')
});
