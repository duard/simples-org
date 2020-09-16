import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';
import { IssueUtil } from '@trungk18/project/utils/issue';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, debounceTime, startWith } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IssueModalComponent } from '../../issues/issue-modal/issue-modal.component';
import { ProjectIssueDto } from '@trungk18/core/graphql/service/graphql';
import { ProjectService } from '@trungk18/project/state/project/project.service';

@Component({
  selector: 'search-drawer',
  templateUrl: './search-drawer.component.html',
  styleUrls: ['./search-drawer.component.scss'],
})
@UntilDestroy()
export class SearchDrawerComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  results$: Observable<ProjectIssueDto[]>;
  recentIssues$: Observable<ProjectIssueDto[]>;

  get hasSearchTermInput(): boolean {
    return !!this.searchControl.value;
  }

  constructor(
    private _projectQuery: ProjectQuery,
    private _projectService: ProjectService,
    private _drawer: NzDrawerRef,
    private _modalService: NzModalService,
  ) {}

  ngOnInit(): void {
    let search$ = this.searchControl.valueChanges.pipe(debounceTime(50), startWith(this.searchControl.value));
    this.recentIssues$ = this._projectQuery.issues$.pipe(map((issues) => issues.slice(0, 5)));
    this.results$ = combineLatest([search$, this._projectQuery.issues$]).pipe(
      untilDestroyed(this),
      switchMap(([term, issues]) => {
        let matchIssues = issues.filter((issue) => {
          let foundInTitle = IssueUtil.searchString(issue.title, term);
          let foundInSummary = IssueUtil.searchString(issue.summary, term);
          return foundInTitle || foundInSummary;
        });
        return of(matchIssues);
      }),
    );
  }

  closeDrawer() {
    this._drawer.close();
  }

  openIssueModal(issue: ProjectIssueDto) {
    this._modalService.create({
      nzContent: IssueModalComponent,
      nzWidth: 1040,
      nzClosable: false,
      nzFooter: null,
      nzComponentParams: {
        issue$: this._projectService.findIssueById(issue.id),
      },
    });
    this.closeDrawer();
  }
}
