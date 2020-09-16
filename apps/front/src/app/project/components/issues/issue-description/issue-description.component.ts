import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { quillConfiguration } from '@trungk18/project/config/editor';
import { ProjectService } from '@trungk18/project/state/project/project.service';
import { ProjectIssueDto, ProjectIssueDetailDto } from '@trungk18/core/graphql/service/graphql';

@Component({
  selector: 'issue-description',
  templateUrl: './issue-description.component.html',
  styleUrls: ['./issue-description.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IssueDescriptionComponent implements OnChanges {
  @Input() issue: ProjectIssueDetailDto;
  descriptionControl: FormControl;
  editorOptions = quillConfiguration;
  isEditing: boolean;
  isWorking: boolean;

  constructor(private _projectService: ProjectService) {}

  ngOnChanges(changes: SimpleChanges): void {
    let issueChange = changes.issue;
    if (issueChange.currentValue !== issueChange.previousValue) {
      this.descriptionControl = new FormControl(this.issue.outputHtml);
    }
  }

  setEditMode(mode: boolean) {
    this.isEditing = mode;
  }

  editorCreated(editor: any) {
    editor.focus && editor.focus();
  }

  save() {
    this._projectService.updateIssue({
      ...this.issue,
      //TODO: change to bodyMarkdown
      summary: this.descriptionControl.value
    });
    this.setEditMode(false);
  }

  cancel() {
    this.descriptionControl.patchValue(this.issue.outputHtml);
    this.setEditMode(false);
  }

  ngOnInit(): void {}
}
