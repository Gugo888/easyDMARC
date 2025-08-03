import { Component, computed, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationService } from '../../core/registration.service';
import { RegistrationStep } from '../../core/registration.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { STEPS } from '../../core/constants';

@Component({
   selector: 'app-stepper-container',
   standalone: true,
   imports: [
      MatStepperModule,
      RouterModule,
      MatButtonModule
   ],
   templateUrl: './stepper-container.component.html',
})
export class StepperContainerComponent {
   registration = inject(RegistrationService);
   router = inject(Router);
   RegistrationStep = RegistrationStep;

   currentStepIndex = toSignal(
    this.router.events.pipe(
      map(() => {
        const url = this.router.url;
        if (url.includes(RegistrationStep.Step3)) return 2;
        if (url.includes(RegistrationStep.Step2)) return 1;
        return 0;
      })
    ),
    { initialValue: 0 }
  );

  toStep(index: number) {
   this.router.navigate(['registration', STEPS[index]])
  }
}