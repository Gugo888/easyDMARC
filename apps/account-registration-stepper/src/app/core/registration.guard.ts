import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { RegistrationService } from './registration.service';
import { RegistrationStep } from './registration.model';

export const registrationGuard: CanActivateFn = (route) => {
  const registration = inject(RegistrationService);
  const router = inject(Router);

  const step = route.routeConfig?.path as RegistrationStep;

  if (step === RegistrationStep.Step2 && !registration.stepValidity().step1) {
    return router.parseUrl(`/registration/${RegistrationStep.Step1}`);
  }

  if (step === RegistrationStep.Step3 && !registration.stepValidity().step2) {
    return router.parseUrl(`/registration/${RegistrationStep.Step2}`);
  }

  return true;
};