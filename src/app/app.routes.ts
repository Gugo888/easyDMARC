import { Routes } from '@angular/router';
import { Step1Component } from './step-1/step-1.component';
import { Step2Component } from './step-2/step-2.component';
import { Step3Component } from './step-3/step-3.component';
import { step2Guard } from './step-2/step-2-guard';
import { step3Guard } from './step-3/step-3-guard';
import { HomeComponent } from './home/home.component';
import { homeGuard } from './home/home.guard';

export const routes: Routes = [
   {
    path: '',
    children: [
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component, canActivate: [step2Guard] },
      { path: 'step3', component: Step3Component, canActivate: [step3Guard] },
      { path: 'home', component: HomeComponent, canActivate: [homeGuard] },
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
    ],
  },
];
