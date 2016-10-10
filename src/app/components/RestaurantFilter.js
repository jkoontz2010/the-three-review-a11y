class RestaurantFilter {

  handleChange(filter) {
    console.log(filter);
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
