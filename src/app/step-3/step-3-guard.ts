import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RegistrationData } from '../registration-data.service';

export const step3Guard: CanActivateFn = () => {
  const regData = inject(RegistrationData);
  const router = inject(Router);

  if (regData.data.step2 !== null) {
    return true;
  }

  router.navigate(['/step1']);
  return false;

};
