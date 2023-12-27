import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.курсовая.caption'),
          title: i18n.t('forms.application.sitemap.курсовая.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сотрудники.title'),
            children: [{
              link: 'i-i-s-0007-должность-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-0007-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-0007-должность-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-0007-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-0007-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сотрудники.i-i-s-0007-сотрудник-l.title'),
              icon: 'tasks',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.курсовая.сервера.caption'),
            title: i18n.t('forms.application.sitemap.курсовая.сервера.title'),
            children: [{
              link: 'i-i-s-0007-сервер-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-0007-сервер-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-0007-сервер-l.title'),
              icon: 'phone',
              children: null
            }, {
              link: 'i-i-s-0007-отчет-о-сервере-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-0007-отчет-о-сервере-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-0007-отчет-о-сервере-l.title'),
              icon: 'paperclip',
              children: null
            }, {
              link: 'i-i-s-0007-расположение-l',
              caption: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-0007-расположение-l.caption'),
              title: i18n.t('forms.application.sitemap.курсовая.сервера.i-i-s-0007-расположение-l.title'),
              icon: 'chart line',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})