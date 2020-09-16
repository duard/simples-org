import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  expanded: boolean;
  constructor(
    
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.expanded = true;
  }

  ngOnInit(): void {
    this.getProjectBySlug();
    this.handleResize();
  }

  private getProjectBySlug() {
    //TODO Slug
    // let slug = this._route.snapshot.paramMap.get(JiraRoutingConst.Slug);
    // if (!slug) {
    //   this._router.navigate([`/${JiraRoutingConst.Login}`]);
    //   return;
    // }
    
  }

  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      this.expanded = e.matches;
    });
  }

  manualToggle() {
    this.expanded = !this.expanded;
  }
}
