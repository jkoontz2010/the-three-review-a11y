class LoginForm {

  constructor(authService) {
    this.authService = authService;
    this.login = {};
    this.user = {};
    this.error = null;
  }

  loginUser(user) {
    return this.authService.login(user).then(user => {
      this.close();
    }).catch(error => {
      if (error.code === "auth/user-not-found" || 400) {
        this.error = "Email and/or password doesn't match our records.";
      }
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
