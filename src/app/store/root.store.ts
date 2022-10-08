import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { ProductActions } from './products/products.action';
import { productReducer } from './products/products.reducer';
import { ProductState } from './products/products.types';
import { SideNavigationAction } from './side-navigation/side-navigation.actions';
import { sideNavigationReducer, SideNavigationState } from './side-navigation/side-navigation.reducer';

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');

export interface AppState {
    sideNavigation: SideNavigationState;
    product: ProductState;
}

type All_ACTIONS = SideNavigationAction & ProductActions;

export function getReducers(): ActionReducerMap<AppState, All_ACTIONS> {
    return {
        sideNavigation: sideNavigationReducer,
        product: productReducer,
    };
}

export const reducerProvider = [{ provide: reducerToken, useFactory: getReducers }];
