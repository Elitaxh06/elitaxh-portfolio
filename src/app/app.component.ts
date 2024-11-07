import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolio';
}
