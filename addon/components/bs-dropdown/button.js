import Component from 'ember-component';
import service from 'ember-service/inject';
import computed from 'ember-computed';

export default Component.extend({
  attributeBindings: 'role',
  role: 'button',
  classNameBindings: ['isOpen:open:closed'],
  dropdownService: service('bs-dropdown'),

  isOpen: computed('dropdownService.activeDropdown', 'dropdownName', function() {
    return this.get('dropdownService.activeDropdown') === this.get('dropdownName');
  }),

  click(event) {
    this._super(event);
    event.stopPropagation();
    this.get('dropdownService').toggleDropdown(this.get('dropdownName'));
  },
});
