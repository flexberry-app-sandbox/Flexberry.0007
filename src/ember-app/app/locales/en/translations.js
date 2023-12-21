import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS0007ДолжностьLForm from './forms/i-i-s-0007-должность-l';
import IIS0007ОтчетОСервереLForm from './forms/i-i-s-0007-отчет-о-сервере-l';
import IIS0007РасположениеLForm from './forms/i-i-s-0007-расположение-l';
import IIS0007СерверLForm from './forms/i-i-s-0007-сервер-l';
import IIS0007СотрудникLForm from './forms/i-i-s-0007-сотрудник-l';
import IIS0007ДолжностьEForm from './forms/i-i-s-0007-должность-e';
import IIS0007ОтчетОСервереEForm from './forms/i-i-s-0007-отчет-о-сервере-e';
import IIS0007РасположениеEForm from './forms/i-i-s-0007-расположение-e';
import IIS0007СерверEForm from './forms/i-i-s-0007-сервер-e';
import IIS0007СотрудникEForm from './forms/i-i-s-0007-сотрудник-e';
import IIS0007ДолжностьModel from './models/i-i-s-0007-должность';
import IIS0007НастройкиModel from './models/i-i-s-0007-настройки';
import IIS0007ОтчетОСервереModel from './models/i-i-s-0007-отчет-о-сервере';
import IIS0007ПрограммыModel from './models/i-i-s-0007-программы';
import IIS0007РасположениеModel from './models/i-i-s-0007-расположение';
import IIS0007СерверModel from './models/i-i-s-0007-сервер';
import IIS0007СотрудникModel from './models/i-i-s-0007-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-0007-должность': IIS0007ДолжностьModel,
    'i-i-s-0007-настройки': IIS0007НастройкиModel,
    'i-i-s-0007-отчет-о-сервере': IIS0007ОтчетОСервереModel,
    'i-i-s-0007-программы': IIS0007ПрограммыModel,
    'i-i-s-0007-расположение': IIS0007РасположениеModel,
    'i-i-s-0007-сервер': IIS0007СерверModel,
    'i-i-s-0007-сотрудник': IIS0007СотрудникModel
  },

  'application-name': '0007',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '0007',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '0007',
          title: '0007'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-0007-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-0007-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          сервера: {
            caption: 'Сервера',
            title: 'Сервера',
            'i-i-s-0007-сервер-l': {
              caption: 'Сервер',
              title: ''
            },
            'i-i-s-0007-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-0007-расположение-l': {
              caption: 'Расположение',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-0007-должность-l': IIS0007ДолжностьLForm,
    'i-i-s-0007-отчет-о-сервере-l': IIS0007ОтчетОСервереLForm,
    'i-i-s-0007-расположение-l': IIS0007РасположениеLForm,
    'i-i-s-0007-сервер-l': IIS0007СерверLForm,
    'i-i-s-0007-сотрудник-l': IIS0007СотрудникLForm,
    'i-i-s-0007-должность-e': IIS0007ДолжностьEForm,
    'i-i-s-0007-отчет-о-сервере-e': IIS0007ОтчетОСервереEForm,
    'i-i-s-0007-расположение-e': IIS0007РасположениеEForm,
    'i-i-s-0007-сервер-e': IIS0007СерверEForm,
    'i-i-s-0007-сотрудник-e': IIS0007СотрудникEForm
  },

});

export default translations;
