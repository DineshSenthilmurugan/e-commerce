import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { AngularMaterialModule } from '../angular-material.module';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { EDITOR_CONFIG } from './components/text-editor/editor.constant';
import { DialogComponent } from './components/dialog/dialog.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SideNavigationMenuComponent } from './components/side-navigation-menu/side-navigation-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    providers: [
        /* DONT ADD HERE */
    ],
    declarations: [
        TextEditorComponent,
        DialogComponent,
        BreadcrumbComponent,
        AccordionComponent,
        AttachmentComponent,
        SideNavigationMenuComponent,
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AngularMaterialModule.forRoot(),
        FlexLayoutModule,
        ReactiveFormsModule,
        NgxEditorModule.forRoot(EDITOR_CONFIG),
        NgxDropzoneModule,
    ],
    exports: [
        // modules
        CommonModule,
        HttpClientModule,
        AngularMaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        NgxEditorModule,
        NgxDropzoneModule,

        // components
        TextEditorComponent,
        BreadcrumbComponent,
        AccordionComponent,
        AttachmentComponent,
        SideNavigationMenuComponent,
        HeaderComponent,
    ],
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ApiService],
        };
    }
}
