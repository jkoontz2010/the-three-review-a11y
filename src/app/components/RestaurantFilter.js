class RestaurantFilter {
  constructor() {
    this.filter = selectedFilters;
  }

  handleChange(filter) {
    this.selectFilter({filter});
  }
}

angular
  .module('app')
  .component('restaurantFilter', {
    templateUrl: 'app/components/RestaurantFilter.html',
    controller: RestaurantFilter,
    bindings: {
      selectedFilters: '<',
      selectFilter: '&'
    }
  });
