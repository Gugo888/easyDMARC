import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [MatStepperModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  router = inject(Router);
  route = inject(ActivatedRoute)
  routes = ['step1', 'step2', 'step3']
  stepIndex = 0;

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const path = this.route.snapshot.firstChild?.firstChild?.url[0]?.path;
      if (this.routes.includes(path ?? '')) {
        this.stepIndex = this.routes.indexOf(path!);
      }
      else if (path === 'home') {
        this.stepIndex = this.routes.length - 1;
      }
      else {
        this.stepIndex = 0;
      }
    });
  }
}
