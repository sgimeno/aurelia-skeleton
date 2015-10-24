// import {computedFrom} from 'aurelia-framework';

export class Login {
  heading = 'Login';
  email = '';
  password = '';

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
    // this.previousValue = this.fullName;
    alert(`Welcome, ${this.email}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
