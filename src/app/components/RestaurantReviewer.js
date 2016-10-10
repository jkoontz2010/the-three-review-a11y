class RestaurantReviewer {
  constructor(reviewService) {
    this.reviewService = reviewService;
    this.restaurant = null;

    this.$onInit = function () {
      this.restaurant = this.resolve.restaurant;
      this.user = this.resolve.user;
    };
  }

  submitReview(review) {
    this.reviewService.addReview(this.restaurant.id, review.text, this.user.displayName, review.stars).then(result => {
      console.log(result);
      this.close();
    }).catch(error => {
      console.log(error);
    });
  }

}

angular
  .module('app')
  .component('restaurantReviewer', {
    templateUrl: 'app/components/RestaurantReviewer.html',
    controller: RestaurantReviewer,
    bindings: {
      restaurant: '<',
      user: '<',
      close: '&',
      resolve: '<'
    }
  });

