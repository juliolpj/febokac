import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'febokac';
  loading = false;

  constructor(private router: Router, private spinner: SpinnerService) {
    router.events.subscribe(
      (routerEvent: Event) => this.checkRouterEvent(routerEvent)
    );

    spinner.getSpinner().subscribe(
      (switcher: boolean) => this.loading = switcher
    );
    
  }

  checkRouterEvent( routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd || 
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
          this.loading = false;
    }
  }
}
