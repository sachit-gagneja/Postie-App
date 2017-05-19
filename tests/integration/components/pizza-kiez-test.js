import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pizza-kiez', 'Integration | Component | pizza kiez', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pizza-kiez}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pizza-kiez}}
      template block text
    {{/pizza-kiez}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
