import { NotFoundPageComponent } from './ErrorPage/notFoundPage/notFoundPage.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { MainComponent } from './mainFolder/main/main.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { GuardGuard } from './Guard/guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: 'main',
    pathMatch: 'full',
    component: MainComponent,
    canActivate: [GuardGuard]
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
    component: RestaurantComponent,
    canActivate: [GuardGuard]
  },
  {path: '404',
  component: NotFoundPageComponent},
  {path: '**',
  redirectTo: '/404'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
