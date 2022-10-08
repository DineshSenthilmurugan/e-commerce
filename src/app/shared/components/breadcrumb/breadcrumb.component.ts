import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectCatalogueList } from 'src/app/store/products/products.selector';
import { AppState } from 'src/app/store/root.store';

@Component({
    selector: 'app-breadcrumb',
    template: `
        <div class="ml-32 mr-10 mt-10 mb-5">
            <div class="breadcrumb-container">
                <nav class="breadcrumb-wrapper">
                    <a class="breadcrumb-link" href="javascript:void(0)" (click)="onRouterClick()">Catalogue</a>
                    <span class="material-icons breadcrumb-icon">chevron_right</span>
                    <a class="breadcrumb-link">{{ productName }}</a>
                    <!-- <span class="material-icons breadcrumb-icon">chevron_right</span> -->
                </nav>
            </div>
            <h1 *ngIf="title" class="breadcrum-title">{{ title }}</h1>
        </div>
    `,
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
    @Input() title?: string;
    productName = '';
    unsubscribe$ = new Subject<undefined>();
    constructor(private activateRoute: ActivatedRoute, private router: Router, private store$: Store<AppState>) {}
    ngOnInit(): void {
        this.activateRoute.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
            this.store$
                .select(selectCatalogueList)
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((list) => {
                    const filterList = list.filter((e) => e._id === params['catalogueId']);
                    if (filterList.length > 0) {
                        this.productName = filterList[0].title;
                    }
                });
        });
    }

    onRouterClick() {
        this.router.navigateByUrl('/catalogue');
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next(undefined);
        this.unsubscribe$.complete();
    }
}
