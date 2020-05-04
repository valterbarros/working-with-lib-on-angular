import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-lib-style-guide',
  templateUrl: './lib-style-guide.component.html',
  styleUrls: ['./lib-style-guide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibStyleGuideComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
