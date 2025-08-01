import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { RegistrationData } from '../registration-data.service';

export const homeGuard: CanActivateFn = () => {
  return inject(RegistrationData).data.step3 !== null;
};
