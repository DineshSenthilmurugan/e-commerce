import { Routes } from '@angular/router';
import { LoginAndRegistrationComponent } from './login-and-registration.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterEmailComponent } from './register-email/register-email.component';
import { RegisterPasswordComponent } from './register-password/register-password.component';

export const loginAndRigistrationRouteNames = {
    ROOT: 'member',
    LOGIN: 'login',
    EMAIL: 'email',
    PASSWORD: 'create-password',
    RESET_PASSWORD: 'password-reset',
};

export const LOGIN_ROUTES: Routes = [
    { path: '', redirectTo: loginAndRigistrationRouteNames.ROOT, pathMatch: 'full' },
    {
        path: loginAndRigistrationRouteNames.ROOT,
        component: LoginAndRegistrationComponent,
        children: [
            { path: '', redirectTo: loginAndRigistrationRouteNames.LOGIN, pathMatch: 'full' },
            {
                path: loginAndRigistrationRouteNames.LOGIN,
                component: LoginComponent,
            },
            {
                path: loginAndRigistrationRouteNames.EMAIL,
                component: RegisterEmailComponent,
            },
            {
                path: loginAndRigistrationRouteNames.PASSWORD,
                component: RegisterPasswordComponent,
            },
            {
                path: loginAndRigistrationRouteNames.RESET_PASSWORD,
                component: PasswordResetComponent,
            },
        ],
    },
];
