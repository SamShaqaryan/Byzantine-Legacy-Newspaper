import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [AuthRoutingModule,ReactiveFormsModule],
    providers: [],
})
export class AuthModule { }
