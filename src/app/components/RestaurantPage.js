class RestaurantPage {

  handleReviewWrite() {
    this.openReviewModal(this.restaurant);
  }
}

angular
  .module('app')
  .component('restaurantPage', {
    templateUrl: 'app/components/RestaurantPage.html',
    bindings: {
      restaurant: '<',
      reviews: '<',
      openReviewModal: '&'
    }
  });
