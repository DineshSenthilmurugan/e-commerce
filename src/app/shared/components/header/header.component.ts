import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { productActions } from 'src/app/store/products/products.action';
import { selectSearchedProductList } from 'src/app/store/products/products.selector';
import { Product } from 'src/app/store/products/products.types';
import { AppState } from 'src/app/store/root.store';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    isHeaderRequired = false;
    private unsubscribe$ = new Subject<undefined>();
    myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<Product[]>;
    constructor(private router: Router, private dialog$: MatDialog, private store$: Store<AppState>) {}

    ngOnInit(): void {
        this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.isHeaderRequired = !val.urlAfterRedirects.includes('member');
            }
        });

        this.filteredOptions = this.store$.select(selectSearchedProductList).pipe(takeUntil(this.unsubscribe$));
    }

    onSearchSelection(product: Product) {
        this.router.navigateByUrl(`/product-detail/${product._id}`);
        this.myControl.setValue('');
    }

    displayName(product: Product): string {
        return product && product.title ? product.title : '';
    }

    onProductSearch(event: any) {
        this.store$.dispatch(productActions.searchProduct(event.target.value));
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter((option) => option.toLowerCase().includes(filterValue));
    }

    ngOnDestroy(): void {
        this.unsubscribe$.complete();
        this.unsubscribe$.unsubscribe();
    }
}
