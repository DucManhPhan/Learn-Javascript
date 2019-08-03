import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  amount: number;

  @Output()
  amountChange = new EventEmitter<number>();

  withdraw() {
    this.amount -= 100;
    this.amountChange.emit(this.amount);
  }

  constructor() { }

  ngOnInit() {
  }

}
