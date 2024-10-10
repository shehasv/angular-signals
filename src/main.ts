import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-main></app-main>`,
  imports: [MainComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
