
class RestaurantQuickview {

  handleReviewWrite() {
    this.openReviewModal(this.restaurant);
  }

  handleOpenRestaurantPage() {
    this.openRestaurantPage(this.restaurant);
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
