class LoginForm {

  constructor(authService, $uibModal) {
    this.authService = authService;
    this.$uibModal = $uibModal;
    this.login = {};
    this.user = {};
    this.error = null;

    this.$onInit = function () {
      this.message = this.resolve.message;
    };
  }

  loginUser(user) {
    return this.authService.login(user).then(user => {
      this.close({$value: user});
    }).catch(error => {
      if (error.code === "auth/user-not-found" || 400) {
        this.error = "Email and/or password doesn't match our records.";
      }
    });
  }

  openSignup() {
    this.close();
    const modalInstance = this.$uibModal.open({
      component: 'signupForm',
      animation: true
    });
  }
}

// Close binding is from $uibModalInstance.
angular
  .module('app')
  .component('loginForm', {
    controller: LoginForm,
    templateUrl: 'app/components/LoginForm.html',
    bindings: {
      resolve: '<',
      close: '&'
    }
  });
