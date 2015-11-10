import {AuthorizeStep} from 'paulvanbladel/aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

// Using Aurelia's dependency injection, we inject Router
// with the @inject decorator
@inject(Router)

export default class {

  constructor(router) {
    this.router = router;
  }

  configure() {
    let appRouterConfig = function(config) {
      config.title = 'Aurelia';

      // Here we hook into the authorize extensibility point
      // to add a route filter so that we can require authentication
      // on certain routes
      config.addPipelineStep('authorize', AuthorizeStep);

      // Here we describe the routes we want along with information about them
      // such as which they are accessible at, which module they use, and whether
      // they should be placed in the navigation bar
      config.map([
        {
          route: ['', 'welcome'],
          name: 'welcome',
          moduleId: 'views/welcome/welcome',
          nav: true,
          title: 'Welcome'
        },
        {
          route: 'users',
          name: 'users',
          moduleId: 'views/users/users',
          nav: true,
          title: 'Github Users'
        },
        {
          route: 'child-router',
          name: 'child-router',
          moduleId: 'views/child-router/child-router',
          nav: true,
          title: 'Child Router',
          auth: true
        },
        {
          route: 'login',
          name: 'login',
          moduleId: 'views/login/login',
          nav: false,
          title: 'Login',
          authRoute: true
        },
        {
          route: 'signup',
          name: 'signup',
          moduleId: 'views/signup/signup',
          nav: false,
          title: 'Sign up',
          authRoute: true
        },
        {
          route: 'logout',
          name: 'logout',
          moduleId: 'views/logout/logout',
          nav: false,
          title: 'Logout',
          authRoute: true
        }
      ]);
    };

    // The router is configured with what we specify in the appRouterConfig
    this.router.configure(appRouterConfig);
  }
}
