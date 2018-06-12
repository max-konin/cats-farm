import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'cats-farm/tests/helpers/start-app';
import destroyApp from 'cats-farm/tests/helpers/destroy-app';
import { findAll, visit } from 'ember-native-dom-helpers';

describe('Acceptance | cats index page', function () {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('visit /cats page', function () {
    it('renders table with cats', async function () {
      server.createList('cat', 3);
      await visit('/cats');
      expect(findAll('tr[data-test-cat]')).to.have.lengthOf(3);
    });
  });
});
