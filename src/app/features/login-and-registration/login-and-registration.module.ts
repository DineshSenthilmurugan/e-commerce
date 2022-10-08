import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginAndRegistrationComponent } from './login-and-registration.component';
import { LOGIN_ROUTES } from './login-and-registration.routes';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterEmailComponent } from './register-email/register-email.component';
import { RegisterPasswordComponent } from './register-password/register-password.component';

@NgModule({
    declarations: [
        LoginAndRegistrationComponent,
        LoginComponent,
        RegisterEmailComponent,
        RegisterPasswordComponent,
        PasswordResetComponent,
    ],
    imports: [SharedModule, RouterModule.forChild(LOGIN_ROUTES)],
})
export class LoginAndRegistrationModule {}
