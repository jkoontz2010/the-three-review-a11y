class ReviewService {
  constructor($firebaseArray, $firebaseObject) {
    this.root = firebase.database().ref();
    this.reviewsRef = $firebaseObject(this.root.child("reviews"));
    this.$firebaseArray = $firebaseArray;
  }

  addReview(restaurantId, review, reviewer, stars) {
    const restaurantReviews = this.$firebaseArray(this.root.child("reviews").child(restaurantId));
    const reviewObject = {
      review,
      reviewer,
      stars,
      dateReviewed: new Date()
    };

    return restaurantReviews.$add(reviewObject).then(response => {
    }).catch(error => {
      return new Error(error);
    });
  }

  getReviewsByRestaurant(restaurantId) {
    return this.reviewsRef.$loaded().then(data => {
      const review = this.reviewsRef[restaurantId];

      if (review === undefined) {
        return new Error();
      }
      return review;
    }).catch(error => {
      return new Error(error);
    });
  }
}

angular.module('jk.Reviews', ["firebase"])
.service('reviewService', ReviewService);
