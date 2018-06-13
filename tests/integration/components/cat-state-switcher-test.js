import { expect } from 'chai';
import { describe, it, context, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, click } from 'ember-native-dom-helpers';
import EmberObject from '@ember/object';

describe('Integration | Component | cat-state-switcher', function() {
  setupComponentTest('cat-state-switcher', {
    integration: true
  });

  describe('render', function () {
    let actionTriggered;
    beforeEach(function () {
      actionTriggered = false;
      this.set('externalAction', () => actionTriggered = true);
    });
    context('when state is hungry', function () {
      beforeEach(function () {
        this.set('cat', EmberObject.create({ state: 'hungry' }));
        this.render(hbs`{{cat-state-switcher cat=cat onChange=(action externalAction)}}`);
      });
      it('renders feed btn', function () {
        expect(find('button.ui.button')).to.have.text('feed');
      });
      describe('click on feed btn', function () {
        beforeEach(function () {
          click('button');
        });
        it("updates cat's state", function () {
          expect(this.get('cat.state')).to.eq('sleep');
        });
        it('triggers action', function () {
          expect(actionTriggered).to.be.true;
        });
      });
    });
    context('when state is sleep', function () {
      beforeEach(function () {
        this.set('cat', EmberObject.create({ state: 'sleep' }));
        this.render(hbs`{{cat-state-switcher cat=cat onChange=(action externalAction)}}`);
      });
      it('renders wake up btn', function () {
        expect(find('button.ui.button')).to.have.text('wake up');
      });
      describe('click on feed btn', function () {
        beforeEach(function () {
          click('button');
        });
        it("updates cat's state", function () {
          expect(this.get('cat.state')).to.eq('evil')
        });
        it('triggers action', function () {
          expect(actionTriggered).to.be.true;
        });
      });
    });
    context('when state is evil', function () {
      beforeEach(function () {
        this.set('cat', EmberObject.create({ state: 'evil' }));
        this.render(hbs`{{cat-state-switcher cat=cat onChange=(action externalAction)}}`);
      });
      it('renders caress btn', function () {
        expect(find('button.ui.button')).to.have.text('caress');
      });
      describe('click on caress btn', function () {
        beforeEach(function () {
          click('button');
        });
        it("updates cat's state", function () {
          expect(this.get('cat.state')).to.eq('hungry')
        });
        it('triggers action', function () {
          expect(actionTriggered).to.be.true;
        });
      });
    });
  });
});
