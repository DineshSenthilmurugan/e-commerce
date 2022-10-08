import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { productActions } from 'src/app/store/products/products.action';
import { selectProductList } from 'src/app/store/products/products.selector';
import { ProductListResponse } from 'src/app/store/products/products.types';
import { AppState } from 'src/app/store/root.store';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
    productList$: Observable<ProductListResponse>;
    recordPerPage = 10;
    catalogueId = '';
    unsubscribe$ = new Subject<undefined>();
    constructor(private store$: Store<AppState>, private router: Router, private activateRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.activateRoute.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
            this.catalogueId = params['catalogueId'];
            this.getProducts();
        });
        this.productList$ = this.store$.select(selectProductList).pipe(takeUntil(this.unsubscribe$));
    }

    getProducts(page = 1) {
        this.store$.dispatch(
            productActions.getProductsList({
                page,
                count: this.recordPerPage,
                category: this.catalogueId,
            })
        );
    }

    onPaginationChange(event: any) {
        this.recordPerPage = event.pageSize;
        this.getProducts(event.pageIndex + 1);
    }

    onProductClick(product: any) {
        this.router.navigateByUrl(`/product-detail/${product._id}`);
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(undefined);
        this.unsubscribe$.complete();
    }
}
