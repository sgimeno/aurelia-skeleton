import {AuthorizeStep} from 'paulvanbladel/aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

// Using Aurelia's dependency injection, we inject Router
// with the @inject decorator
@inject(Router)

export default class {

  constructor(router) {
    this.router = router;
  };

  configure() {
    var appRouterConfig = function(config) {
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
          nav: false,
          title: 'Child Router'
        },
        {
          route: 'login',
          name: 'login',
          moduleId: 'views/login/login',
          nav: true,
          title: 'Login'
        }
      ]);
    };

    // The router is configured with what we specify in the appRouterConfig
    this.router.configure(appRouterConfig);
  };
}
