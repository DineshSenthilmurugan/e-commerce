import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailViewComponent } from './features/product-detail-view/product-detail-view.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { SellerItemHistoryComponent } from './features/seller-item-history/seller-item-history.component';

const routes: Routes = [
    {
        path: 'sell',
        component: SellerItemHistoryComponent,
    },
    {
        path: 'product/:catalogueId',
        component: ProductListComponent,
    },
    {
        path: 'product-detail/:productId',
        component: ProductDetailViewComponent,
    },
    {
        path: 'catalogue',
        component: HomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
