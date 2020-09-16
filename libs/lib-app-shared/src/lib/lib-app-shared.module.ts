import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavbarLeftComponent } from './components/navbar-left/navbar-left.component';
import { ResizerComponent } from './components/resizer/resizer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavigationComponent, NavbarLeftComponent, ResizerComponent, SidebarComponent],
  exports: [NavigationComponent, NavbarLeftComponent, ResizerComponent, SidebarComponent],
})
export class LibAppSharedModule {}
