import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerProvider, reducerToken } from './root.store';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
import { asyncScheduler } from 'rxjs';
import { metaReducers, storeDevTools } from './metaReducers';
import { effects } from './all-effects';

@NgModule({
    imports: [
        StoreModule.forRoot(reducerToken, {
            metaReducers,
        }),
        EffectsModule.forRoot([...effects]),
        storeDevTools,
    ],
    providers: [reducerProvider, { provide: AsyncScheduler, useValue: asyncScheduler }],
})
export class AppStoreModule {
    static forRoot(): ModuleWithProviders<AppStoreModule> {
        return {
            ngModule: AppStoreModule,
        };
    }
}
