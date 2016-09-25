class StarReview {
  constructor() {
    this.stars = this.stars || 0;
  }
}

angular
  .module('app')
  .component('starReview', {
    templateUrl: 'app/components/StarReview.html',
    bindings: {
      stars: '<'
    }
  });
