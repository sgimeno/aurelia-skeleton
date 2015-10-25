// client/src/signup.js

import {inject} from 'aurelia-framework';
import {AuthService} from 'paulvanbladel/aurelia-auth';
import {fromJSON} from '../../config/helpers';

// Using Aurelia's dependency injection, we inject the AuthService
// with the @inject decorator
@inject(AuthService)

export class Signup {

  heading = 'Sign Up';

  // These view models will be given values
  // from the signup form user input
  username = '';
  email = '';
  password = '';
  // Any signup errors will be reported by
  // giving this view model a value in the
  // catch block within the signup method
  signupError = '';


  constructor(auth) {
    this.auth = auth;
  };

  signup() {

    // Object to hold the view model values passed into the signup method
    var userInfo = {
      username: this.username,
      email: this.email,
      password: this.password
    }

    return this.auth.signup(userInfo)
    .then(resp => {
      console.log("Signed Up!", fromJSON(resp.response), resp);
    })
    .catch(error => {
      this.signupError = fromJSON(error.response).message;
      console.log("Signup error: ", fromJSON(error.response), error);
    });

  };
}
