import { createAction, ExtractActionTypes } from '../store.types';
import { Catalogue, Product, ProductListResponse } from './products.types';

export const ADD_PRODUCT = '[PRODUCT] Add Product';
export const GET_PRODUCTS = '[PRODUCT] Get Products List';
export const SUCCESS_PRODUCTS_GET = '[PRODUCT] Product Get Success';
export const GET_CATALOGUE = '[PRODUCT] Get Catalogue List';
export const SUCCESS_GET_CATALOGUE = '[PRODUCT] Success Get Catalogue';
export const SHOW_SNACKBAR = 'Show Snackbar';
export const UPDATE_API_STATUS = 'Update Api Status';
export const SEARCH_PRODUCT = 'Search Products';
export const SUCCESS_SEARCH_PRODUCT = 'Success Search Products';
export const GET_PRODUCT_DETAIL = '[PRODUCT] Get Product details';
export const SUCCESS_GET_PRODUCT_DETAIL = '[PRODUCT] SUCCESS Get Product details';

export const productActions = {
    addProduct: (payload: Product) => createAction(ADD_PRODUCT, { payload }),
    getProductsList: (payload: { page: number; count: number; category: string }) =>
        createAction(GET_PRODUCTS, { payload }),
    successProductList: (payload: ProductListResponse) => createAction(SUCCESS_PRODUCTS_GET, { payload }),
    getCatalogueList: () => createAction(GET_CATALOGUE),
    successCatalogueList: (payload: Catalogue[]) => createAction(SUCCESS_GET_CATALOGUE, { payload }),
    showSnackbar: (payload: { msg: string; type: 'success' | 'error' }) => createAction(SHOW_SNACKBAR, { payload }),
    searchProduct: (searchKey: string) => createAction(SEARCH_PRODUCT, { searchKey }),
    successSearchProduct: (payload: any) => createAction(SUCCESS_SEARCH_PRODUCT, { payload }),
    updateApiStatus: (payload: any) => createAction(UPDATE_API_STATUS, { payload }),
    getProductDetails: (productId: string) => createAction(GET_PRODUCT_DETAIL, { productId }),
    successGetProductDetails: (product: any) => createAction(SUCCESS_GET_PRODUCT_DETAIL, { product }),
};

export type ProductActions = ExtractActionTypes<typeof productActions>;
