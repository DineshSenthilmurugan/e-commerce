import { createAction, ExtractActionTypes } from '../store.types';
import { ComponentName, SideNavPayload, SideNavProperties } from './side-navigation.types';

export const OPEN_SIDE_NAVIGATION = '[ Side Navigation ] open';
export const CLOSE_SIDE_NAVIGATION = '[ Side Navigation ] close';

export const sideNavigationActions = {
    openSideNav: (componentName: ComponentName, payload: SideNavProperties = {}) =>
        createAction<string, SideNavPayload>(OPEN_SIDE_NAVIGATION, { componentName, properties: payload }),
    closeSideNav: () => createAction(CLOSE_SIDE_NAVIGATION),
};

export type SideNavigationAction = ExtractActionTypes<typeof sideNavigationActions>;
