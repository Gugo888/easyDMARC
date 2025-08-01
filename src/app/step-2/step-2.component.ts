import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Industry, IStep2FormData, Role } from './step-2.model';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RegistrationData } from '../registration-data.service';
import { Router } from '@angular/router';

type Step2Form = FormGroup<{
  [K in keyof IStep2FormData]: FormControl<IStep2FormData[K]>;
}>

@Component({
  selector: 'app-step-2',
  imports: [MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './step-2.component.html',
  styleUrls: ['./step-2.component.scss', '../step-1/step-1.component.scss']
})
export class Step2Component {

  registrationData = inject(RegistrationData);
  router = inject(Router);

  step2Form: Step2Form = new FormGroup({
    industry: new FormControl<Industry>(Industry.Marketing, { nonNullable: true, validators: [Validators.required] }),
    yourRole: new FormControl<Role>(Role.Developer, { nonNullable: true, validators: [Validators.required] }),
    experienceInYears: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(50)] }),
  })

  industries = Object.values(Industry);
  roles = Object.values(Role);

  next() {
    this.registrationData.saveStep2Data(this.step2Form.getRawValue());
    this.router.navigate(['step3'])
  }
}
