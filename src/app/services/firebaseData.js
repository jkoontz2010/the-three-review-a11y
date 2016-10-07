class FirebaseDataService {

  constructor() {
    const root = firebase.database().ref();
    this.restaurants = root.child("restaurants");
    this.reviews = root.child("reviews");
    this.users = root.child("users");
  }

}

angular.module('jk.FirebaseData', ["firebase"])
.service('firebaseDataService', FirebaseDataService);
