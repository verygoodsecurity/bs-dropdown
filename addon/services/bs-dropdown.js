import Service from 'ember-service';
import Evented from 'ember-evented';
import $ from 'jquery';
import { next } from 'ember-runloop';
import { isBlank } from 'ember-utils';

export default Service.extend(Evented, {
  bodyElementSelector: 'html',
  init() {
    this._super(...arguments);
    return next(this, this._setupDocumentHandlers);
  },

  willDestroy() {
    this._super(...arguments);
    return this._removeDocumentHandlers();
  },

  _setupDocumentHandlers() {
    if (isBlank(this._clickHandler)) {
      this._clickHandler = (() => this.closeDropdowns());
      $(this.get('bodyElementSelector')).on('click', this._clickHandler);
    }
  },

  _removeDocumentHandlers() {
    $(this.get('bodyElementSelector')).off('click', this._clickHandler);
    this._clickHandler = null;
  },

  click(event) {
    return event.stopPropagation();
  },

  closeDropdowns() {
    this.set('activeDropdown', null);
  },

  toggleDropdown(target) {
    const nextActiveDropdown = (target === this.get('activeDropdown')) ?
      null :
      target;
    this.set('activeDropdown', nextActiveDropdown);
  }
});
