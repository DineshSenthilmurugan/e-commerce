import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

const materialModules: any[] = [
    //   CdkTreeModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    //   MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    //   MatProgressSpinnerModule,
    //   MatPaginatorModule,
    //   MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    //   MatSnackBarModule,
    //   MatSortModule,
    //   MatTableModule,
    //   MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    //   MatButtonToggleModule,
    //   MatTreeModule,
    OverlayModule,
    MatDialogModule,
    //   PortalModule,
    //   MatBadgeModule,
    MatGridListModule,
    //   MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //   MatTooltipModule
    MatStepperModule,
    DragDropModule,
    MatBadgeModule,
    MatSliderModule,
    MatSnackBarModule,
    MatPaginatorModule,
];
@NgModule({
    imports: [...materialModules],
    exports: [...materialModules],
})
export class AngularMaterialModule {
    static forRoot() {
        return {
            ngModule: AngularMaterialModule,
            providers: [MatDatepickerModule],
        };
    }
}
