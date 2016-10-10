class RestaurantService {

  constructor($firebaseObject) {
    const root = firebase.database().ref();
    this.restaurantsRef = $firebaseObject(root.child("restaurants"));
  }

  getRestaurantById(restaurantId) {
    return this.restaurantsRef.$loaded().then(data => {
      const restaurant = this.restaurantsRef[restaurantId];

      if (restaurant === undefined) {
        return new Error();
      }
      return restaurant;
    }).catch(error => {
      return new Error(error);
    });
  }

  getRestaurants() {
    return this.restaurantsRef.$loaded().then(data => {
      let results = [];
      angular.forEach(this.restaurantsRef, (value, key) => {
        value.id = key;
        results.push(value);
      });

      return results;
    }).catch(error => {
      return new Error(error);
    });
  }
}

angular.module('jk.Restaurants', ["firebase"])
.service('restaurantService', RestaurantService);
