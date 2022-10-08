import { createSelector } from '@ngrx/store';
import CONSTANT from 'src/app/app.constant';
import { AppState } from '../root.store';
import { ApiStatus } from '../store.types';

const selectProductFeature = (state: AppState) => state.product;

//export const selectCandidateBoardList = createSelector(selectProductFeature, (state) => state.board);

export const selectApiStatus = createSelector(selectProductFeature, (state) => state.apiStatus);

export const selectAddProductApiStatus = createSelector(
    selectApiStatus,
    (state) => state && state[`${CONSTANT.Routes.ADD_PRODUCT}_POST`].status === ApiStatus.SUCCESS
);

export const selectProductList = createSelector(selectProductFeature, (state) => state.productList);

export const selectCatalogueList = createSelector(selectProductFeature, (state) => state.catalogue);

export const selectSearchedProductList = createSelector(selectProductFeature, (state) => state.searchProductResult);

export const selectProductDetails = createSelector(selectProductFeature, (state) => state.productDetail);
