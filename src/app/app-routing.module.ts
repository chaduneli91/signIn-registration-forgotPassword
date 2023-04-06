import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent, title: 'signIn'},
  { path: 'registration', component: RegistrationComponent, title: 'registration'}, 
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'forgot-password'}, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
