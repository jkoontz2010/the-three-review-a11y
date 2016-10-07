class SignupForm {

  constructor(authService, $location) {
    this.authService = authService;
    this.signup = {};
    this.user = {};
    this.pwdPattern = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");
  }

  register(newUser) {
    return this.authService.register(newUser).then(user => {
      return this.authService.login(user).then(user => {
        this.updateDisplayName(user, newUser.name).then(user => {
          this.close(user);
        });
      });
    }).catch(error => {
      // auth/augment-error is falsely thrown. AngularFire bug, treat as successful signup.
      if (error.code === "auth/argument-error") {
        return this.authService.login(newUser).then(user => {
          this.updateDisplayName(user, newUser.name).then(user => {
            this.close(user);
          });
        });
      } else {
        this.error = error;
      }
    });
  }

  updateDisplayName(user, displayName) {
    return user.updateProfile({
      displayName
    }).then(() => {
      // Update successful.
    }, error => {
      // An error happened.
      this.error = error;
    });
  }
}

// Close binding is from $uibModalInstance.
angular
  .module('app')
  .component('signupForm', {
    controller: SignupForm,
    templateUrl: 'app/components/SignupForm.html',
    bindings: {
      resolve: '<',
      close: '&'
    }
  });
