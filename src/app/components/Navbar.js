class Navbar {
  constructor($uibModal, $firebaseAuth) {
    this.$uibModal = $uibModal;
    this.authHelper = $firebaseAuth();
    this.user = null;

    //
    //  SET AUTH LISTENER
    //
    this.authHelper.$onAuthStateChanged(user => {
      this.user = user;
    });
  }
  openLoginModal() {
    const modalInstance = this.$uibModal.open({
      component: 'loginForm',
      animation: true,
      resolve: {
        message: () => {
          return "Log in!";
        }
      }
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
  .component('navbar', {
    templateUrl: 'app/components/Navbar.html',
    controller: Navbar
  });
