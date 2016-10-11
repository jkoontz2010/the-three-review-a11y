class MainPage {
  constructor($uibModal, $firebaseAuth, restaurantService) {
    this.restaurants = [];
    this.$uibModal = $uibModal;
    this.authHelper = $firebaseAuth();
    this.restaurantService = restaurantService;
    this.selectedFilters = selectedFilters;

    this.user = null;
    this.restaurants = [];

    //
    //  GET DATA
    //
    this.restaurantService.getRestaurants().then(restaurants => {
      this.restaurants = restaurants;
    });

    //
    //  SET AUTH LISTENER
    //
    this.authHelper.$onAuthStateChanged(user => {
      this.user = user;
    });
  }

  selectFilter(filter) {
    if (filter !== undefined) {
      Object.keys(filter).forEach(key => {
        selectedFilters[key] = filter[key];
      });
    }
  }

  selectSort(sort) {
    if (sort !== undefined) {
      selectedFilters.sort = sort.sort;
    }
  }

}

angular
  .module('app')
  .component('mainPage', {
    templateUrl: 'app/containers/App.html',
    controller: MainPage
  });
