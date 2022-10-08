import { createSelector } from '@ngrx/store';
import { AppState } from '../root.store';

const selectSideNavigationFeature = (state: AppState) => state.sideNavigation;

export const selectSideNavigationValues = createSelector(selectSideNavigationFeature, ({ properties, ...rest }) => {
    const { mode = 'over', disableClose = true, position = 'end' } = properties;
    return {
        ...rest,
        mode,
        disableClose,
        position,
        width: properties.width || '80%',
    };
});

export const selectSideNavigationData = createSelector(
    selectSideNavigationFeature,
    ({ properties }) => properties.data || null
);
