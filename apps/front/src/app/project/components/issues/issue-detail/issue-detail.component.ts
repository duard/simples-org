import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectIssueDetailDto } from '@trungk18/core/graphql/service/graphql';
import { DeleteIssueModel } from '@trungk18/interface/ui-model/delete-issue-model';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IssueDeleteModalComponent } from '../issue-delete-modal/issue-delete-modal.component';

@Component({
  selector: 'issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss'],
})
export class IssueDetailComponent implements OnInit {
  @Input() issue: ProjectIssueDetailDto;
  @Input() isShowFullScreenButton: boolean;
  @Input() isShowCloseButton: boolean;
  @Output() onClosed = new EventEmitter();
  @Output() onOpenIssue = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<DeleteIssueModel>();

  constructor(public projectQuery: ProjectQuery, private _modalService: NzModalService) {}

  ngOnInit(): void {}

  openDeleteIssueModal() {
    this._modalService.create({
      nzContent: IssueDeleteModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzStyle: {
        top: '140px',
      },
      nzComponentParams: {
        issueId: this.issue.id,
        onDelete: this.onDelete,
      },
    });
  }

  closeModal() {
    this.onClosed.emit();
  }

  openIssuePage() {
    this.onOpenIssue.emit(this.issue.id);
  }
}
