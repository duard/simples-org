import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'simples-org-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss'],
})
export class ResizerComponent implements OnInit {
  @Input() expanded: boolean;

  get icon() {
    return this.expanded ? 'chevron-left' : 'chevron-right';
  }
  constructor() {}

  ngOnInit(): void {}
}
