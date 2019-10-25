import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss']
})
export class CustomCounterComponent implements OnInit {

  counterValue = 0;

  @Input()
  get counter() {
    return this.counterValue;
  }

  @Output()
  counterChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    --this.counterValue;
    this.counterChange.emit(this.counterValue);
  }

  increment() {
    ++this.counterValue;
    this.counterChange.emit(this.counterValue);
  }

}
