class RestaurantService {

  constructor($firebaseArray, $firebaseObject) {
    const root = firebase.database().ref();
    this.restaurants = root.child("restaurants");
  }

  getRestaurantsByCity(city) {
    return $firebaseArray(this.restaurants.child(city));
  }

  getRestaurantById(city, restaurantId) {
    return $firebaseObject(this.restaurants.child(city).child(restaurantId));
  }
}

angular.module('jk.Restaurants', ["firebase"])
.service('restaurantService', RestaurantService);
