import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RegistrationData } from '../registration-data.service';

export const step2Guard: CanActivateFn = () => {
  return inject(RegistrationData).data.step1 !== null;
};
