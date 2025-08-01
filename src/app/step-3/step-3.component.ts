import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IStep3FormData } from './step-3.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { RegistrationData } from '../registration-data.service';

type Step3Form = FormGroup<{
  [K in keyof IStep3FormData]: FormControl<IStep3FormData[K]>;
}>

@Component({
  selector: 'app-step-3',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss', '../step-1/step-1.component.scss']
})
export class Step3Component {

  registrationData = inject(RegistrationData);
  router = inject(Router);
  
  step3Form: Step3Form = new FormGroup({
    aboutUs: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  })

  next() {
    this.registrationData.saveStep3Data(this.step3Form.getRawValue());
    this.router.navigate(['home'])
  }
}
