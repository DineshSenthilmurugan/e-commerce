import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SellItemDialogComponent } from '../sell-item-dialog/sell-item-dialog.component';

@Component({
    selector: 'app-seller-item-history',
    templateUrl: './seller-item-history.component.html',
    styleUrls: ['./seller-item-history.component.scss'],
})
export class SellerItemHistoryComponent implements OnInit {
    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {}

    onSellClick() {
        this.dialog.open(SellItemDialogComponent, {
            width: '40%',
            autoFocus: false,
        });
    }
}
