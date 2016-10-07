class App {
  constructor($uibModal, $firebaseAuth) {
    this.restaurants = [];
    this.$uibModal = $uibModal;
    this.authHelper = $firebaseAuth();
    this.user = null;

    this.authHelper.$onAuthStateChanged(user => {
      this.user = user;
    });
  }

  openLoginModal() {
    const modalInstance = this.$uibModal.open({
      component: 'loginForm',
      animation: true
    });
  }

  openSignupModal() {
    const modalInstance = this.$uibModal.open({
      component: 'signupForm',
      animation: true
    });
  }

  logoutUser() {
    this.authHelper.$signOut();
  }
}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });
