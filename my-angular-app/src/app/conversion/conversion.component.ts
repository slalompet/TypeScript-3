import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conversion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent {

  // convert celcius to fahrenheit in an array

  tempArr: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  constructor() { }

  addFahrenheit(celcius: number): number {
    return celcius * 9 / 5 + 32;
  }
}
