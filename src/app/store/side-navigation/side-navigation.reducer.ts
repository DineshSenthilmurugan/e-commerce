import { CLOSE_SIDE_NAVIGATION, OPEN_SIDE_NAVIGATION, SideNavigationAction } from './side-navigation.actions';
import { SideNavPayload } from './side-navigation.types';

export interface SideNavigationState extends Required<SideNavPayload> {
    open: boolean;
}
export const initialSideNavigationState: SideNavigationState = {
    open: false,
    componentName: '',
    properties: {
        mode: 'over',
        position: 'end',
        disableClose: false,
        width: '90%',
    },
};

export const sideNavigationReducer = (
    state: SideNavigationState = initialSideNavigationState,
    action: SideNavigationAction
): SideNavigationState => {
    switch (action.type) {
        case OPEN_SIDE_NAVIGATION:
            return {
                ...state,
                open: true,
                componentName: action.componentName,
                properties: { ...state.properties, ...action.properties },
            };
        case CLOSE_SIDE_NAVIGATION:
            return { ...state, open: false };
        default:
            return state;
    }
};
