import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {GameComponent} from './game/game.component';


@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	directives: [NavbarComponent, ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})
@Routes([
	{path: '/', component: GameComponent},
	{path: '/about', component: AboutComponent},
])
export class AppComponent {
	constructor() {
	}
}
