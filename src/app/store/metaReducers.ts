import { ModuleWithProviders } from '@angular/core';
import { MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { AppState } from './root.store';

/** For debug purpose */
const logger = (state: AppState, action: any) => {
    console.groupCollapsed(action.type);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c state`, `color: #9E9E9E; font-weight:bold`, state);
    console.groupEnd();
};

export const storeDevTools: ModuleWithProviders<StoreDevtoolsModule>[] = [
    StoreDevtoolsModule.instrument({
        name: 'Application store',
        maxAge: 25,
        logOnly: environment.production,
        monitor: (state, action) => {
            if (!environment.production) {
                logger(state, action);
            }
        },
    }),
];
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
