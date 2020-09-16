import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LibAppCoreModule } from '@simples-org/lib-app-core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NzSpinModule,
    NzIconModule.forRoot([]),
    QuillModule.forRoot(),
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    LibAppCoreModule,
    ProjectModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
