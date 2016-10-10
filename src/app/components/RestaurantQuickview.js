
class RestaurantQuickview {
  constructor($location, $uibModal) {
    this.$location = $location;
    this.$uibModal = $uibModal;
  }

  handleOpenRestaurantPage(restaurantId) {
    console.log(restaurantId);
    this.$location.url(`/restaurant/${restaurantId}`);
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
  .component('restaurantQuickview', {
    templateUrl: 'app/components/RestaurantQuickview.html',
    controller: RestaurantQuickview,
    bindings: {
      restaurant: '<',
      openReviewModal: '&',
      openRestaurantPage: '&',
      user: '<'
    }
  });
