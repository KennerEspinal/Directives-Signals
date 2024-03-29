import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: ``
})
export class CounterPageComponent {
  counter = signal(10);
  squareCounter = computed(() => this.counter() ** 2)

  increaseBy(value: number) {
    this.counter.update(current => current + value);
  }

  decreaseBy(value: number) {
    this.counter.update(current => current - value);
  }
}
