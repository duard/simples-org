import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simples-org-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  expanded: boolean;
  constructor() {
    this.expanded = true;
  }

  ngOnInit(): void {
    this.handleResize();
  }

  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', e => {
      console.log(e);
      this.expanded = e.matches;
    });
  }

  manualToggle() {
    this.expanded = !this.expanded;
  }
}
