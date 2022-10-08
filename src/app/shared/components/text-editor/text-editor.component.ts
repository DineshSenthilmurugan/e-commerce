import { Component, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { TOOLBAR } from './editor.constant';

@Component({
    selector: 'app-text-editor',
    template: `
        <div class="NgxEditor__Wrapper">
            <ngx-editor-menu [editor]="textEditor" [toolbar]="toolbar"> </ngx-editor-menu>
            <ngx-editor formControlName="value" [editor]="textEditor" [placeholder]="'Type here...'"> </ngx-editor>
        </div>
    `,
    styleUrls: ['./text-editor.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextEditorComponent),
            multi: true,
        },
    ],
})
export class TextEditorComponent implements OnDestroy, ControlValueAccessor {
    textEditor;
    html: string = '';
    toolbar: Toolbar = TOOLBAR;
    value = '';
    onChange: any = () => {};
    onTouched: any = () => {};
    constructor() {
        this.textEditor = new Editor();
    }

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    ngOnDestroy(): void {
        this.textEditor.destroy();
    }
}
