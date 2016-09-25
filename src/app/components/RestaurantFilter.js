/*
<div class="row">
	<div class="col-sm-8">
		<div class="col-sm-4">
			<!-- radio buttons for location, no particular order ;) -->
			<input type="radio" ng-model="filter.city" value="Austin" checked>
			<input type="radio" ng-model="filter.city" value="San Francisco">
			<input type="radio" ng-model="filter.city" value="New York">
		</div>
		<div class="col-sm-4">
			<!-- radio buttons for best reveiwed and most reviewed -->
			<input type="radio" ng-model="filter.bestmost">
			<input type="radio" ng-model="filter.bestmost">
		</div>
		<div class="col-sm-4">
			<!-- $$$ filter and cuisine combobox -->
			<cost-range mode="select" ng-model="filter.cost"></cost-range>
			<cuisine-selector ng-model="filter.cuisine"></cuisine-selector>
		</div>
	</div>
</div>
*/

class RestaurantFilter {

}

angular
  .module('app')
  .component('restaurantFilter', {
    templateUrl: 'app/components/RestaurantFilter.html',
    controller: RestaurantFilter,
    bindings: {
      selectedFilters: '='
    }
  });
