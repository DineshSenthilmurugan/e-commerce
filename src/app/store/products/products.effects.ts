import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, distinctUntilChanged, filter, from, map, mergeMap, switchMap, tap } from 'rxjs';
import CONSTANT from 'src/app/app.constant';
import { ApiService } from 'src/app/shared/services/api.service';
import {
    ADD_PRODUCT,
    GET_CATALOGUE,
    GET_PRODUCTS,
    GET_PRODUCT_DETAIL,
    productActions,
    SEARCH_PRODUCT,
    SHOW_SNACKBAR,
} from './products.action';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiStatus } from '../store.types';
import { Catalogue, ProductListResponse } from './products.types';

@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions, private apiService: ApiService, private snackbar: MatSnackBar) {}

    @Effect()
    addProduct$ = this.actions$.pipe(
        ofType(ADD_PRODUCT),
        map((action: any) => action.payload),
        switchMap((data) => {
            return this.apiService.doPost<any>(CONSTANT.Routes.ADD_PRODUCT, data).pipe(
                mergeMap(() => [
                    productActions.updateApiStatus({
                        type: `${CONSTANT.Routes.ADD_PRODUCT}_POST`,
                        status: ApiStatus.SUCCESS,
                    }),
                    productActions.showSnackbar({ msg: 'Product addedd successfully', type: 'success' }),
                ]),
                catchError(() => {
                    return from([
                        productActions.updateApiStatus({
                            type: `${CONSTANT.Routes.ADD_PRODUCT}_POST`,
                            status: ApiStatus.ERROR,
                        }),
                        productActions.showSnackbar({ msg: 'Unable to add product', type: 'error' }),
                    ]);
                })
            );
        })
    );

    @Effect()
    getProductsList$ = this.actions$.pipe(
        ofType(GET_PRODUCTS),
        map((action: any) => action.payload),
        switchMap((params) => {
            return this.apiService.doGet<ProductListResponse>(CONSTANT.Routes.PRODUCT_GET, params).pipe(
                map((response) => productActions.successProductList(response)),
                catchError(() =>
                    from([
                        productActions.successProductList({
                            total: 0,
                            page: 0,
                            count: 0,
                            list: [],
                        }),
                    ])
                )
            );
        })
    );

    @Effect()
    getCatalogueList$ = this.actions$.pipe(
        ofType(GET_CATALOGUE),
        switchMap(() => {
            return this.apiService.doGet<any>(CONSTANT.Routes.CATALOGUE_GET).pipe(
                map((response) => productActions.successCatalogueList(response.list)),
                catchError(() => from([productActions.successCatalogueList([])]))
            );
        })
    );

    @Effect()
    getProductDetails$ = this.actions$.pipe(
        ofType(GET_PRODUCT_DETAIL),
        map((action: any) => action.productId),
        switchMap((productId) => {
            return this.apiService.doGet<any>(`${CONSTANT.Routes.PRODUCT_GET}/${productId}`).pipe(
                map((response) => productActions.successGetProductDetails(response)),
                catchError(() => from([productActions.successGetProductDetails(null)]))
            );
        })
    );

    @Effect()
    searchProduct$ = this.actions$.pipe(
        ofType(SEARCH_PRODUCT),
        map((action: any) => action.searchKey),
        filter(Boolean),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((searchKey) => {
            const param = {
                page: 1,
                count: 10,
                title: searchKey,
            };
            return this.apiService.doGet<any>(CONSTANT.Routes.PRODUCT_GET, param).pipe(
                map((response) => productActions.successSearchProduct(response)),
                catchError(() => from([productActions.successSearchProduct([])]))
            );
        })
    );

    @Effect()
    showSnackbar$ = this.actions$.pipe(
        ofType(SHOW_SNACKBAR),
        map((action: any) => action.payload),
        tap(({ msg, type }) => {
            this.snackbar.open(msg, 'Ok', {
                duration: 3000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: [type === 'success' ? 'green-snackbar' : 'red-snackbar'],
            });
        })
    );
}
