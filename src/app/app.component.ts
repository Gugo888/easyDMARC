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
      this.stepIndex = this.routes.indexOf(this.route.snapshot.firstChild?.firstChild?.url[0].path ?? 'step1');

    });
  }
}
