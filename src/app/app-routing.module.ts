import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FaqComponent } from "./pages/faq/faq.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { AuthGuardService } from "./services/guards/auth-guard.service";
import { LoginComponent } from "./pages/login/login.component";
import { MyProfileComponent } from "./pages/my-profile/my-profile.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { EditprofileComponent } from "./components/editprofile/editprofile.component";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SecurityComponent } from './components/security/security.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent,
    children: [
      { path: "", component: LoginFormComponent },
      { path: "login", component: LoginFormComponent },
      { path: "register", component: RegisterFormComponent },
      { path: "security", component: SecurityComponent }
    ]
  },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "edit", component: EditprofileComponent },
  {
    path: "home",
    component: LandingComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "my-profile", component: MyProfileComponent },
      { path: "faqs", component: FaqComponent }
    ],
    canActivate: [AuthGuardService]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
