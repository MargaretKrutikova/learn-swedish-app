import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
	name = 'john';
	message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
