class RestaurantReviwer {
  constructor(reviewService) {
    this.reviewService = reviewService;
  }

}

angular
  .module('app')
  .component('restaurantReviewer', {
    templateUrl: 'app/components/RestaurantReviewer.html',
    bindings: {
      restaurant: '<'
    }
  });

