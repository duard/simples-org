import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'simples-org-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() expanded: boolean;
  @Output() manualToggle = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.manualToggle.emit();
  }
}
