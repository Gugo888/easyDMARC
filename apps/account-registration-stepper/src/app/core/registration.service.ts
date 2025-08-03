import { Injectable, signal } from '@angular/core';
import { RegistrationData, RegistrationStep } from './registration.model';
import { INITIAL_REGISTRATION_DATA } from './constants';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  stepValidity = signal<Record<RegistrationStep, boolean>>({
    step1: false,
    step2: false,
    step3: false
  });

  formData = signal<RegistrationData>(INITIAL_REGISTRATION_DATA);

  updateStepValidity(step: RegistrationStep, isValid: boolean): void {
    this.stepValidity.update(current => ({ ...current, [step]: isValid }));
  }

  updateStepData<T extends keyof RegistrationData>(step: T, data: RegistrationData[T]): void {
    this.formData.update(current => ({ ...current, [step]: data }));
  }

}