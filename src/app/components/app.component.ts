import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from '@angular/router-deprecated';
import {HomeComponent} from './home/home.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AdalService} from 'angular2-adal/core';
import {SecretService} from '../services/secret.service';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: '<div><router-outlet></router-outlet></div>'
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true }
])
export class AppComponent {
    constructor(
        private adalService: AdalService,
        private secretService: SecretService
    ) {
        this.adalService.init(this.secretService.adalConfig);
    }
}
