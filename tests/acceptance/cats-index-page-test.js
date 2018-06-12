import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'cats-farm/tests/helpers/start-app';
import destroyApp from 'cats-farm/tests/helpers/destroy-app';
import { findAll, visit, find } from 'ember-native-dom-helpers';

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
  describe('render different tr color', function () {
    beforeEach(async function () {
      server.create('cat', { state: 'hungry' });
      server.create('cat', { state: 'evil' });
      server.create('cat', { state: 'sleep' });
      await visit('/cats');
    });
    it('renders green tr', function () {
      expect(find('tr .green')).to.exist;
    });
    it('renders red tr', function () {
      expect(find('tr .red')).to.exist;
    });
    it('renders yellow tr', function () {
      expect(find('tr .yellow')).to.exist;
    });
  });
});
