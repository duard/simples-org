import { NgModule } from '@angular/core';
import { environment } from '@env/environment';

import { AutofocusDirective } from './directives/autofocus.directive';


@NgModule({
  declarations: [
    AutofocusDirective,
  ],
  exports: [
    AutofocusDirective,
  ],  


})
export class LibAppCoreModule {

}
