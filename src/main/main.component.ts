import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MainComponent implements OnInit {
  numbers: number[];
  constructor() {
    effect(() => {
      if (this.count()) {
        console.log('change');
      }
    });
  }

  ngOnInit() {}

  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }

  length = signal(1);
  breadth = signal(5);

  area = computed(() => this.length() * this.breadth());

  onLengthChange(event) {
    if (event.target.value) {
      this.length.set(event.target.value);
    }
  }
}
