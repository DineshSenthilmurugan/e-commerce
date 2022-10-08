import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { productActions } from 'src/app/store/products/products.action';
import { selectCatalogueList } from 'src/app/store/products/products.selector';
import { Catalogue } from 'src/app/store/products/products.types';
import { AppState } from 'src/app/store/root.store';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    catalogueList$: Observable<Catalogue[]> = of([]);
    unsubscribe$ = new Subject<undefined>();

    constructor(private store$: Store<AppState>) {}

    ngOnInit(): void {
        this.catalogueList$ = this.store$.select(selectCatalogueList).pipe(takeUntil(this.unsubscribe$));
        this.store$.dispatch(productActions.getCatalogueList());
    }
    ngOnDestroy(): void {
        this.unsubscribe$.next(undefined);
        this.unsubscribe$.complete();
    }
}
