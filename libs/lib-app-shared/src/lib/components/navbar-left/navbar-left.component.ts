import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

// import { AuthQuery } from '@trungk18/project/auth/auth.query';
// import { SearchDrawerComponent } from '../../search/search-drawer/search-drawer.component';
// import { AddIssueModalComponent } from '../../add-issue-modal/add-issue-modal.component';
@Component({
  selector: 'simples-org-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent implements OnInit {
  items: NavItem[];

  avatar = true;

  user = {
    name : 'Carlos Admin',
    avatarUrl : 'https://res.cloudinary.com/dvujyxh7e/image/upload/c_scale,w_48/v1592405732/ironman_c3jrbc.jpg'
  }
  constructor(
    // public authQuery: AuthQuery,
    private _drawerService: NzDrawerService,
    private _modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.items = [
      new NavItem('search', 'Search issues', this.openSearchDrawler.bind(this)),
      new NavItem('plus', 'Create issue', this.openCreateIssueModal.bind(this)),
    ];
  }

  openCreateIssueModal() {
    this._modalService.create({
      // nzContent: AddIssueModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700,
    });
  }

  openSearchDrawler() {
    this._drawerService.create({
      // nzContent: SearchDrawerComponent,
      nzTitle: null,
      nzPlacement: 'left',
      nzClosable: false,
      nzWidth: 500,
    });
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

interface Handler {
  (): void;
}
