import { Component, Input, OnInit } from '@angular/core';
import { SideBarLink } from '../../interface/nav-links';
import { SideBarLinks } from '../../interface/sidebar';

@Component({
  selector: 'simples-org-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }
  
  sideBarLinks: SideBarLink[];

  project = {
    name : 'Goiabada',
    category : 'Tristeza'
  }

  constructor() { }

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }
}

/*

import { Component, Input, OnInit } from '@angular/core';
import { SideBarLink } from '../../interface/nav-links';
import { SideBarLinks } from '../../interface/sidebar';

@Component({
  selector: 'simples-org-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() expanded: boolean;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  // project: JProject;
  sideBarLinks: SideBarLink[];

  constructor(private _projectQuery: any) {
    // this._projectQuery.all$.pipe(untilDestroyed(this)).subscribe((project) => {
    //   this.project = project;
    // });
  }

  ngOnInit(): void {
    this.sideBarLinks = SideBarLinks;
  }

}

*/