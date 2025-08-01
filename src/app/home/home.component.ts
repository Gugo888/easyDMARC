import { Component, inject } from '@angular/core';
import { RegistrationData } from '../registration-data.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  data = inject(RegistrationData);
}