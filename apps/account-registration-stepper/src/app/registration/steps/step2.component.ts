import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../../core/registration.service'
import { Router } from '@angular/router';
import { Step2FormData, Industry, Role, RegistrationStep } from '../../core/registration.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime } from 'rxjs';
import { INDUSTRIES, ROLES } from '../../core/constants';

@Component({
   selector: 'app-step2',
   templateUrl: './step2.component.html',
   standalone: true,
   imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule
   ]
})
export class Step2Component implements OnInit {

   registration = inject(RegistrationService);
   router = inject(Router);
   roles = ROLES;
   industries = INDUSTRIES;
   
   form = new FormGroup({
      industry: new FormControl(Industry.IT, {nonNullable: true, validators: [Validators.required]}),
      experienceInYears: new FormControl(20, {nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(50)]}),
      yourRole: new FormControl(Role.Developer, {nonNullable: true, validators: [Validators.required]})
   });


   ngOnInit() {
      this.form.valueChanges.pipe(
         debounceTime(200)
      ).subscribe(() => {
         this.registration.updateStepData(RegistrationStep.Step2, this.form.getRawValue());
         this.registration.updateStepValidity(RegistrationStep.Step2, this.form.valid);
      });

      this.form.patchValue(this.registration.formData().step2);
   }

   onSubmit() {
      this.router.navigate(['registration', RegistrationStep.Step3]);
   }
}