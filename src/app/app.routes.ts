import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginTWOComponent } from './login-two/login-two.component';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: LoginTWOComponent },
  { path: 'books', component: BookListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  // { path: '', component: AppComponent, pathMatch: 'full' }, // Important: Default route
  // {path: '', redirectTo: '/login2', pathMatch: 'full'} // in case of some path i can redirect it to a different path using redirectTo: ''
];