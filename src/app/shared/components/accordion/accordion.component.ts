import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-accordion-panel',
    template: `
        <mat-expansion-panel [disabled]="disabled === '' || disabled" [expanded]="expanded" hideToggle>
            <mat-expansion-panel-header>
                <mat-panel-title>
                    {{ title }}
                </mat-panel-title>
                <!-- <mat-panel-description *ngIf="icons">
        <ng-template ngFor let-icon [ngForOf]="icons">
          <button mat-icon-button>
            <mat-icon aria-label="icon button">{{icon}}</mat-icon>
          </button>
        </ng-template>
      </mat-panel-description> -->
            </mat-expansion-panel-header>
            <ng-content></ng-content>
        </mat-expansion-panel>
    `,
    styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
    @Input() title: string;
    @Input() expanded?: string;
    @Input() disabled?: string | boolean;
    // @Input() icons?: string[];
    constructor() {}
}
