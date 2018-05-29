import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  title = 'my-first-app';
  currentRate = 8;
  constructor() { }

  ngOnInit() {
  }

}
