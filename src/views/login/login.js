// import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AuthService} from 'paulvanbladel/aurelia-auth';

//TODO: ask about Aurelia injection of functions {fromJSON}
@inject(AuthService)
export class Login {
  heading = 'Login';
  username = '';
  password = '';
  loginError = '';

  constructor(auth) {
    this.auth = auth;
  }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corrresponding import above.
  // @computedFrom('firstName', 'lastName')
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  submit() {
    let userInfo = {
      username: this.username,
      password: this.password
    };

    return this.auth.login(userInfo)
      .then(resp => {
        console.log('Login resp: ', resp);
      })
      .catch(error => {
        this.loginError = error;
        console.log('Login error: ', error);
      });
  }
}

// export class UpperValueConverter {
//   toView(value) {
//     return value && value.toUpperCase();
//   }
// }
