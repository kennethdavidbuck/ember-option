import Ember from 'ember';
import extendObjectWithOptionInitializer from 'ember-option/initializers/extend-object-with-option';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | extend object with option', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  extendObjectWithOptionInitializer(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});