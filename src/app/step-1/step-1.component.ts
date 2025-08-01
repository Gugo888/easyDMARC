import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { IStep1FormData } from './step-1.model';
import { passwordMatch } from './step-1.validator';
import { RegistrationData } from '../registration-data.service';
import { Router } from '@angular/router';

type Step1Form = FormGroup<{
  [K in keyof IStep1FormData]: FormControl<IStep1FormData[K]>;
}>

@Component({
  selector: 'app-step-1',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss'
})
export class Step1Component {

  registrationData = inject(RegistrationData);
  router = inject(Router);

  step1Form: Step1Form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    confirmPassword: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  }, { validators: passwordMatch });

  next() {
    this.registrationData.saveStep1Data(this.step1Form.getRawValue());
    this.router.navigate(['step2'])
  }
}