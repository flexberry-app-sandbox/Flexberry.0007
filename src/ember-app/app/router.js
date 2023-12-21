import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-0007-должность-l');
  this.route('i-i-s-0007-должность-e',
  { path: 'i-i-s-0007-должность-e/:id' });
  this.route('i-i-s-0007-должность-e.new',
  { path: 'i-i-s-0007-должность-e/new' });
  this.route('i-i-s-0007-отчет-о-сервере-l');
  this.route('i-i-s-0007-отчет-о-сервере-e',
  { path: 'i-i-s-0007-отчет-о-сервере-e/:id' });
  this.route('i-i-s-0007-отчет-о-сервере-e.new',
  { path: 'i-i-s-0007-отчет-о-сервере-e/new' });
  this.route('i-i-s-0007-расположение-l');
  this.route('i-i-s-0007-расположение-e',
  { path: 'i-i-s-0007-расположение-e/:id' });
  this.route('i-i-s-0007-расположение-e.new',
  { path: 'i-i-s-0007-расположение-e/new' });
  this.route('i-i-s-0007-сервер-l');
  this.route('i-i-s-0007-сервер-e',
  { path: 'i-i-s-0007-сервер-e/:id' });
  this.route('i-i-s-0007-сервер-e.new',
  { path: 'i-i-s-0007-сервер-e/new' });
  this.route('i-i-s-0007-сотрудник-l');
  this.route('i-i-s-0007-сотрудник-e',
  { path: 'i-i-s-0007-сотрудник-e/:id' });
  this.route('i-i-s-0007-сотрудник-e.new',
  { path: 'i-i-s-0007-сотрудник-e/new' });
});

export default Router;
