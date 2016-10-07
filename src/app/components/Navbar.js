angular
  .module('app')
  .component('navbar', {
    templateUrl: 'app/components/Navbar.html',
    bindings: {
      openLoginModal: '&',
      openSignupModal: '&',
      logoutUser: '&',
      user: '<'
    }
  });
