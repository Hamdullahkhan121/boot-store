import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginTWOComponent } from './login-two/login-two.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: LoginTWOComponent },
  // { path: '', component: AppComponent, pathMatch: 'full' }, // Important: Default route
  // {path: '', redirectTo: '/login2', pathMatch: 'full'} // in case of some path i can redirect it to a different path using redirectTo: ''
];