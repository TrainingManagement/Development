import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: 'landing', component: LandingComponent, children: [
      { path: '',  component: HomeComponent },
      { path: 'faqs', component: FaqComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
