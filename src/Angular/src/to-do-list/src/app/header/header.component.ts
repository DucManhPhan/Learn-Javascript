import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideNavigation() {
    let element = $("#top-nav");
    if (element.className === "topnav") {
      element.className += " responsive";
    } else {
      element.className = "topnav";
    }
  }

}
