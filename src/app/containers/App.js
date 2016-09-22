class App {
  constructor() {
    this.restaurants = [initialRestaurants];
  }
}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });
