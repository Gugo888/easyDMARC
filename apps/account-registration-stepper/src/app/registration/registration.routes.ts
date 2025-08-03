import { Routes } from '@angular/router';
import { RegistrationStep } from '../core/registration.model';
import { StepperContainerComponent } from './stepper-container/stepper-container.component';
import { registrationGuard } from '../core/registration.guard';

export const REGISTRATION_ROUTES: Routes = [
   {
      path: '',
      component: StepperContainerComponent,
      children: [
         {
            path: RegistrationStep.Step1,
            loadComponent: () => import('./steps/step1.component').then(m => m.Step1Component)
         },
         {
            path: RegistrationStep.Step2,
            loadComponent: () => import('./steps/step2.component').then(m => m.Step2Component),
            canActivate: [registrationGuard]
         },
         {
            path: RegistrationStep.Step3,
            loadComponent: () => import('./steps/step3.component').then(m => m.Step3Component),
            canActivate: [registrationGuard]
         },
         { path: '', redirectTo: RegistrationStep.Step1, pathMatch: 'full' }
      ]
   }
];