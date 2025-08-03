import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../../core/registration.service'
import { Router } from '@angular/router';
import { RegistrationStep } from '../../core/registration.model';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime } from 'rxjs';

function passwordMatchValidator (group: AbstractControl) {
   return (group.get('password')?.value === group.get('confirmPassword')?.value) ? null : { mismatch: true };
}

@Component({
   selector: 'app-step1',
   templateUrl: './step1.component.html',
   standalone: true,
   imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule]
})
export class Step1Component implements OnInit {

   registration = inject(RegistrationService);
   router = inject(Router);

   form = new FormGroup({
      email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      confirmPassword: new FormControl('', {nonNullable: true})
   }, { validators: passwordMatchValidator });


   ngOnInit() {
      this.form.valueChanges.pipe(
         debounceTime(200)
      ).subscribe(() => {
         this.registration.updateStepValidity(RegistrationStep.Step1, this.form.valid);
         this.registration.updateStepData(RegistrationStep.Step1, this.form.getRawValue());
      });

      this.form.patchValue(this.registration.formData().step1);
   }

   onSubmit() {
      this.router.navigate(['registration', RegistrationStep.Step2]);
   }
}

