import { Routes } from '@angular/router';
import { REGISTRATION_ROUTES } from './registration/registration.routes';
import { HomeComponent } from './registration/home/home';
import { registrationGuard } from './core/registration.guard';

export const routes: Routes = [
   {
      path: 'home',
      component: HomeComponent,
   },

   {
      path: 'registration',
      loadChildren: () => REGISTRATION_ROUTES
   },

   { path: '', redirectTo: 'registration', pathMatch: 'full' }
];