import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-dropdown/button', 'Integration | Component | bs dropdown/button', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bs-dropdown/button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bs-dropdown/button}}
      template block text
    {{/bs-dropdown/button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
