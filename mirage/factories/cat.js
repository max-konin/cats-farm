import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  weight() { return faker.random.number(); },
  height() { return faker.random.number(); },
  width() { return faker.random.number(); },
  name() { return faker.name.firstName(); },
  fluffiness() { return faker.random.number(); },
  avatarUrl() { return faker.image.cats(100, 100, true); }
});
