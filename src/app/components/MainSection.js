class MainSection {
  handleOpenRestaurantPage(restaurant) {
    this.openRestaurantPage(restaurant);
  }
}

angular
  .module('app')
  .component('mainSection', {
    templateUrl: 'app/components/MainSection.html',
    controller: MainSection,
    bindings: {
      restaurants: '<',
      openReviewModal: '&',
      openRestaurantPage: '&',
      selectedFilters: '<'
    }
  });
