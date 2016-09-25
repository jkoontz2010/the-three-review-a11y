angular
  .module('app')
  .component('restaurantReview', {
    templateUrl: 'app/components/RestaurantReview.html',
    bindings: {
      review: '<'
    }
  });
