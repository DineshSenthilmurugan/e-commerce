import {
    ProductActions,
    SUCCESS_GET_CATALOGUE,
    SUCCESS_GET_PRODUCT_DETAIL,
    SUCCESS_PRODUCTS_GET,
    SUCCESS_SEARCH_PRODUCT,
    UPDATE_API_STATUS,
} from './products.action';
import { ProductState } from './products.types';

const initialProductState: ProductState = {
    apiStatus: {},
    productList: {
        total: 0,
        page: 0,
        count: 0,
        list: [],
    },
    catalogue: [],
    searchProductResult: [],
    productDetail: null,
};

export const productReducer = (state = initialProductState, actions: ProductActions): ProductState => {
    switch (actions.type) {
        case UPDATE_API_STATUS:
            return {
                ...state,
                apiStatus: {
                    ...state.apiStatus,
                    [actions.payload.type]: actions.payload,
                },
            };
        case SUCCESS_PRODUCTS_GET:
            return { ...state, productList: actions.payload };
        case SUCCESS_GET_CATALOGUE:
            return { ...state, catalogue: actions.payload };
        case SUCCESS_SEARCH_PRODUCT:
            return { ...state, searchProductResult: actions.payload.list };
        case SUCCESS_GET_PRODUCT_DETAIL:
            return { ...state, productDetail: actions.product };
        default:
            return state;
    }
};
