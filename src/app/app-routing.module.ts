import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: 'main',
    pathMatch: 'full',
    component: MainComponent
  }, {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  }, {
    path: 'signup',
    pathMatch: 'full',
    component: SignupComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
