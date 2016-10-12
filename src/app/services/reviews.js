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
      return restaurantReviews;
    }).catch(error => {
      return new Error(error);
    });
  }

  getReviewsByRestaurant(restaurantId) {
    return this.reviewsRef.$loaded().then(data => {
      const reviewsObject = this.reviewsRef[restaurantId];
      if (reviewsObject === undefined) {
        return new Error();
      }

      const reviews = Object.keys(reviewsObject).map(key => reviewsObject[key]);
      return reviews;
    }).catch(error => {
      return new Error(error);
    });
  }
}

angular.module('jk.Reviews', ["firebase"])
.service('reviewService', ReviewService);
