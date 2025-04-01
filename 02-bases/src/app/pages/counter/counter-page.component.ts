import { Component } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})

export class CounterPageComponent {
  counter = 10;

  changeVal(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
