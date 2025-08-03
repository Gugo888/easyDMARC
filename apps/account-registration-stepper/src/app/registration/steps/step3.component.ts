import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/registration.service';
import { RegistrationStep } from '../../core/registration.model';
import { debounceTime } from 'rxjs';

@Component({
   selector: 'app-step3',
   standalone: true,
   imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
   ],
   templateUrl: './step3.component.html'
})
export class Step3Component implements OnInit {

   registration = inject(RegistrationService);
   router = inject(Router);

   form = new FormGroup({
      aboutUs: new FormControl('', { nonNullable: true, validators: [Validators.required] })
   });

   ngOnInit() {
      this.form.valueChanges.pipe(
         debounceTime(200)
      ).subscribe(() => {
         this.registration.updateStepData(RegistrationStep.Step3, this.form.getRawValue());
         this.registration.updateStepValidity(RegistrationStep.Step3, this.form.valid);
      });

      this.form.patchValue(this.registration.formData().step3);
   }

   onSubmit() {
      this.router.navigate(['/home']);
   }
}