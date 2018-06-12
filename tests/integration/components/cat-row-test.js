import { expect } from 'chai';
import { describe, it, context, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | cat-row', function() {
  setupComponentTest('cat-row', {
    integration: true
  });

  describe('render', function () {
    context('when cat is hungry', function () {
      beforeEach(function () {
        this.set('cat', { state: 'hungry' });
        this.render(hbs`{{cat-row cat=cat}}`);
      });
      it('renders warning tr', function () {
        expect(find('tr')).to.have.class('warning');
      });
      it('renders yellow label', function () {
        expect(find('tr span.label')).to.have.class('yellow');
      });
    });
    context('when cat is sleep', function () {
      beforeEach(function () {
        this.set('cat', { state: 'sleep' });
        this.render(hbs`{{cat-row cat=cat}}`);
      });
      it('renders not warning tr', function () {
        expect(find('tr')).not.to.have.class('warning');
      });
      it('renders not error tr', function () {
        expect(find('tr')).not.to.have.class('error');
      });
      it('renders red label', function () {
        expect(find('tr span.label')).to.have.class('green');
      });
    });
    context('when cat is evil', function () {
      beforeEach(function () {
        this.set('cat', { state: 'evil' });
        this.render(hbs`{{cat-row cat=cat}}`);
      });
      it('renders error tr', function () {
        expect(find('tr')).to.have.class('error');
      });
      it('renders red label', function () {
        expect(find('tr span.label')).to.have.class('red');
      });
    });
  });
});
