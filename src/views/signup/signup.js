// src/views/signup/signup.js
import {inject} from 'aurelia-framework';
import {AuthService} from 'paulvanbladel/aurelia-auth';

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
  }

  signup() {
    // Object to hold the view model values passed into the signup method
    let userInfo = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    return this.auth.signup(userInfo)
    .then(resp => {
      console.log('Signed Up!', resp);
    })
    .catch(error => {
      this.signupError = error;
      console.log('Signup error: ', error);
    });
  }
}
