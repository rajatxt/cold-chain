import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { ButtonComponent } from '../../components/button/button.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
