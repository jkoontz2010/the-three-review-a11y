class AuthService {

  constructor($firebaseAuth) {
    this.Auth = $firebaseAuth();
  }

  register(user) {
    return this.Auth.$createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user) {
    return this.Auth.$signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.Auth.$signOut();
  }

  isLoggedIn() {
    return this.Auth.$getAuth();
  }

}

angular.module('jk.Auth', ["firebase"])
.service('authService', AuthService);
