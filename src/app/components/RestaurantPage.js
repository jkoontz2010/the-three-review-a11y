class RestaurantPage {
  constructor($stateParams, restaurantService) {
    console.log("hereere");
    this.restaurantService = restaurantService;
    this.restaurant = null;

    this.restaurantService.getRestaurantById($stateParams.restaurantId).then(restaurant => {
      this.restaurant = restaurant;
    });
  }

  handleReviewWrite() {
    // this.openReviewModal(this.restaurant);
  }
}

angular
  .module('app')
  .component('restaurantPage', {
    templateUrl: 'app/components/RestaurantPage.html',
    controller: RestaurantPage
  });
