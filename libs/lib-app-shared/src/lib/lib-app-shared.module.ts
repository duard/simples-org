import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { QuillModule } from 'ngx-quill';

import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NZ_JIRA_ICONS } from './config/icons';
import { JiraControlModule } from './jira-control/jira-control.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    JiraControlModule,
    NzToolTipModule,
    NzModalModule,
    NzDropDownModule,
    NzSelectModule,
    NzNotificationModule,
    NzDrawerModule,
    NzPopoverModule,
    DragDropModule,
    TextFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule.forChild(NZ_JIRA_ICONS),
    ContentLoaderModule,
    QuillModule,
  ],
  declarations: [NavigationComponent, NavbarLeftComponent, ResizerComponent, SidebarComponent],
  exports: [NavigationComponent, NavbarLeftComponent, ResizerComponent, SidebarComponent],
})
export class LibAppSharedModule {}
