export interface ProductState {
    apiStatus: Record<string, any>;
    productList: ProductListResponse;
    catalogue: Catalogue[];
    searchProductResult: any[];
    productDetail: Record<string, any> | null;
}

export interface Product {
    _id?: string;
    category: string;
    title: string;
    description: string;
    price: string;
    numberOfUnitsAvailable: string;
    createdAt?: string;
}

export interface Catalogue {
    _id: string;
    title: string;
    description: string;
}

export interface ProductListResponse {
    total: number;
    page: number;
    count: number;
    list: any[];
}
