import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RegistrationData } from '../registration-data.service';

export const step3Guard: CanActivateFn = () => {
  return inject(RegistrationData).data.step2 !== null;
};
