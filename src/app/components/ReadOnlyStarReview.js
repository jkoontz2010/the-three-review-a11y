class ReadOnlyStarReview {
  constructor() {
    this.$onInit = function () {
      this.starCount = Math.ceil(this.stars) || 0;
    };
    this.$onChanges = function (changes) {
      if (changes.stars) {
        this.starCount = Math.ceil(changes.stars.currentValue);
      }
    };
  }
}

angular
  .module('app')
  .component('readOnlyStarReview', {
    templateUrl: 'app/components/ReadOnlyStarReview.html',
    controller: ReadOnlyStarReview,
    bindings: {
      stars: '<'
    }
  });
