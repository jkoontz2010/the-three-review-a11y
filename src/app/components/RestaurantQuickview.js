
class RestaurantQuickview {
  constructor($location, $uibModal) {
    this.$location = $location;
    this.$uibModal = $uibModal;
  }

  handleOpenRestaurantPage(restaurantId) {
    this.$location.url(`/restaurant/${restaurantId}`);
  }

  handleReviewWrite() {
    if (this.user === null || this.user === undefined) {
      const loginInstance = this.$uibModal.open({
        component: 'loginForm',
        animation: true,
        resolve: {
          message: () => {
            return "Please log in to write a review!";
          }
        }
      });

      loginInstance.result.then(user => {
        this.user = user;
        if (this.user) {
          this.handleReviewWrite();
        }
      });
    } else {
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

      modalInstance.result.then(reviews => {
        this.reviews = reviews;
      });
    }
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
