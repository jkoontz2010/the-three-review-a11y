class RestaurantFilter {
  constructor() {
    this.filter = selectedFilters;
  }

  handleChange(filter) {
    this.selectFilter({filter});
  }

  handleSort(sort) {
    this.selectSort({sort});
  }
}

angular
  .module('app')
  .component('restaurantFilter', {
    templateUrl: 'app/components/RestaurantFilter.html',
    controller: RestaurantFilter,
    bindings: {
      selectedFilters: '<',
      selectFilter: '&',
      selectSort: '&'
    }
  });
