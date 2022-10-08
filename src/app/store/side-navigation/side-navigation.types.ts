import { MatDrawerMode } from '@angular/material/sidenav';

export enum ComponentName {
    MEETING = 'meeting-component',
    CANDIDATE = 'candidate-component',
}
// MEETING = 'meeting-component',
export interface SideNavProperties {
    mode?: MatDrawerMode;
    position?: 'start' | 'end';
    disableClose?: boolean;
    width?: string;
    data?: Record<string, any>;
}
export interface SideNavPayload {
    componentName: ComponentName | '';
    properties?: SideNavProperties;
}
