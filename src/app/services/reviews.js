class ReviewService {
  constructor($http) {
    this.$http = $http;
  }

}

angular.module('jk.Reviews', ["firebase"])
.service('reviewService', ReviewService);
