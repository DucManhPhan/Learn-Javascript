import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';

import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit  {

  @ViewChild(ChildComponent) 
  private child: ChildComponent;

  parentMessage: string;

  constructor() { }

  ngAfterViewInit() {
    this.parentMessage = this.child.childMessage;
  }
}
