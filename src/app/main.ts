import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AdalService} from 'angular2-adal/core';
import {AppComponent} from './components/app.component';
import {SecretService} from './services/secret.service';

bootstrap(AppComponent, [AdalService, SecretService, ROUTER_PROVIDERS, ROUTER_DIRECTIVES]);