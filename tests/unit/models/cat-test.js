import { expect } from 'chai';
import { describe, it, context } from 'mocha';
import { setupModelTest } from 'ember-mocha';

describe('Unit | Model | cat', function() {
  setupModelTest('cat', {
    needs: ['model:human']
  });

  // Replace this with your real tests.
  it('exists', function() {
    let model = this.subject();
    // var store = this.store();
    expect(model).to.be.ok;
  });
  describe('#density', function () {
    it("returns cat's density", function () {
      const model = this.subject({weight: 2, height: 10, width: 10});
      expect(model.get('density')).to.eq(0.02);
    });
  });
  describe('#cuteCoef', function () {
    it('returns interpolated cute coef', function () {
      const model = this.subject({weight: 1, height: 1, width: 1, fluffiness: 1});
      expect(model.get('cuteCoef')).to.eq(1);
    });
  });
  describe('#normalizedCuteCoef', function () {
    context('not max or min', function () {
      it('returns normalized cute coef', function () {
        const model = this.subject({weight: 1, height: 10, width: 10, fluffiness: 50});
        expect(model.get('normalizedCuteCoef')).to.eq(0.5);
      });
    });
    context('max cute', function () {
      it('returns normalized cute coef', function () {
        const model = this.subject({weight: 25, height: 100, width: 100, fluffiness: 100});
        expect(model.get('normalizedCuteCoef')).to.eq(100);
      });
    });
  });
});
