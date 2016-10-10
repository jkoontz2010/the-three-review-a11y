class RestaurantPage {
  constructor($stateParams, restaurantService, reviewService, $uibModal) {
    this.$uibModal = $uibModal;
    this.restaurantService = restaurantService;
    this.reviewService = reviewService;

    this.restaurant = null;
    this.reviews = null;
    
    //
    //  SET AUTH LISTENER
    //
    this.authHelper.$onAuthStateChanged(user => {
      this.user = user;
    });

    this.restaurantService.getRestaurantById($stateParams.restaurantId).then(restaurant => {
      this.restaurant = restaurant;

      this.reviewService.getReviewsByRestaurant(this.restaurant.id).then(reviews => {
        this.reviews = reviews;
      });
    });
  }

  handleReviewWrite() {
    const modalInstance = this.$uibModal.open({
      component: 'restaurantReviewer',
      resolve: {
        restaurant: function() {
          return this.restaurant;
        }
      },
      animation: true
    });
  }
}

angular
  .module('app')
  .component('restaurantPage', {
    templateUrl: 'app/components/RestaurantPage.html',
    controller: RestaurantPage
  });
