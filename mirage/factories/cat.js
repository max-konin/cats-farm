import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  weight() { return faker.random.number({min: 1, max: 25}); },
  height() { return faker.random.number({min: 1, max: 100}); },
  width() { return faker.random.number({min: 1, max: 100}); },
  name() { return faker.name.firstName(); },
  fluffiness() { return faker.random.number({min: 0, max: 100}); },
  avatarUrl() { return faker.image.cats(100, 100, true); },
  state: faker.list.random('hungry', 'evil', 'sleep'),

  afterCreate(cat, server) {
    server.createList('human', 3, { cat });
  }
});
