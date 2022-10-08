import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginAndRegistrationModule } from './features/login-and-registration/login-and-registration.module';
import { ProductDetailViewComponent } from './features/product-detail-view/product-detail-view.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { SellItemDialogComponent } from './features/sell-item-dialog/sell-item-dialog.component';
import { SellerItemHistoryComponent } from './features/seller-item-history/seller-item-history.component';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './store/store.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SellItemDialogComponent,
        SellerItemHistoryComponent,
        ProductListComponent,
        ProductDetailViewComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        LoginAndRegistrationModule,
        SharedModule.forRoot(),
        AppStoreModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
