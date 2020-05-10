import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Oauth2Handler } from './oauth2handler';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { HomeComponent } from './home/home/home.component';
import { Home_Module_routes } from './home/home-routing.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    children: Home_Module_routes,
    canActivate: [RouteGuardService] 
  },
  { path: 'oauth2/redirect', component: Oauth2Handler },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }