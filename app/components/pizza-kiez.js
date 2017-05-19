import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['pizza-slice'],

  filteredPlaces: Ember.computed.filter('places', function (place, index, array) {
    return place.kiez === this.get('kiez.name');
  })
});
