import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  weight() { return faker.random.number({min: 1, max: 25}); },
  height() { return faker.random.number({min: 1, max: 100}); },
  width() { return faker.random.number({min: 1, max: 100}); },
  name() { return faker.name.firstName(); },
  fluffiness() { return faker.random.number({min: 0, max: 100}); },
  avatarUrl() { return faker.image.cats(100, 100, true); },
  state: faker.list.random('hungry', 'evil', 'sleep'),
  slave: association()
});
