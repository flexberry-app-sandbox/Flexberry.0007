import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-0007-отчет-о-сервере', 'Unit | Serializer | i-i-s-0007-отчет-о-сервере', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-0007-отчет-о-сервере',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-0007-ед-изм',
    'transform:i-i-s-0007-режим-сервера',
    'transform:i-i-s-0007-тип-настр',

    'model:i-i-s-0007-должность',
    'model:i-i-s-0007-настройки',
    'model:i-i-s-0007-отчет-о-сервере',
    'model:i-i-s-0007-программы',
    'model:i-i-s-0007-расположение',
    'model:i-i-s-0007-сервер',
    'model:i-i-s-0007-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
