import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Editor, Validators } from 'ngx-editor';
import { Observable, Subject, takeUntil } from 'rxjs';
import CONSTANT from 'src/app/app.constant';
import { productActions } from 'src/app/store/products/products.action';
import { selectAddProductApiStatus, selectCatalogueList } from 'src/app/store/products/products.selector';
import { Catalogue } from 'src/app/store/products/products.types';
import { AppState } from 'src/app/store/root.store';
import { ApiStatus } from 'src/app/store/store.types';

@Component({
    selector: 'app-sell-item-dialog',
    templateUrl: './sell-item-dialog.component.html',
    styleUrls: ['./sell-item-dialog.component.scss'],
})
export class SellItemDialogComponent implements OnInit, OnDestroy {
    textEditor;
    html: string = '';
    sellItemForm: FormGroup;
    catalogueList$: Observable<Catalogue[]>;
    unsubscribe$ = new Subject<undefined>();

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<SellItemDialogComponent>,
        private store$: Store<AppState>
    ) {
        this.textEditor = new Editor();
    }

    ngOnInit(): void {
        this.catalogueList$ = this.store$.select(selectCatalogueList).pipe(takeUntil(this.unsubscribe$));
        this.store$.dispatch(productActions.getCatalogueList());
        this.store$.dispatch(
            productActions.updateApiStatus({
                type: `${CONSTANT.Routes.ADD_PRODUCT}_POST`,
                status: ApiStatus.NONE,
            })
        );
        this.store$
            .select(selectAddProductApiStatus)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((status) => {
                if (status) {
                    this.dialogRef.close();
                }
            });
        this.sellItemForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required],
            price: ['', [Validators.required]],
            numberOfUnitsAvailable: ['', Validators.required],
        });
    }

    onAddingItem() {
        if (this.sellItemForm.valid) {
            this.store$.dispatch(
                productActions.updateApiStatus({
                    type: `${CONSTANT.Routes.ADD_PRODUCT}_POST`,
                    status: ApiStatus.PROGRESS,
                })
            );
            this.store$.dispatch(
                productActions.addProduct({
                    ...this.sellItemForm.value,
                    postedBy: '600e55b39aca253304a8eca6',
                })
            );
        } else {
            this.sellItemForm.markAllAsTouched();
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(undefined);
        this.unsubscribe$.complete();
    }
}
