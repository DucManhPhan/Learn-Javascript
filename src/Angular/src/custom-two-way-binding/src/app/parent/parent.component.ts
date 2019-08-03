import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input()
  amount = 500;

  constructor() { }

  ngOnInit() {
  }

  deposit() {
    this.amount += 100;
  }
}
