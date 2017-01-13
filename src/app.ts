import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Dynamic Pricing';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'routes/welcome/welcome', nav: true, title: 'Welcome' },
      { route: 'libraries', name:'libraries', moduleId:'routes/libraries/libraries', nav: true, title: 'Libraries'}
    ]);

    this.router = router;
  }
}
