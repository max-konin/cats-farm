import { describe, it, beforeEach, afterEach, context } from 'mocha';
import { expect } from 'chai';
import startApp from 'cats-farm/tests/helpers/start-app';
import destroyApp from 'cats-farm/tests/helpers/destroy-app';
import { visit, find, click } from 'ember-native-dom-helpers';

describe('Acceptance | cat page', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('visit cat page', function () {
    let cat, slave;
    beforeEach(async function () {
      slave = server.create('human');
      cat = server.create('cat', { slaveId: slave.id });
      await visit(`/cats/${cat.id}`);
    });
    it('renders an avatar', function () {
      expect(find('[data-test-avatar]')).to.exist;
    });
    it('renders info about slave', function () {
      expect(find('[data-test-slave-name]')).to.have.trimmed.text(slave.name);
    });
  });
  describe('actions', function () {
    let cat;
    context('when the cat is hungry', function () {
      beforeEach(async function () {
        cat = server.create('cats', { state: 'hungry'});
        await visit(`/cats/${cat.id}`);
      });
      describe('click to "feed"', function () {
        beforeEach(async function () {
          await click('[data-test-switch-state] button');
        });
        it("changes cat's state on the server", function () {
          expect(server.db.cats.find(cat.id).state).to.eq('sleep');
        });
        it('changes state on UI', function () {
          expect(find('[date-test-state]')).to.have.text('sleep');
        })
      });
    });
    context('when the cat is sleep', function () {
      beforeEach(async function () {
        cat = server.create('cats', { state: 'sleep'});
        await visit(`/cats/${cat.id}`);
      });
      describe('click to "wake up Neo"', function () {
        beforeEach(async function () {
          await click('[data-test-switch-state] button');
        });
        it("changes cat's state on the server", function () {
          expect(server.db.cats.find(cat.id).state).to.eq('evil');
        });
        it('changes state on UI', function () {
          expect(find('[date-test-state]')).to.have.text('evil');
        })
      });
    });
    context('when the cat is evil', function () {
      beforeEach(async function () {
        cat = server.create('cats', { state: 'evil'});
        await visit(`/cats/${cat.id}`);
      });
      describe('click to switch state btn', function () {
        beforeEach(async function () {
          await click('[data-test-switch-state] button');
        });
        it("changes cat's state on the server", function () {
          expect(server.db.cats.find(cat.id).state).to.eq('hungry');
        });
        it('changes state on UI', function () {
          expect(find('[date-test-state]')).to.have.text('hungry');
        })
      });
    });
  });
});
