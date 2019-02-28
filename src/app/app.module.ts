import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoadingComponent } from './components/loading/loading.component';
import { Interceptor } from './services/http-service/interceptor';
import { LoginComponent } from './pages/login/login.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { EditProfileComponent } from './components/editProfile/editProfile.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    NavBarComponent,
    ToastComponent,
    LoadingComponent,
    LoginComponent,
    FaqComponent,
    RegisterFormComponent,
    LandingComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    ForgotPasswordComponent,
    EditProfileComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
