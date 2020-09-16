import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { CustomSerializer, effects, reducers } from '.';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer,
    },
  ],
})
export class LibAppStoreModule {
  constructor() {
    console.log(' NGRX Loaded', effects);
  }
}
