// import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AuthService} from 'paulvanbladel/aurelia-auth';

@inject(AuthService)

export class Login {
  heading = 'Login';
  username = '';
  password = '';

  constructor(auth){
    this.auth = auth;
  }

  // configureRouter(config, router) {
  //   config.map([
  //     { route: ['', 'users'], name: 'users', moduleId: 'views/users/users', nav: true, title: 'Github Users' }
  //   ]);
  //
  //   this.router = router;
  // }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corrresponding import above.
  // @computedFrom('firstName', 'lastName')
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  submit() {
    var userInfo = {
      username: this.username,
      password: this.password
    };

    return this.auth.login(userInfo)
      .then(response => {
        console.log("Login response: " + response);
      })
      .catch(error => {
        this.loginError = error.response;
      });
  }

  // canDeactivate() {
  //
  // }
}

// export class UpperValueConverter {
//   toView(value) {
//     return value && value.toUpperCase();
//   }
// }