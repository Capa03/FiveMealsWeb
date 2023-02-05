import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { MainComponent } from './mainFolder/main/main.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

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
  }, {
    path: 'restaurant',
    pathMatch: 'full',
    component: RestaurantComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
