import { NotFoundPageComponent } from './ErrorPage/notFoundPage/notFoundPage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QueueContentComponent } from './mainFolder/queue-content/queue-content.component';
import { ProgressContentComponent } from './mainFolder/progress-content/progress-content.component';
import { DeleveryComponentComponent } from './mainFolder/delevery-component/delevery-component.component';
import { MainComponent } from './mainFolder/main/main.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Auth/services/auth.interceptor';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    QueueContentComponent,
    ProgressContentComponent,
    DeleveryComponentComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    RestaurantComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
