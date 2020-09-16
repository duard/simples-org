  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { SetttingsComponent } from './pages/setttings/setttings.component';
import { AboutComponent } from './pages/about/about.component'

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'settings',
        component: SetttingsComponent
      },
      // {
      //   path: `issue/:${ProjectConst.IssueId}`,
      //   component: FullIssueDetailComponent
      // },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}