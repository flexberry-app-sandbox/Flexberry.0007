import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-0007-сервер', 'Unit | Model | i-i-s-0007-сервер', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
