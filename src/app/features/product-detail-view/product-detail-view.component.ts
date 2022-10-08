import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { productActions } from 'src/app/store/products/products.action';
import { selectProductDetails } from 'src/app/store/products/products.selector';
import { AppState } from 'src/app/store/root.store';

@Component({
    selector: 'app-product-detail-view',
    templateUrl: './product-detail-view.component.html',
    styleUrls: ['./product-detail-view.component.scss'],
})
export class ProductDetailViewComponent implements OnInit, OnDestroy {
    unsubscribe$ = new Subject<undefined>();
    productDetails$: Observable<any>;
    constructor(private store$: Store<AppState>, private activateRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.productDetails$ = this.store$.select(selectProductDetails).pipe(takeUntil(this.unsubscribe$));
        this.activateRoute.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
            this.store$.dispatch(productActions.getProductDetails(params['productId']));
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(undefined);
        this.unsubscribe$.complete();
    }
}
