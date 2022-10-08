import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-side-navigation-menu',
    templateUrl: './side-navigation-menu.component.html',
    styleUrls: ['./side-navigation-menu.component.scss'],
})
export class SideNavigationMenuComponent implements OnInit {
    routerPath = '';
    constructor(private route: Router) {}

    ngOnInit(): void {
        this.route.events.subscribe((val) => {
            // see also
            if (val instanceof NavigationEnd) {
                this.routerPath = val.url;
                console.log(this.routerPath);
            }
        });
    }

    navigate(route: string) {
        this.route.navigateByUrl(route);
    }
}
