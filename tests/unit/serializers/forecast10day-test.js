import { moduleForModel, test } from 'ember-qunit';

moduleForModel('forecast10day', 'Unit | Serializer | forecast10day', {
  // Specify the other units that are required for this test.
  needs: ['serializer:forecast10day']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
