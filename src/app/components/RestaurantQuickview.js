
class RestaurantQuickview {
  constructor($location) {
    this.$location = $location;
  }
  handleReviewWrite() {
    this.openReviewModal(this.restaurant);
  }

  handleOpenRestaurantPage(restaurantId) {
    console.log(restaurantId);
    this.$location.path(`/restaurant/${restaurantId}`);
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
      openRestaurantPage: '&'
    }
  });
