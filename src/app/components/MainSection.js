class MainSection {
  handleOpenRestaurantPage(restaurant) {
    this.openRestaurantPage(restaurant);
  }

  handleFilter(filter) {
    // expecting filter to only contain one key:value: {"location":"san francisco"}
    this.selectFilter({filter});
  }

  handleSort(sort) {
    // expecting filter to only contain one key:value: {"location":"san francisco"}
    this.selectSort({sort});
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
      selectedFilters: '<',
      selectFilter: '&',
      selectSort: '&',
      user: '<'
    }
  });
