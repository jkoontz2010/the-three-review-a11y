class RestaurantPage {
  constructor($stateParams, restaurantService, reviewService, $uibModal, $firebaseAuth) {
    this.$uibModal = $uibModal;
    this.restaurantService = restaurantService;
    this.reviewService = reviewService;
    this.authHelper = $firebaseAuth();

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
      this.restaurant.id = $stateParams.restaurantId;
    });

    this.reviewService.getReviewsByRestaurant($stateParams.restaurantId).then(reviews => {
      this.reviews = reviews;
    });
  }

  handleReviewWrite() {
    const modalInstance = this.$uibModal.open({
      component: 'restaurantReviewer',
      resolve: {
        restaurant: () => {
          return this.restaurant;
        },
        user: () => {
          return this.user;
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
