import Component from 'ember-component';
import computed from 'ember-computed';
import service from 'ember-service/inject';
import run from 'ember-runloop';

export default Component.extend({
  classNames: 'dropdown-menu',
  classNameBindings: ['isOpen:open'],
  dropdownService: service('bs-dropdown'),
  isOpen: computed('dropdownService.activeDropdown', 'name', function() {
    return this.get('dropdownService.activeDropdown') === this.get('name');
  }),

  closeOnClick: false,

  click(event) {
    this._super(event);
    event.stopPropagation();
    if (this.get('closeOnClick')) {
      this.get('dropdownService').closeDropdowns();
    }
  },
});
