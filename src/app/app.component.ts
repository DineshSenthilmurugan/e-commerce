import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from './store/root.store';
import { selectSideNavigationValues } from './store/side-navigation/side-navigation.selectors';
import { ComponentName } from './store/side-navigation/side-navigation.types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    componentToOpen: string = '';
    componentName = ComponentName; // replace in futute, just component
    @ViewChild('sideNav') sidenav: MatSidenav;
    private unsubscribe$ = new Subject<undefined>();
    toggleSideNav = true;
    sideNavWidth = '80%';
    constructor(private store$: Store<AppState>, private router: Router) {}

    ngOnInit() {
        this.listenToSideNavigation();
        this.router.events.subscribe((val) => {
            // see also
            if (val instanceof NavigationEnd) {
                this.toggleSideNav = ['/member/login', '/member/email', '/member/password-reset'].includes(val.url);
                console.log(this.toggleSideNav);
            }
        });
    }

    listenToSideNavigation = () => {
        this.store$
            .select(selectSideNavigationValues)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((sideNav) => {
                const { open, componentName, mode, position, disableClose, width } = sideNav;
                if (open) {
                    this.sidenav.open();
                    this.sidenav.mode = mode;
                    this.sidenav.position = position;
                    this.sidenav.disableClose = disableClose;
                    this.sideNavWidth = width;
                    this.componentToOpen = componentName;
                } else {
                    if (this.sidenav) this.sidenav.close();
                    this.componentToOpen = '';
                }
            });
    };

    ngOnDestroy() {
        this.unsubscribe$.unsubscribe();
        this.unsubscribe$.complete();
    }
}
